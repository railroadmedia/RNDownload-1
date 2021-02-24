import React from 'react';

import {
  View,
  Text,
  Alert,
  Platform,
  Animated,
  AppState,
  Dimensions,
  PixelRatio,
  TouchableOpacity,
  ActivityIndicator,
  PermissionsAndroid,
  DeviceEventEmitter
} from 'react-native';

import RNFetchBlob from 'rn-fetch-blob';
import RNBackgroundDownloader from 'react-native-background-downloader';

import AnimatedCustomAlert from './AnimatedCustomAlert';

import { download, trash, stopDownload } from './img/svgs';

let progresses = {};
let allDownloads = [];
let offlineFiles = [];
let offlineContent = {};
let securedPath, publicPath;
let publicOfflineFiles = [];
let securedOfflineFiles = [];
let { width, height } = Dimensions.get('screen');
width = width < height ? width : height;

const pixR = PixelRatio.get();
const isiOS = Platform.OS === 'ios';

export default class Download_V2 extends React.PureComponent {
  id = '';
  tasks = [];
  progressWidth = 0;
  progressTranslateX = new Animated.Value(0);

  state = {
    status: ''
  };

  constructor(props) {
    super(props);

    publicPath =
      props.publicPath ||
      RNFetchBlob.fs.dirs[isiOS ? 'DocumentDir' : 'DownloadDir'];
    securedPath =
      props.securedPath ||
      RNFetchBlob.fs.dirs.LibraryDir ||
      RNFetchBlob.fs.dirs.DocumentDir;
    this.id = props.entity.id;
  }

  componentDidMount() {
    this.resumeThis();
    AppState.addEventListener('change', this.handleAppState);
  }

  componentWillUnmount() {
    this.listenForLargestFile?.remove?.();
    AppState.removeEventListener('change', this.handleAppState);
  }

  static addEventListener(callback) {
    let progressListener = p => {
      progresses[p.id] = p.val;
      let val = Object.values(progresses);
      val = val.reduce((t, i) => t + i) / val.length;
      if (val === 1) progresses = {};
      callback?.(
        val === 1
          ? {}
          : {
              val,
              allDownloads,
              largestDownloads: allDownloads.filter(ed =>
                Object.values(offlineContent).some(
                  oc => oc.fileSizes.largestFile === ed.id
                )
              )
            }
      );
    };
    DeviceEventEmitter.addListener('dldProgress', progressListener);
    return {
      remove: () =>
        DeviceEventEmitter.removeListener('dldProgress', progressListener)
    };
  }

  static async resumeAll(
    securedP = RNFetchBlob.fs.dirs.LibraryDir ||
      RNFetchBlob.fs.dirs.DocumentDir,
    publicP = RNFetchBlob.fs.dirs.DocumentDir
  ) {
    publicPath = publicP;
    securedPath = securedP;
    publicOfflineFiles = await getPublicOfflineFiles();
    securedOfflineFiles = await getSecuredOfflineFiles();
    offlineFiles = publicOfflineFiles.concat(securedOfflineFiles);
    offlineContent = await getOfflineContent();
    handleOldOfflineFormat();
    allDownloads = await RNBackgroundDownloader.checkForExistingDownloads();
    Object.values(offlineContent).map(oc => {
      dldingToDlded(oc);
      oc.dlding
        .map(d => ({ ...d }))
        .map(dlding => {
          let task = allDownloads.find(ad => ad.id === dlding.id);
          let restart = () => {
            delete progresses[task.id];
            task.stop();
            delete dlding.headers;
            task = RNBackgroundDownloader.download(dlding);
            allDownloads.map((ad, i) => {
              if (ad.id === task.id) allDownloads[i] = task;
            });
            resume();
          };
          let resume = () => {
            task
              ?.begin(expectedBytes =>
                handleLessonSize(oc, task.id, expectedBytes)
              )
              ?.progress(p => progress(p, oc, task, dlding))
              ?.done(() => done(oc, task.id, dlding))
              ?.error(e => {
                if (e.includes('No such file or directory'))
                  RNFetchBlob.fs
                    .unlink(dlding.destination)
                    .then(restart)
                    .catch(restart);
                if (e.includes('No space left on device')) {
                  deleteLesson(oc.id);
                  let title = (oc?.overview || oc.lesson)?.fields?.find(
                    f => f.key === 'title'
                  )?.value;
                  Alert.alert(
                    `Error while downloading ${title}`,
                    'There is insufficient storage space on your device. Please free up some space and try again.',
                    [{ text: 'OK' }],
                    { cancelable: false }
                  );
                }
              });
          };
          if (task && task.state === 'DONE' && !offlineFiles.includes(task.id))
            RNFetchBlob.fs
              .unlink(dlding.destination)
              .then(restart)
              .catch(restart);
          else resume();
        });
    });
  }

