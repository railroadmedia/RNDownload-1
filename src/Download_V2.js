import React from 'react';

import {
  View,
  Text,
  Alert,
  Animated,
  AppState,
  Dimensions,
  PixelRatio,
  TouchableOpacity,
  ActivityIndicator,
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

    publicPath = props.publicPath || RNFetchBlob.fs.dirs.DocumentDir;
    securedPath = props.securedPath || RNFetchBlob.fs.dirs.LibraryDir;

    this.id = props.entity.id;
  }

  componentDidMount() {
    this.resumeThis();
    AppState.addEventListener('change', this.handleAppState);
  }

  componentWillUnmount() {
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
    securedP = RNFetchBlob.fs.dirs.LibraryDir,
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
    console.log(
      allDownloads,
      offlineContent,
      JSON.parse(JSON.stringify(offlineContent)),
      offlineFiles,
      JSON.parse(JSON.stringify(offlineFiles))
    );
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
              ?.progress(p => progress(p, oc, task.id, dlding))
              ?.done(() => done(oc, task.id, dlding))
              ?.error(e => {
                if (e.includes('No such file or directory'))
                  RNFetchBlob.fs
                    .unlink(dlding.destination)
                    .then(restart)
                    .catch(restart);
                if (e.includes('No space left on device')) {
                  deleteLesson(oc.id, task.id);
                  Alert.alert(
                    `Error while downloading ${
                      oc.lesson?.fields?.find(f => f.key === 'title')?.value
                    }`,
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
      let oc = offlineContent[this.id];
      let largestDld = this.tasks.find(t => t.id === oc.fileSizes.largestFile);
      largestDld?.progress(p => progress.call(this, p, oc, largestDld.id));
    }
  };

  hd720OrHighestVideo = videos =>
    videos
      .filter(v => v.height <= 720)
      .filter(v => v.height <= -~width * pixR)
      .sort((a, b) => (a.height < b.height ? -1 : 1))
      .pop();

  deref = async () => {
    let lesson = await this.props.entity.lesson;
    let overview = await this.props.entity.overview;
    let { comments } = this.props.entity;
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
          id: lesson.id,
          ...this.hd720OrHighestVideo(lesson.video_playback_endpoints)
        }
      ],
      data: [{ ...lesson.data.find(d => d.key === 'thumbnail_url') }],
      related_lessons: lesson.related_lessons?.map(rl => ({
        ...rl,
        data: [{ ...rl.data.find(d => d.key === 'thumbnail_url') }]
      })),
      assignments: lesson.assignments?.map(a => ({
        ...a,
        data: a.data.map(d => ({
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
        this.tasks = allDownloads.filter(ad =>
          oc.dlding.some(d => d.id === ad.id)
        );
        let task = this.tasks.find(ad => oc.fileSizes.largestFile === ad.id);
        task
          ?.progress(p => progress.call(this, p, oc, task.id))
          ?.done(() => done.call(this, oc, task.id));
      } else {
        this.setState({ status: 'Downloaded' });
      }
    } else {
      this.setState({ status: 'Download' });
    }
  };

  download = async () => {
    this.setState({ status: 'Downloading' });
    await this.deref();
    let lessons = offlineContent[this.id].overview?.lessons || [
      offlineContent[this.id].lesson
    ];
    let promises = lessons
      .map(l => this.downloadVideo(l))
      .concat(lessons.map(l => this.downloadThumb(l)))
      .concat(
        lessons
          .reduce((a, b) => ({ resources: a.resources.concat(b.resources) }), {
            resources: []
          })
          .resources.map(r => this.downloadResource(r))
      )
      .concat(
        lessons
          .reduce(
            (a, b) => ({
              assignments: a.assignments.concat(b.assignments || [])
            }),
            { assignments: [] }
          )
          .assignments.filter(a =>
            a.data.some(d => d.key === 'sheet_music_image_url')
          )
          .map(a => a.data.find(d => d.key === 'sheet_music_image_url'))
          .map(a => this.downloadAssignment(a))
      )
      .concat(
        lessons
          .reduce(
            (a, b) => ({
              related_lessons: a.related_lessons.concat(b.related_lessons)
            }),
            { related_lessons: [] }
          )
          .related_lessons.map(rl =>
            rl.data.find(d => d.key === 'thumbnail_url')
          )
          .map(rl => this.downloadRelatedThumb(rl))
      )
      .concat(
        lessons
          .reduce((a, b) => ({ comments: a.comments.concat(b.comments) }), {
            comments: []
          })
          .comments.map(c => this.downloadCommentUserProfile(c))
      );
    if (offlineContent[this.id].overview)
      promises.push(this.downloadThumb(offlineContent[this.id].overview));
    Promise.all(promises).then(() => {
      this.setState({ status: 'Downloaded' });
      setOfflineContent();
    });
    setOfflineContent();
  };

  downloadVideo = lesson =>
    new Promise(res => {
      let url = lesson.video_playback_endpoints[0].file;
      let id = `${lesson.video_playback_endpoints[0].id}Video${lesson.video_playback_endpoints[0].height}.mp4`;
      this.downloadItem(id, url, securedPath).then(file => {
        lesson.video_playback_endpoints[0].file = file;
        res();
      });
    });

  downloadAssignment = assignment =>
    new Promise(res => {
      let extension = assignment.value.split('.').pop();
      let url = assignment.value;
      let id = `${assignment.id}.${extension}`;
      this.downloadItem(id, url, securedPath).then(value => {
        assignment.value = value;
        res();
      });
    });

  downloadThumb = lesson =>
    new Promise(res => {
      let thumb = lesson.data[0];
      let extension = thumb?.value.split('.').pop();
      let url = thumb?.value;
      let id = `${thumb?.id}.${extension}`;
      this.downloadItem(id, url, securedPath).then(value => {
        thumb.value = value;
        res();
      });
    });

  downloadRelatedThumb = thumb =>
    new Promise(res => {
      let extension = thumb.value.split('.').pop();
      let url = thumb.value;
      let id = `${thumb.id}.${extension}`;
      this.downloadItem(id, url, securedPath).then(value => {
        thumb.value = value;
        res();
      });
    });

  downloadCommentUserProfile = comment =>
    new Promise(res => {
      let extension = comment.user['fields.profile_picture_image_url']
        .split('.')
        .pop();
      let url = comment.user['fields.profile_picture_image_url'];
      let id = `${comment.user.id}.${extension}`;
      this.downloadItem(id, url, securedPath).then(value => {
        comment.user['fields.profile_picture_image_url'] = value;
        res();
      });
    });

  downloadResource = resource =>
    new Promise(res => {
      let extension = resource.resource_url.split('.').pop();
      let url = resource.resource_url;
      let id = `${resource.resource_id}.${extension}`;
      this.downloadItem(id, url, publicPath).then(resource_url => {
        resource.resource_url = resource_url;
        res();
      });
    });

  downloadItem = (taskId, url, path) =>
    new Promise(res => {
      if (this.tasks.find(t => t.id === `${taskId}`))
        return res(`${path}/${taskId}`);
      let oc = offlineContent[this.id];
      oc.dlding.push({
        url,
        id: taskId,
        destination: `${path}/${taskId}`
      });
      let task = RNBackgroundDownloader.download({
        url,
        id: taskId,
        destination: `${path}/${taskId}`
      });
      let restart = () => {
        delete progresses[taskId];
        task.stop();
        task = RNBackgroundDownloader.download({
          url,
          id: taskId,
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
          .progress(p => progress.call(this, p, oc, taskId))
          .done(() => {
            done(oc, taskId);
            res(`${path}/${taskId}`);
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
              deleteLesson.call(this, this.id, taskId);
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
      width: 25,
      height: 25,
      fill: propStyle?.iconDownloadColor || 'black'
    };
    return (
      <>
        <TouchableOpacity
          style={[propStyle?.touchable, { alignItems: 'center' }]}
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
            <ActivityIndicator color='red' size={'small'} animating={true} />
          )}
          <View
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
              <Text style={propStyle?.textStatus}>{status}</Text>
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
                  backgroundColor: 'red',
                  transform: [{ translateX: this.progressTranslateX }]
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
            background: propStyle?.alertBackground,
            textTitleColor: propStyle?.alertTextTitleColor,
            textMessageColor: propStyle?.alertTextMessageColor,
            textTitleFontFamily: propStyle?.alertTextTitleFontFamily,
            textMessageFontFamily: propStyle?.alertTextMessageFontFamily,
            touchableTextDeleteColor: propStyle?.alertTouchableTextDeleteColor,
            touchableTextCancelColor: propStyle?.alertTouchableTextCancelColor,
            touchableDeleteBackground:
              propStyle?.alertTouchableDeleteBackground,
            touchableDeleteBorderColor:
              propStyle?.alertTouchableDeleteBorderColor,
            touchableTextDeleteFontFamily:
              propStyle?.alertTouchableTextDeleteFontFamily,
            touchableTextCancelFontFamily:
              propStyle?.alertTouchableTextCancelFontFamily
          }}
        />
      </>
    );
  }
}

const progress = function (p, oc, taskId, dlding) {
  fetchExpectedBytes(oc, dlding);
  if (oc.fileSizes.largestFile === taskId) {
    DeviceEventEmitter.emit('dldProgress', {
      val: p,
      id: taskId
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
  setOfflineContent();
  if (!oc.dlding.length) this?.setState?.({ status: 'Downloaded' });
  if (oc.fileSizes.largestFile === taskId) {
    this?.props?.onDone?.();
    DeviceEventEmitter.emit('dldProgress', {
      val: 1,
      id: taskId
    });
  }
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

const setOfflineContent = () =>
  RNFetchBlob.fs
    .writeFile(
      `${securedPath}/offlineContent`,
      JSON.stringify(offlineContent),
      'utf8'
    )
    .catch(() => {});

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
  if (sizes.length === oc.dlding.length + oc.dlded.length)
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

const deleteLesson = function (id, taskId) {
  if (taskId)
    DeviceEventEmitter.emit('dldProgress', {
      val: 1,
      id: taskId
    });
  let oc =
    offlineContent[id] ||
    Object.values(offlineContent).find(offc =>
      offc.overview.lessons.some(l => l.id === id)
    );
  this.setState?.({ status: 'Download' });
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
    RNFetchBlob.fs.unlink(tbd).catch(() => {});
    this.tasks?.map(t => {
      if (t.id === tbd.split('/').pop()) {
        delete progresses[t.id];
        t.stop();
        allDownloads = allDownloads.filter(ad => ad.id !== t.id);
      }
    });
  });
  if (this.tasks) this.tasks = [];
  delete offlineContent?.[oc.id];
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