  handleAppState = state => {
    if (state === 'active') {
      if (!this.tasks?.some(t => t.state !== 'DONE'))
        this.setState({ status: 'Downloaded' });
      let oc = offlineContent[this.id];
      let largestDld = this.tasks.find(t => t.id === oc.fileSizes.largestFile);
      largestDld?.progress(p => progress.call(this, p, oc, largestDld));
    }
  };

  hd720OrHighestVideo = videos =>
    videos
      .filter(v => v.height <= 720)
      .filter(v => v.height <= -~width * pixR)
      .sort((a, b) => (a.height < b.height ? -1 : 1))
      .pop();

  deref = async () => {
    let content = await this.props.entity.content;
    if (Object.keys(content).length === 1) content = content.data[0];
    let lesson = content?.lessons?.length ? undefined : content;
    if (
      lesson?.fields
        ?.find(f => f.key === 'video')
        ?.value?.type?.toLowerCase()
        ?.includes('youtube')
    ) {
      this.setState({ status: 'Download' });
      return Alert.alert(
        'Copyrighted material',
        'This video contains copyrighted material and is not available for offline viewing.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
    let overview = content?.lessons?.length ? content : undefined;
    let { comments } = this.props.entity;
    if (!lesson && !overview) {
      this.setState({ status: 'Download' });
      return Alert.alert(
        `Oh no, we dropped a stick...`,
        'Drumeo is down, we are working on a fix and it should be back shortly, thank you for your patience.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
    offlineContent[this.id] = {
      dlded: [],
      dlding: [],
      fileSizes: {},
      sizeInBytes: 0,
      id: this.id
    };
    let derefLesson = lesson => ({
      ...lesson,
      video_playback_endpoints: [
        {
          ...this.hd720OrHighestVideo(lesson.video_playback_endpoints)
        }
      ],
      data: [
        { ...lesson.data.find(d => d.key === 'thumbnail_url') },
        { ...lesson.data.find(d => d.key === 'description') }
      ].concat(
        lesson.data
          .filter(d => d.key.includes('_click_url'))
          .map(d => ({ ...d }))
      ),
      related_lessons: lesson.related_lessons?.map(rl => ({
        ...rl,
        data: [{ ...rl.data.find(d => d.key === 'thumbnail_url') }]
      })),
      assignments: lesson.assignments?.map(a => ({
        ...a,
        data: a.data?.map(d => ({
          ...d
        }))
      })),
      resources: Object.values(lesson.resources || {})?.map(r => ({
        ...r
      })),
      comments: (comments || lesson.comments)?.map(c => ({
        ...c,
        user: { ...c.user }
      }))
    });

    if (lesson) offlineContent[this.id].lesson = derefLesson(lesson);

    if (overview)
      offlineContent[this.id].overview = {
        ...overview,
        data: [{ ...overview.data.find(d => d.key === 'thumbnail_url') }],
        lessons: overview.lessons.map(l => derefLesson(l))
      };
    return true;
  };

  resumeThis = () => {
    let oc =
      offlineContent[this.id] ||
      Object.values(offlineContent).find(offc =>
        offc.overview?.lessons.some(l => l.id === this.id)
      );
    if (oc) {
      if (oc.dlding.length) {
        this.setState({ status: 'Downloading' });
        if (!oc.fileSizes.largestFile)
          return (this.listenForLargestFile = Download_V2.addEventListener(
            p => {
              if (
                p.largestDownloads.some(
                  ld => ld.id === oc.fileSizes.largestFile
                )
              ) {
                this.resumeThis();
                this.listenForLargestFile.remove();
              }
            }
          ));
        this.tasks = allDownloads.filter(ad =>
          oc.dlding.some(d => d.id === ad.id)
        );
        this.tasks.map(task => {
          if (oc.fileSizes.largestFile === task.id)
            task?.progress(p => progress.call(this, p, oc, task));
          task?.done(() => done.call(this, oc, task.id));
        });
      } else {
        this.setState({ status: 'Downloaded' });
      }
    } else {
      this.setState({ status: 'Download' });
    }
  };

  download = async () => {
    this.setState({ status: 'Downloading' });
    if (!(await this.deref())) return;
    let lessons = offlineContent[this.id].overview?.lessons.filter(
      l => !Object.values(offlineContent).some(oc => oc.id === l.id)
    ) || [offlineContent[this.id].lesson];
    let promises = lessons.map(l => this.downloadVideo(l));
    if (offlineContent[this.id].overview)
      promises.push(this.downloadThumb(offlineContent[this.id].overview));
    promises
      .concat(lessons.map(l => this.downloadThumb(l)))
      .concat(this.downloadResource(lessons))
      .concat(this.downloadMp3s(lessons))
      .concat(this.downloadAssignment(lessons))
      .concat(this.downloadRelatedThumb(lessons))
      .concat(this.downloadCommentUserProfile(lessons));
    if (offlineContent[this.id].overview)
      promises.push(this.downloadThumb(offlineContent[this.id].overview));
    Promise.all(promises).then(() => {
      this.setState({ status: 'Downloaded' });
      setOfflineContent();
    });
    setOfflineContent();
  };

  downloadMp3s = lessons =>
    lessons
      .map(l => l.data?.filter(d => d.key?.includes('_click_url')))
      .flat()
      .map(
        d =>
          new Promise(res => {
            let url = d.value;
            let id = `${d.id}.mp3`;
            this.downloadItem(id, url, securedPath).then(value => {
              d.value = value;
              res();
            });
          })
      );

  downloadVideo = lesson =>
    new Promise(res => {
      let url = lesson.video_playback_endpoints[0].file;
      let id = `${lesson.id}Video${lesson.video_playback_endpoints[0].height}.mp4`;
      this.downloadItem(id, url, securedPath).then(file => {
        lesson.video_playback_endpoints[0].file = file;
        res();
      });
    });

  downloadAssignment = lessons => {
    let assignments = [];
    lessons.map(l =>
      l.assignments?.map(a =>
        a.data?.map(d => {
          if (d.key === 'sheet_music_image_url') assignments.push(d);
        })
      )
    );
    assignments.map(
      a =>
        new Promise(res => {
          let extension = a.value.split('.').pop();
          let url = a.value;
          let id = `${a.id}.${extension}`;
          this.downloadItem(id, url, securedPath).then(value => {
            a.value = value;
            RNFetchBlob.fs
              .readFile(a.value)
              .then(result => {
                let vb = result
                  ?.split('viewBox="')?.[1]
                  ?.split('"')?.[0]
                  .split(' ');
                if (vb[2] && vb[3]) a.whRatio = vb[2] / vb[3];
              })
              .catch(() => {});
            res();
          });
        })
    );
  };

  downloadThumb = lesson =>
    new Promise(async res => {
      let thumb = lesson.data[0];
      if (!thumb) return res();
      let extension = thumb.value.split('.').pop();
      if (!['jpeg', 'jpg', 'png'].includes(extension))
        extension = (await fetch(thumb.value))?.headers?.map?.['content-type']
          ?.split('/')
          ?.pop();
      let url = thumb.value;
      let id = `${thumb.id}.${extension}`;
      this.downloadItem(id, url, securedPath).then(value => {
        thumb.value = value;
        res();
      });
    });

  downloadRelatedThumb = lessons =>
    lessons
      .reduce(
        (a, b) => ({
          related_lessons: a.related_lessons.concat(b.related_lessons)
        }),
        { related_lessons: [] }
      )
      .related_lessons.map(rl => rl.data.find(d => d.key === 'thumbnail_url'))
      .map(
        thumb =>
          new Promise(async res => {
            if (!thumb) return res();
            let extension = thumb.value.split('.').pop();
            if (!['jpeg', 'jpg', 'png'].includes(extension))
              extension = (await fetch(thumb.value))?.headers?.map?.[
                'content-type'
              ]
                ?.split('/')
                ?.pop();
            let url = thumb.value;
            let id = `${thumb.id}.${extension}`;
            this.downloadItem(id, url, securedPath).then(value => {
              thumb.value = value;
              res();
            });
          })
      );

  downloadCommentUserProfile = lessons =>
    lessons
      .reduce((a, b) => ({ comments: a.comments.concat(b.comments) }), {
        comments: []
      })
      .comments.map(
        c =>
          new Promise(res => {
            let extension = c.user['fields.profile_picture_image_url']
              ?.split('.')
              ?.pop();
            let url = c.user['fields.profile_picture_image_url'];
            let id = `${c.user_id}.${extension}`;
            if (id && url)
              this.downloadItem(id, url, securedPath).then(value => {
                c.user['fields.profile_picture_image_url'] = value;
                res();
              });
            else res();
          })
      );

  downloadResource = async lessons => {
    if (!isiOS) {
      let granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Write to external Storage',
          message: 'For downloading resources we need your permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) return [];
    }
    lessons
      .map(l => ({
        ...l,
        resources: l.resources.map(r => {
          r.title = l.fields.find(f => f.key === 'title')?.value;
          return r;
        })
      }))
      .reduce((a, b) => ({ resources: a.resources.concat(b.resources) }), {
        resources: []
      })
      .resources.map(
        r =>
          new Promise(res => {
            let extension = r.resource_url.split('.').pop();
            let url = r.resource_url;
            let id = `${r.resource_id}.${extension}`;
            this.downloadItem(id, url, `${publicPath}/${r.title || ''}`).then(
              resource_url => {
                r.resource_url = resource_url;
                res();
              }
            );
          })
      );
  };

  downloadItem = (taskId, url, path) =>
    new Promise(res => {
      let oc = offlineContent[this.id];
      oc.dlding.push({
        id: taskId,
        url: url.replace(/ /g, '%20'),
        destination: `${path}/${taskId}`
      });
      if (allDownloads.find(t => t.id === `${taskId}`)) {
        done.call(this, oc, taskId);
        return res(`${isiOS ? '' : 'file://'}${path}/${taskId}`);
      }
      let task = RNBackgroundDownloader.download({
        id: taskId,
        url: url.replace(/ /g, '%20'),
        destination: `${path}/${taskId}`
      });
      let restart = () => {
        delete progresses[taskId];
        task.stop();
        task = RNBackgroundDownloader.download({
          id: taskId,
          url: url.replace(/ /g, '%20'),
          destination: `${path}/${taskId}`
        });
        allDownloads.map((ad, i) => {
          if (ad.id === taskId) allDownloads[i] = task;
        });
        resume();
      };
      let resume = () => {
        task
          .begin(expectedBytes => handleLessonSize(oc, taskId, expectedBytes))
          .progress(p => progress.call(this, p, oc, task))
          .done(() => {
            done.call(this, oc, taskId);
            res(`${isiOS ? '' : 'file://'}${path}/${taskId}`);
          })
          .error(e => {
            if (e.includes('No such file or directory'))
              RNFetchBlob.fs
                .unlink(`${path}/${taskId}`)
                .then(restart)
                .catch(restart);
            if (e.includes('No space left on device')) {
              let title = (
                offlineContent[this.id]?.overview ||
                offlineContent[this.id]?.lesson
              )?.fields?.find(f => f.key === 'title')?.value;
              deleteLesson.call(this, this.id);
              Alert.alert(
                `Error while downloading ${title}`,
                'There is insufficient storage space on your device. Please free up some space and try again.',
                [{ text: 'OK' }],
                { cancelable: false }
              );
            }
          });
        this.tasks.push(task);
        allDownloads.push(task);
      };
      resume();
    });

  render() {
    const { status } = this.state;
    const { styles: propStyle } = this.props;
    const iconStyle = {
      width: propStyle?.iconSize?.width || 25,
      height: propStyle?.iconSize?.height || 25,
      fill: propStyle?.iconDownloadColor || 'black'
    };
    return (
      <>
        <TouchableOpacity
          style={[
            propStyle?.touchable,
            { alignItems: 'center', justifyContent: 'space-around' }
          ]}
          onPress={
            status === 'Download'
              ? this.download
              : () =>
                  this.alert.toggle(
                    'Hold your horses...',
                    offlineContent[this.id]
                      ? offlineContent[this.id].lesson
                        ? 'This will delete this lesson from\nyour device and cannot be undone.\nAre you sure about this?'
                        : 'This will delete this course from\nyour device and cannot be undone.\nAre you sure about this?'
                      : 'This lesson has been downloaded\nas part of a Course.\nAre you sure you want to delete the\nCourse and all of its Course Parts?\nYou will no longer be able to\naccess this lesson offline.'
                  )
          }
        >
          {status === 'Download' ? (
            download(iconStyle)
          ) : status === 'Downloaded' ? (
            trash(iconStyle)
          ) : status === 'Downloading' ? (
            stopDownload(iconStyle)
          ) : (
            <ActivityIndicator
              size={'small'}
              animating={true}
              color={propStyle?.activityIndicatorColor || 'black'}
            />
          )}
          <View
            style={propStyle?.textStatus ? {} : { width: iconStyle.width }}
            onLayout={({
              nativeEvent: {
                layout: { width }
              }
            }) => {
              this.progressWidth = width;
              this.progressTranslateX.setValue(-width);
            }}
          >
            {propStyle?.textStatus && (
              <Text maxFontSizeMultiplier={1.1} style={propStyle?.textStatus}>
                {status}
              </Text>
            )}
            <View
              style={{
                overflow: 'hidden',
                backgroundColor: 'grey',
                height: status === 'Downloading' ? 3 : 0
              }}
            >
              <Animated.View
                style={{
                  flex: 1,
                  transform: [{ translateX: this.progressTranslateX }],
                  backgroundColor:
                    propStyle?.animatedProgressBackground || 'black'
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <AnimatedCustomAlert
          onDelete={() => {
            deleteLesson.call(this, this.id);
            this.alert.toggle();
          }}
          ref={r => (this.alert = r)}
          styles={{
            background: propStyle?.alert?.alertBackground,
            textTitleColor: propStyle?.alert?.alertTextTitleColor,
            textMessageColor: propStyle?.alert?.alertTextMessageColor,
            textTitleFontFamily: propStyle?.alert?.alertTextTitleFontFamily,
            textMessageFontFamily: propStyle?.alert?.alertTextMessageFontFamily,
            touchableTextDeleteColor:
              propStyle?.alert?.alertTouchableTextDeleteColor,
            touchableTextCancelColor:
              propStyle?.alert?.alertTouchableTextCancelColor,
            touchableDeleteBackground:
              propStyle?.alert?.alertTouchableDeleteBackground,
            touchableTextDeleteFontFamily:
              propStyle?.alert?.alertTouchableTextDeleteFontFamily,
            touchableTextCancelFontFamily:
              propStyle?.alert?.alertTouchableTextCancelFontFamily,
            touchableDeleteBorderColor:
              propStyle?.alert?.alertTouchableDeleteBorderColor || 'transparent'
          }}
        />
      </>
    );
  }
}

const progress = function (p, oc, task, dlding) {
  fetchExpectedBytes(oc, dlding);
  if (oc.fileSizes.largestFile === task.id && task.state !== 'STOPPED') {
    DeviceEventEmitter.emit('dldProgress', {
      val: p,
      id: task.id
    });
    this?.progressTranslateX?.setValue?.(-this?.progressWidth * (1 - p));
  }
};

const done = function (oc, taskId, dlding) {
  fetchExpectedBytes(oc, dlding);
  allDownloads = allDownloads.filter(ad => ad.id !== taskId);
  delete progresses[taskId];
  offlineFiles.push(taskId);
  dldingToDlded(oc);
  manageOfflinePath(oc);
  setOfflineContent(taskId);
  if (!oc.dlding.length) {
    this?.props?.onDone?.();
    this?.setState?.({ status: 'Downloaded' });
  }
  if (oc.fileSizes.largestFile === taskId)
    DeviceEventEmitter.emit('dldProgress', {
      val: 1,
      id: taskId
    });
};

const manageOfflinePath = oc => {
  let of = offlineFiles;
  let sp = `${isiOS ? '' : 'file://'}${securedPath}`;
  const manage = lesson => {
    if (of.find(o => o.includes(`${lesson.id}Video`)))
      lesson.video_playback_endpoints[0].file = `${sp}/${of.find(o =>
        o.includes(`${lesson.id}Video`)
      )}`;
    if (of.find(o => o.includes(lesson.data[0].id)))
      lesson.data[0].value = `${sp}/${of.find(o =>
        o.includes(lesson.data[0].id)
      )}`;
    lesson.related_lessons?.map(rl => {
      if (of.find(o => o.includes(rl.data[0].id)))
        rl.data[0].value = `${sp}/${of.find(o => o.includes(rl.data[0].id))}`;
    });
    lesson.assignments?.map(a => {
      a.data.map(d => {
        if (of.find(o => o.includes(d.id)))
          d.value = `${sp}/${of.find(o => o.includes(d.id))}`;
      });
    });
    lesson.comments?.map(c => {
      if (of.find(o => o.includes(c.user_id)))
        c.user['fields.profile_picture_image_url'] = `${sp}/${of.find(o =>
          o.includes(c.user_id)
        )}`;
    });
  };
  if (oc.lesson) manage(oc.lesson);
  if (oc.overview) oc.overview.lessons.map(l => manage(l));
};

const getOfflineContent = () =>
  new Promise(async res => {
    try {
      res(
        JSON.parse(
          await RNFetchBlob.fs.readFile(`${securedPath}/offlineContent`, 'utf8')
        )
      );
    } catch (e) {
      res({});
    }
  });

const getPublicOfflineFiles = () =>
  new Promise(async res => {
    try {
      res(await RNFetchBlob.fs.ls(publicPath));
    } catch (e) {
      res();
    }
  });

const getSecuredOfflineFiles = () =>
  new Promise(async res => {
    try {
      res(await RNFetchBlob.fs.ls(securedPath));
    } catch (e) {
      res();
    }
  });

const setOfflineContent = id => {
  if (id?.includes('.png') || id?.includes('.jpg') || id?.includes('.jpeg'))
    return;
  RNFetchBlob.fs
    .writeFile(
      `${securedPath}/offlineContent`,
      JSON.stringify(offlineContent),
      'utf8'
    )
    .catch(() => {});
};

const dldingToDlded = oc =>
  (oc.dlding = oc.dlding.filter(d => {
    if (offlineFiles.includes(d.id)) {
      oc.dlded.push(d.destination);
      fetchExpectedBytes(oc, d);
      return false;
    }
    return true;
  }));

const handleLessonSize = (oc, taskId, bytes) => {
  if (!oc.sizeInBytes) oc.sizeInBytes = 0;
  oc.sizeInBytes += bytes;
  oc.fileSizes[taskId] = bytes;
  let sizes = Object.keys(oc.fileSizes);
  if (sizes.includes('largestFile'))
    sizes.splice(sizes.indexOf('largestFile'), 1);
  if (sizes.some(s => s.includes('Video')))
    oc.fileSizes.largestFile = sizes.reduce((a, b) =>
      oc.fileSizes[a] > oc.fileSizes[b] ? a : b
    );
};

const fetchExpectedBytes = (oc, dlding) => {
  if (dlding && !oc.fileSizes[dlding.id]) {
    oc.fileSizes[dlding.id] = 1;
    fetch(dlding.url).then(
      ({
        headers: {
          map: { 'content-length': expectedBytes }
        }
      }) => handleLessonSize(oc, dlding.id, parseInt(expectedBytes) || 0)
    );
  }
};

const deleteLesson = function (id) {
  let oc =
    offlineContent[id] ||
    Object.values(offlineContent).find(offc =>
      offc.overview.lessons.some(l => l.id === id)
    );
  this.setState?.({ status: 'Download' });
  let overviewContainingLesson = Object.values(offlineContent).find(oc =>
    oc.overview?.lessons.some(l => l.id === id)
  );
  if (overviewContainingLesson)
    overviewContainingLesson.sizeInBytes += offlineContent[id].sizeInBytes;
  else {
    let filterToBeDeleted = (toBeDeleted = []) =>
      toBeDeleted.filter(
        tbd =>
          Object.values(offlineContent).filter(
            o =>
              o.dlded.includes(tbd) || o.dlding.some(d => d.destination === tbd)
          ).length === 1
      );
    let toBeDeleted = filterToBeDeleted(
      oc?.dlded.concat(oc?.dlding.map(d => d.destination))
    );
    offlineFiles = offlineFiles.filter(
      of => !toBeDeleted.some(tbd => tbd.includes(of))
    );
    toBeDeleted.map(tbd => {
      this.tasks?.map(t => {
        if (t.id === tbd.split('/').pop()) {
          t.stop();
          allDownloads = allDownloads.filter(ad => ad.id !== t.id);
        }
      });
      if (tbd.includes(publicPath)) {
        tbd = tbd.split('/');
        tbd.pop();
        tbd = tbd.join('/');
      }
      return RNFetchBlob.fs.unlink(tbd).catch(() => {});
    });
  }
  if (this.tasks) this.tasks = [];
  let taskId = offlineContent[id].fileSizes.largestFile;
  delete offlineContent?.[oc.id];
  if (taskId)
    DeviceEventEmitter.emit('dldProgress', {
      val: 1,
      id: taskId
    });
  setOfflineContent();
};

const handleOldOfflineFormat = () => {
  let oc = offlineContent;
  Object.keys(oc).map(k => {
    let entity = oc[k].entity;
    if (entity) {
      oc[k] = {
        dlded: entity.dldedFiles.map(df =>
          publicOfflineFiles.includes(df)
            ? `${publicPath}/${df}`
            : `${securedPath}/${df}`
        ),
        dlding: [],
        fileSizes: {},
        sizeInBytes: entity.offlineSize,
        id: parseInt(k)
      };
      const commentsHandle = comments =>
        comments.map(c => ({
          ...c,
          user: {
            ...c.user,
            'fields.profile_picture_image_url': oc[k].dlded.find(dld =>
              dld.includes(c.user['fields.profile_picture_image_url'])
            )
          }
        }));
      const assignmentsHandle = assignments =>
        assignments.map(a => ({
          ...a,
          data: a.data.map(d => ({
            ...d,
            value:
              d.key === 'sheet_music_image_url'
                ? oc[k].dlded.find(dld => dld.includes(d.value))
                : d.value
          }))
        }));
      const thumbHandle = data =>
        data.map(d => ({
          ...d,
          value:
            d.key === 'thumbnail_url'
              ? oc[k].dlded.find(dld => dld.includes(d.value))
              : 'd.value'
        }));
      const videoHandle = video => [
        {
          ...video,
          file: oc[k].dlded.find(dld => dld.includes(video.file))
        }
      ];
      if (entity.lessons) {
        oc[k].overview = {
          ...entity,
          data: entity.data.map(d => ({
            ...d,
            value:
              d.key === 'thumbnail_url'
                ? oc[k].dlded.find(dld => dld.includes(d.value))
                : 'd.value'
          })),
          lessons: entity.lessons.map(l => ({
            ...l,
            comments: commentsHandle(l.comments),
            data: thumbHandle(l.data),
            assignments: assignmentsHandle(l.assignments),
            related_lessons: l.related_lessons.map(rl => ({
              ...rl,
              data: thumbHandle(rl.data)
            })),
            video_playback_endpoints: videoHandle(l.video_playback_endpoints[0])
          }))
        };
      } else {
        oc[k].lesson = {
          ...entity,
          comments: commentsHandle(oc[k].comments),
          data: thumbHandle(entity.data),
          assignments: assignmentsHandle(entity.assignments),
          related_lessons: entity.related_lessons.map(rl => ({
            ...rl,
            data: thumbHandle(rl.data)
          })),
          video_playback_endpoints: videoHandle(
            entity.video_playback_endpoints[0]
          )
        };
      }
    }
  });
};
export { offlineContent };
