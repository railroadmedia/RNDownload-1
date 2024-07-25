import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  View,
  Text,
  Alert,
  Animated,
  TouchableOpacity,
  ActivityIndicator, // eslint-disable-next-line react-native/split-platform-components
  PermissionsAndroid,
  DeviceEventEmitter,
  StyleProp,
  ViewStyle,
  AppState,
} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import DeviceInfo from 'react-native-device-info';
import RNBackgroundDownloader, {
  DownloadTask,
} from '@kesha-antonov/react-native-background-downloader';

import AnimatedCustomAlert from '../components/AnimatedCustomAlert';
import {
  downloadSvg,
  trash,
  stopDownload,
  completedSvg,
  stopAltDownload,
  noInternetSvg,
} from '../img/svgs';
import { FONT_MULTIPLIER, IS_IOS } from '../helper';
import type {
  Brand,
  IComment,
  IDownloading,
  ILesson,
  IOfflineContent,
  IOverview,
  IResource,
  IVideo,
} from '../entity';
import { derefLesson, fetchExpectedBytes, handleLessonSize } from './DownloadHelper';
import CircularProgressBar from './CircularProgressBar';

let progresses: Record<string, number> = {};
let allDownloads: any[] = [];
let offlineFiles: string[] = [];
let offlineContent: Record<string, IOfflineContent> = {};
let securedPath: string;
let publicPath: string;
let publicOfflineFiles: string[] = [];
let securedOfflineFiles: string[] = [];
let listenForLargestFile: { remove: () => void };
let deletePromise: Promise<unknown>;

interface IDownloadV2 {
  brand: Brand;
  entity: {
    id: number;
    comments?: IComment[];
  };
  disabled: boolean;
  route: string;
  iconOnly: boolean;
  isConnected?: boolean;
  getDownloadContent?: () => Promise<ILesson & IOverview>;
  styles: {
    touchable: StyleProp<ViewStyle>;
    iconSize?: { width: number; height: number };
    iconDownloadColor: string;
    activityIndicatorColor: string;
    animatedProgressBackground: string;
    textStatus?: StyleProp<ViewStyle>;
    alert: {
      alertTextMessageFontFamily: string;
      alertTouchableTextDeleteColor: string;
      alertTextTitleColor?: string;
      alertTextMessageColor?: string;
      alertTextTitleFontFamily: string;
      alertTouchableTextCancelColor: string;
      alertTouchableDeleteBackground: string;
      alertBackground?: string;
      alertTouchableTextDeleteFontFamily: string;
      alertTouchableTextCancelFontFamily: string;
    };
  };
  onDone?: () => void;
  onDelete?: () => void;
  securedPath?: string;
  publicPath?: string;
}

const DownloadV2 = forwardRef<{ deleteItem: (item: any) => void }, IDownloadV2>((props, ref) => {
  const {
    brand,
    entity,
    route,
    iconOnly,
    isConnected,
    getDownloadContent,
    styles: propStyle,
    disabled,
    onDone: onDoneProps,
    onDelete: onDeleteProps,
  } = props;
  const iconStyle = {
    width: propStyle?.iconSize?.width || 25,
    height: propStyle?.iconSize?.height || 25,
    fill: propStyle?.iconDownloadColor || 'black',
  };
  const tasks = useRef<DownloadTask[]>([]);
  const progressWidth = useRef(0);
  const progressTranslateX = useRef(new Animated.Value(0));

  const alert = useRef<React.ElementRef<typeof AnimatedCustomAlert>>(null);
  const progressRef = useRef<React.ElementRef<typeof CircularProgressBar>>(null);
  const [status, setStatus] = useState('');
  publicPath =
    props?.publicPath || ReactNativeBlobUtil.fs.dirs[IS_IOS ? 'DocumentDir' : 'DownloadDir'];
  securedPath =
    props?.securedPath ||
    ReactNativeBlobUtil.fs.dirs.LibraryDir ||
    ReactNativeBlobUtil.fs.dirs.DocumentDir;

  useImperativeHandle(ref, () => ({
    deleteItem: (item: any) => {
      alert.current?.toggle(
        'Hold your horses...',
        offlineContent?.[item?.id]
          ? offlineContent?.[item?.id]?.lesson
            ? 'This will delete this lesson from\nyour device and cannot be undone.\nAre you sure about this?'
            : 'This will delete this course from\nyour device and cannot be undone.\nAre you sure about this?'
          : 'This lesson has been downloaded\nas part of a Course.\nAre you sure you want to delete the\nCourse and all of its Course Parts?\nYou will no longer be able to\naccess this lesson offline.'
      );
    },
  }));

  useEffect(() => {
    resumeThis();
    const appEventListener = AppState.addEventListener('change', handleAppState);

    return () => {
      listenForLargestFile?.remove?.();
      appEventListener?.remove?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateValue = (p: number): void => {
    if (route === 'Downloads') {
      progressRef.current?.updateProgress(p);
    } else {
      progressTranslateX.current?.setValue?.(-progressWidth.current * (1 - p));
    }
  };

  const onDone = (): void => {
    onDoneProps?.();
    setStatus('Downloaded');
  };

  const handleAppState = (state: string): void => {
    if (state === 'active') {
      if (tasks.current?.length && !tasks.current?.some(t => t?.state !== 'DONE')) {
        setStatus('Downloaded');
      }
      const oc = offlineContent[entity?.id];
      const largestDld = tasks.current?.find(t => t.id === oc?.fileSizes?.largestFile);
      largestDld?.progress(p =>
        progress(p, oc, largestDld as DownloadTask, undefined, updateValue)
      );
    }
  };

  const deref = async (): Promise<true | void> => {
    const content = await getDownloadContent?.();
    const lesson = content?.lessons?.length ? undefined : content;
    if (lesson?.youtube_video_id || content?.lessons?.find?.(l => l.youtube_video_id)) {
      setStatus('Download');
      return Alert.alert(
        'Copyrighted material',
        `This ${
          lesson ? 'video' : 'course'
        } contains copyrighted material and is not available for offline viewing.`,
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
    const overview = content?.lessons?.length ? content : undefined;
    const { comments } = entity;
    if (!lesson && !overview) {
      setStatus('Download');
      return Alert.alert(
        `Oh no, we dropped a stick...`,
        'Musora is down, we are working on a fix and it should be back shortly, thank you for your patience.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }

    offlineContent[entity?.id] = {
      dlded: [],
      dlding: [],
      fileSizes: {},
      sizeInBytes: 0,
      id: entity?.id,
    };

    if (lesson) {
      offlineContent[entity?.id].lesson = derefLesson(lesson, comments, brand);
    }

    if (overview) {
      offlineContent[entity?.id].overview = {
        ...overview,
        brand: brand,
        lessons: overview?.lessons?.map(l => derefLesson(l, undefined, brand)),
      };
    }
    return true;
  };

  const resumeThis = ():
    | {
        remove: () => void;
      }
    | undefined => {
    const oc =
      offlineContent[entity?.id] ||
      Object.values(offlineContent).find(
        offc => offc?.overview?.lessons?.some(l => l.id === entity?.id)
      );
    if (oc) {
      if (oc?.dlding?.length) {
        setStatus('Downloading');
        if (!oc?.fileSizes?.largestFile) {
          return (listenForLargestFile = addDownloadEventListener(p => {
            if (
              p?.largestDownloads?.some(
                (ld: { id: string }) => ld?.id === oc?.fileSizes?.largestFile
              )
            ) {
              resumeThis();
              listenForLargestFile.remove();
            }
          }));
        }
        tasks.current = allDownloads?.filter(ad => oc?.dlding?.some(d => d.id === ad.id));
        tasks.current.map(task => {
          if (oc?.fileSizes?.largestFile === task?.id) {
            task?.progress(p => progress(p, oc, task, undefined, updateValue));
          }
          task?.done(() => done(oc, task.id, undefined, onDone));
        });
      } else {
        setStatus('Downloaded');
      }
    } else {
      setStatus('Download');
    }
  };

  const download = async (): Promise<void> => {
    try {
      setStatus('Downloading');
      deletePromise = new Promise(async res => res(await deref()));
      if (!(await deletePromise)) {
        return;
      }
      const overview = offlineContent[entity?.id].overview;
      const lessons = overview?.lessons?.filter(
        l => !Object.values(offlineContent)?.some(oc => oc.id === l.id)
      ) || [offlineContent[entity?.id]?.lesson as ILesson];

      const promises = lessons?.map(l => downloadVideo(l as ILesson));

      if (overview) {
        promises.push(downloadThumb(overview));
      }

      promises
        .concat(lessons?.map(l => downloadThumb(l as ILesson)))
        .concat(downloadResource(lessons))
        .concat(downloadMp3s(lessons))
        .concat(downloadAssignment(lessons))
        .concat(downloadRelatedThumb(lessons))
        .concat(downloadCommentUserProfile(lessons));
      Promise.all(promises).then(() => {
        setStatus('Downloaded');
        setOfflineContent();
      });
      setOfflineContent();
    } catch (e) {}
  };

  const downloadMp3s = (lessons: ILesson[]): Array<Promise<void>> =>
    lessons
      .map(
        l =>
          Object.keys(l)
            ?.filter(k => k.includes('_click_url'))
            ?.map(key => ({
              lesson: l,
              id: `${l.id}${key}`,
              key: key as keyof ILesson,
              value: l[key as keyof ILesson],
            }))
      )
      .flat()
      .map(
        ({ id: mp3Id, lesson, key, value }) =>
          new Promise<void>(res => {
            const url = value;
            const id = `${mp3Id}.mp3`;
            downloadItem(id, url as string, securedPath).then(v => {
              value = v;
              if (lesson) {
                (lesson[key as keyof ILesson] as ILesson[keyof ILesson]) = v;
              }
              res();
            });
          })
      );

  const downloadVideo = (lesson: ILesson): Promise<void> | undefined => {
    if (lesson?.video_playback_endpoints?.length > 0) {
      return new Promise<void>(res => {
        const url = lesson.video_playback_endpoints[0].file;
        const id = `${lesson.id}Video${lesson.video_playback_endpoints[0].height}.mp4`;
        downloadItem(id, url, securedPath).then(file => {
          lesson.video_playback_endpoints[0].file = file;
          res();
        });
      });
    }
  };

  const downloadAssignment = async (lessons: ILesson[]): Promise<void> => {
    let assignments: any[] = [];
    lessons?.map(
      l =>
        l.assignments?.map(a => (assignments = assignments?.concat(a.sheet_music_image_url || [])))
    );
    assignments?.map(
      a =>
        new Promise<void>(res => {
          const extension = a.value.split('.').pop();
          const url = a.value;
          const id = `${a.id}.${extension}`;
          downloadItem(id, url, securedPath).then(value => {
            a.value = value;
            ReactNativeBlobUtil.fs
              .readFile(a.value, 'utf8')
              .then(result => {
                const vb = result?.split('viewBox="')?.[1]?.split('"')?.[0].split(' ');
                if (vb[2] && vb[3]) {
                  a.whRatio = vb[2] / vb[3];
                }
              })
              .catch(() => {});
            res();
          });
        })
    );
  };

  const downloadThumb = (lesson: ILesson | IOverview): Promise<void> =>
    new Promise<void>(async res => {
      const thumb = {
        id: `${lesson.id}thumb`,
        value: lesson?.thumbnail_url,
      };
      if (!thumb) {
        return res();
      }
      if (!thumb.value) {
        return res();
      }
      let extension = thumb.value?.split('.').pop() || '';
      if (!['jpeg', 'jpg', 'png'].includes(extension)) {
        const thumbRes: any = await fetch(thumb.value);
        extension = thumbRes?.headers?.map?.['content-type']?.split('/')?.pop();
      }
      const url = thumb.value;
      const id = `${thumb.id}.${extension}`;
      downloadItem(id, url, securedPath).then(value => {
        thumb.value = value;
        lesson.thumbnail_url = value;
        res();
      });
    });

  const downloadRelatedThumb = (lessons: ILesson[]): Array<Promise<void>> =>
    lessons
      ?.reduce(
        (a, b) => ({
          related_lessons: a.related_lessons.concat(b?.related_lessons || []),
        }),
        { related_lessons: [] as ILesson[] }
      )
      ?.related_lessons?.map(rLesson => downloadThumb(rLesson));

  const downloadCommentUserProfile = (lessons: ILesson[]): Array<Promise<void>> =>
    lessons
      ?.reduce((a, b) => ({ comments: a?.comments?.concat(b?.comments) }), {
        comments: [] as IComment[],
      })
      .comments?.map(
        c =>
          new Promise<void>(res => {
            const extension = c.user?.['fields.profile_picture_image_url']?.split('.')?.pop();
            const url = c.user?.['fields.profile_picture_image_url'];
            const id = `${c.user_id}.${extension}`;
            if (id && url) {
              downloadItem(id, url, securedPath).then(value => {
                c.user['fields.profile_picture_image_url'] = value;
                res();
              });
            } else {
              res();
            }
          })
      );

  const downloadResource = async (lessons: ILesson[]): Promise<void> => {
    if (!IS_IOS) {
      let granted = PermissionsAndroid.RESULTS.DENIED;
      if (Number(DeviceInfo.getSystemVersion()) >= 13) {
        granted = PermissionsAndroid.RESULTS.GRANTED;
      } else {
        granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Write to external Storage',
            message: 'For downloading resources we need your permission',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
      }
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        return;
      }
    }
    lessons
      ?.map(l => ({
        ...l,
        resources: l?.resources?.map(r => {
          r.title = l.title;
          return r;
        }),
      }))
      .reduce((a, b) => ({ resources: a?.resources?.concat(b?.resources) }), {
        resources: [] as IResource[],
      })
      .resources?.map(
        r =>
          new Promise<void>(res => {
            const extension = r?.extension || r?.resource_url.split('.').pop();
            const url = r.resource_url;
            const id = `${r.resource_id}.${extension}`;

            downloadItem(
              id,
              url,
              `${publicPath}/${r.title?.replace(/[&\/\\#,+()$~%.,^'":*?!|<>{}]/g, '') || ''}`
            ).then(resource_url => {
              r.resource_url = resource_url;
              res();
            });
          })
      );
  };

  const downloadItem = (taskId: string, url: string, path: string): Promise<string> =>
    new Promise<string>(res => {
      const oc = offlineContent[entity?.id];
      oc.dlding.push({
        id: taskId,
        url: url?.replace(/ /g, '%20'),
        destination: `${path}/${taskId}`,
      });

      if (url.includes('http')) {
        if (allDownloads.find(t => t.id === `${taskId}`)) {
          done(oc, taskId, undefined, onDone);
          return res(`${IS_IOS ? '' : 'file://'}${path}/${taskId}`);
        }
        let task = RNBackgroundDownloader.download({
          id: taskId,
          url: url?.replace(/ /g, '%20'),
          destination: `${path}/${taskId}`,
        });
        const restart = (): void => {
          delete progresses[taskId];
          task.stop();
          task = RNBackgroundDownloader.download({
            id: taskId,
            url: url?.replace(/ /g, '%20'),
            destination: `${path}/${taskId}`,
          });
          allDownloads.map((ad, i) => {
            if (ad.id === taskId) {
              allDownloads[i] = task;
            }
          });
          resume();
        };
        const resume = (): void => {
          task
            .begin(({ expectedBytes }: { expectedBytes: number; headers: any }) =>
              handleLessonSize(oc, taskId, expectedBytes)
            )
            .progress(p => progress(p, oc, task, undefined, updateValue))
            .done(() => {
              done(oc, taskId, undefined, onDone);
              res(`${IS_IOS ? '' : 'file://'}${path}/${taskId}`);
            })
            .error(({ error }) => {
              if (error.includes('No such file or directory')) {
                ReactNativeBlobUtil.fs.unlink(`${path}/${taskId}`).then(restart).catch(restart);
              }
              if (error.includes('No space left on device')) {
                const title = (
                  offlineContent[entity?.id]?.overview || offlineContent[entity?.id]?.lesson
                )?.title;
                deleteLesson(entity?.id, tasks, setStatus);
                Alert.alert(
                  `Error while downloading ${title}`,
                  'There is insufficient storage space on your device. Please free up some space and try again.',
                  [{ text: 'OK' }],
                  { cancelable: false }
                );
              }
              if (error === 'REQUEST_NOT_SUCCESSFUL') {
                done(oc, taskId, undefined, onDone);
              }
            });
          tasks.current.push(task);
          allDownloads.push(task);
        };
        resume();
      }
    });

  const onDelete = (): void => {
    onDeleteProps?.();
    deleteLesson(entity?.id, tasks, setStatus);
    alert.current?.toggle();
  };

  const onDownloadBtnPress = (): void => {
    if (status === 'Download') {
      download();
    } else {
      alert.current?.toggle(
        'Hold your horses...',
        offlineContent[entity?.id]
          ? offlineContent[entity?.id].lesson
            ? 'This will delete this lesson from\nyour device and cannot be undone.\nAre you sure about this?'
            : 'This will delete this course from\nyour device and cannot be undone.\nAre you sure about this?'
          : 'This lesson has been downloaded\nas part of a Course.\nAre you sure you want to delete the\nCourse and all of its Course Parts?\nYou will no longer be able to\naccess this lesson offline.'
      );
    }
  };

  return (
    <>
      <TouchableOpacity
        style={[
          { alignItems: 'center', justifyContent: 'center', opacity: disabled ? 0.5 : 1 },
          propStyle?.touchable,
        ]}
        disabled={disabled}
        onPress={onDownloadBtnPress}
      >
        {status === 'Download' ? (
          <>{downloadSvg(iconStyle)}</>
        ) : status === 'Downloaded' ? (
          <>
            {route === 'Downloads' && iconOnly
              ? completedSvg({ ...iconStyle, fill: '#16A34A' })
              : trash(iconStyle)}
          </>
        ) : status === 'Downloading' ? (
          <>
            {route === 'Downloads' ? (
              iconOnly ? (
                !!isConnected ? (
                  <CircularProgressBar
                    size={20}
                    color={propStyle?.iconDownloadColor || 'black'}
                    ref={progressRef}
                  />
                ) : (
                  noInternetSvg({ ...iconStyle, fill: '#B91C1C' })
                )
              ) : (
                stopAltDownload(iconStyle)
              )
            ) : (
              stopDownload(iconStyle)
            )}
          </>
        ) : (
          <ActivityIndicator
            size={'small'}
            animating={true}
            color={propStyle?.activityIndicatorColor || 'black'}
          />
        )}
        {!iconOnly && (
          <View
            style={propStyle?.textStatus ? {} : { width: iconStyle.width }}
            onLayout={({
              nativeEvent: {
                layout: { width },
              },
            }) => {
              progressWidth.current = width;
              progressTranslateX.current.setValue(-width);
            }}
          >
            {propStyle?.textStatus && (
              <Text maxFontSizeMultiplier={FONT_MULTIPLIER} style={propStyle?.textStatus}>
                {route === 'Downloads'
                  ? status === 'Downloading'
                    ? 'Stop'
                    : status === 'Downloaded' && 'Delete'
                  : status}
              </Text>
            )}
            {route !== 'Downloads' && (
              <View
                style={{
                  overflow: 'hidden',
                  backgroundColor: 'grey',
                  height: status === 'Downloading' ? 3 : 0,
                }}
              >
                <Animated.View
                  style={{
                    flex: 1,
                    transform: [{ translateX: progressTranslateX.current }],
                    backgroundColor: propStyle?.animatedProgressBackground || 'black',
                  }}
                />
              </View>
            )}
          </View>
        )}
      </TouchableOpacity>
      <AnimatedCustomAlert onDelete={onDelete} ref={alert} styles={propStyle.alert} />
    </>
  );
});

const addDownloadEventListener = (
  callback: (
    arg0: { val: any[]; allDownloads: DownloadTask[]; largestDownloads: DownloadTask[] } | any
  ) => void
): {
  remove: () => void;
} => {
  const progressListener = (p: { id: string | number; val: number }): void => {
    progresses[p.id] = p.val;
    let val: number | number[] = Object.values(progresses);
    val = val?.reduce((t, i) => t + i) / val.length;
    if (val === 1) {
      progresses = {};
    }
    callback?.(
      val === 1
        ? {}
        : {
            val,
            allDownloads,
            largestDownloads: allDownloads?.filter(
              ed => Object.values(offlineContent)?.some(oc => oc?.fileSizes?.largestFile === ed?.id)
            ),
          }
    );
  };
  DeviceEventEmitter.addListener('dldProgress', progressListener);
  return {
    remove: () => DeviceEventEmitter.removeAllListeners('dldProgress'),
  };
};

const resumeAll = async (
  securedP = ReactNativeBlobUtil.fs.dirs.LibraryDir || ReactNativeBlobUtil.fs.dirs.DocumentDir,
  publicP = ReactNativeBlobUtil.fs.dirs.DocumentDir
): Promise<void> => {
  publicPath = publicP;
  securedPath = securedP;
  publicOfflineFiles = (await getPublicOfflineFiles()) || [];

  securedOfflineFiles = (await getSecuredOfflineFiles()) || [];

  offlineFiles = publicOfflineFiles.concat(securedOfflineFiles);

  offlineContent = await getOfflineContent();

  handleOldOfflineFormat();
  allDownloads = await RNBackgroundDownloader.checkForExistingDownloads();

  Object.values(offlineContent).map(oc => {
    dldingToDlded(oc);
    oc?.dlding
      .map(d => ({ ...d }))
      .map(dlding => {
        let task = allDownloads?.find(ad => ad.id === dlding.id);
        const restart = (): void => {
          delete progresses[task?.id as string];
          task?.stop();
          delete dlding?.headers;
          task = RNBackgroundDownloader.download(dlding);
          allDownloads.map((ad, i) => {
            if (ad.id === task?.id) {
              allDownloads[i] = task;
            }
          });
          resume();
        };
        const resume = (): void => {
          task
            ?.begin(({ expectedBytes }: { expectedBytes: number; headers: any }) =>
              handleLessonSize(oc, task?.id as string, expectedBytes)
            )
            ?.progress((p: { bytesDownloaded: number; bytesTotal: number }) =>
              progress(p, oc, task as DownloadTask, dlding)
            )
            ?.done(() => done(oc, task?.id as string, dlding))
            ?.error((e: string | string[]) => {
              if (e?.includes?.('No such file or directory')) {
                ReactNativeBlobUtil.fs.unlink(dlding.destination).then(restart).catch(restart);
              }
              if (e?.includes?.('No space left on device')) {
                deleteLesson(oc.id);
                const title = (oc?.overview || oc.lesson)?.title;
                Alert.alert(
                  `Error while downloading ${title}`,
                  'There is insufficient storage space on your device. Please free up some space and try again.',
                  [{ text: 'OK' }],
                  { cancelable: false }
                );
              }
            });
        };
        if (task && task.state === 'DONE' && !offlineFiles.includes(task.id)) {
          ReactNativeBlobUtil.fs.unlink(dlding.destination).then(restart).catch(restart);
        } else {
          resume();
        }
      });
  });
};

const progress = (
  p: { bytesDownloaded: number; bytesTotal: number },
  oc: IOfflineContent,
  task: DownloadTask,
  dlding?: IDownloading,
  updateValue?: (p: number) => void
): void => {
  const pVal = p?.bytesDownloaded / p?.bytesTotal;
  fetchExpectedBytes(oc, dlding);
  if (oc?.fileSizes?.largestFile === task?.id && task?.state !== 'STOPPED') {
    DeviceEventEmitter.emit('dldProgress', {
      val: pVal,
      id: task.id,
    });
    updateValue?.(pVal);
  }
};

const done = (
  oc: IOfflineContent,
  taskId: string,
  dlding?: IDownloading,
  onDone?: () => void
): void => {
  fetchExpectedBytes(oc, dlding);
  allDownloads = allDownloads?.filter(ad => ad.id !== taskId);

  delete progresses[taskId];
  offlineFiles.push(taskId);
  dldingToDlded(oc);
  manageOfflinePath(oc);
  setOfflineContent(taskId);
  if (!oc?.dlding?.length) {
    onDone?.();
  }
  if (oc?.fileSizes?.largestFile === taskId) {
    DeviceEventEmitter.emit('dldProgress', {
      val: 1,
      id: taskId,
    });
  }
};

const manageOfflinePath = (oc: IOfflineContent): void => {
  const of = offlineFiles;
  const sp = `${IS_IOS ? '' : 'file://'}${securedPath}`;
  const manage = (lesson: ILesson): void => {
    if (of.find(o => o.includes(`${lesson.id}Video`))) {
      lesson.video_playback_endpoints[0].file = `${sp}/${of.find(o =>
        o.includes(`${lesson.id}Video`)
      )}`;
    }
    if (of.find(o => o.includes(`${lesson.id}thumb`))) {
      lesson.thumbnail_url = `${sp}/${of.find(o => o.includes(`${lesson.id}thumb`))}`;
    }
    lesson?.related_lessons?.map(rl => {
      if (of.find(o => o.includes(`${rl.id}thumb`))) {
        rl.thumbnail_url = `${sp}/${of.find(o => o.includes(`${rl.id}thumb`))}`;
      }
    });

    lesson?.assignments?.map((a: any): any => {
      of.filter(o => o.includes(`${a.id}`)).map((ofa, i) => {
        if (a?.sheet_music_image_url?.[i]) {
          return (a.sheet_music_image_url[i] = `${sp}/${ofa}`);
        }
      });
    });

    lesson.comments?.map(c => {
      if (of.find(o => o.includes(String(c.user_id)))) {
        c.user['fields.profile_picture_image_url'] = `${sp}/${of.find(o =>
          o.includes(String(c.user_id))
        )}`;
      }
    });
  };
  if (oc.lesson) {
    manage(oc.lesson);
  }
  if (oc.overview) {
    oc.overview.lessons.map(l => manage(l));
  }
};

const getOfflineContent = (): Promise<Record<string, IOfflineContent>> =>
  new Promise(async res => {
    try {
      const ofc: Record<string, IOfflineContent> = JSON.parse(
        await ReactNativeBlobUtil.fs.readFile(`${securedPath}/offlineContent`, 'utf8')
      );

      if (!IS_IOS) {
        return res(ofc);
      }
      const newUuid = securedPath?.substring(
        securedPath.indexOf('Application/') + 12,
        securedPath.indexOf('/Library')
      );
      let oldUuid: string;

      Promise.all(
        Object.values(ofc)?.map(oc => {
          oldUuid = oc.dlded[0]?.substring(
            oc.dlded[0]?.indexOf('Application/') + 12,
            oc.dlded[0]?.indexOf('/Library')
          );
          if (oldUuid === newUuid) {
            return { [oc.id]: oc };
          }

          return {
            [oc.id]: {
              ...oc,
              dlded: oc.dlded?.map(d => (oldUuid !== newUuid ? d?.replace(oldUuid, newUuid) : d)),
              overview: oc.overview && {
                ...oc.overview,
                lessons: oc.overview?.lessons?.map(l => ({
                  ...l,
                  assignments: l?.assignments?.map(a => ({
                    ...a,
                    sheet_music_image_url: a.sheet_music_image_url?.map(sheet => ({
                      ...sheet,
                      value: sheet.value?.replace(oldUuid, newUuid),
                    })),
                  })),
                  comments: l?.comments?.map(c => ({
                    ...c,
                    user: {
                      ...c.user,
                      'fields.profile_picture_image_url': c.user[
                        'fields.profile_picture_image_url'
                      ]?.replace(oldUuid, newUuid),
                    },
                  })),
                  related_lessons: l?.related_lessons?.map(rl => ({
                    ...rl,
                    thumbnail_url: rl.thumbnail_url?.replace(oldUuid, newUuid),
                  })),
                  thumbnail_url: l.thumbnail_url?.replace(oldUuid, newUuid),
                  video_playback_endpoints: l?.video_playback_endpoints?.map(vpe => ({
                    ...vpe,
                    file: vpe.file?.replace(oldUuid, newUuid),
                  })),
                })),
                thumbnail_url: oc.overview?.thumbnail_url?.replace(oldUuid, newUuid),
              },
              lesson: oc.lesson && {
                ...oc.lesson,
                assignments: oc.lesson?.assignments?.map(a => ({
                  ...a,
                  sheet_music_image_url: a.sheet_music_image_url?.map(sheet => ({
                    ...sheet,
                    value: sheet.value?.replace(oldUuid, newUuid),
                  })),
                })),
                comments: oc.lesson?.comments?.map(c => ({
                  ...c,
                  user: {
                    ...c.user,
                    'fields.profile_picture_image_url': c.user[
                      'fields.profile_picture_image_url'
                    ]?.replace(oldUuid, newUuid),
                  },
                })),
                related_lessons: oc.lesson?.related_lessons?.map(rl => ({
                  ...rl,
                  thumbnail_url: rl.thumbnail_url?.replace(oldUuid, newUuid),
                })),
                thumbnail_url: oc.lesson?.thumbnail_url?.replace(oldUuid, newUuid),
                video_playback_endpoints: oc.lesson?.video_playback_endpoints?.map(vpe => ({
                  ...vpe,
                  file: vpe.file?.replace(oldUuid, newUuid),
                })),
              },
            },
          };
        })
      ).then(content => {
        let objContent = {};
        content.forEach(element => (objContent = { ...element, ...objContent }));
        res(objContent);
      });
    } catch (e) {
      res({});
    }
  });

const getPublicOfflineFiles = (): Promise<void | string[]> =>
  new Promise<string[] | void>(async res => {
    try {
      res(await ReactNativeBlobUtil.fs.ls(publicPath));
    } catch (e) {
      res();
    }
  });

const getSecuredOfflineFiles = (): Promise<void | string[]> =>
  new Promise<string[] | void>(async res => {
    try {
      res(await ReactNativeBlobUtil.fs.ls(securedPath));
    } catch (e) {
      res();
    }
  });

const setOfflineContent = (id?: string | string[]): void => {
  if (id?.includes('.png') || id?.includes('.jpg') || id?.includes('.jpeg')) {
    return;
  }
  ReactNativeBlobUtil.fs
    .writeFile(`${securedPath}/offlineContent`, JSON.stringify(offlineContent), 'utf8')
    .catch(() => {});
};

const dldingToDlded = (oc: IOfflineContent): IDownloading[] =>
  (oc.dlding = oc?.dlding?.filter(d => {
    if (offlineFiles?.includes(d?.id)) {
      oc?.dlded?.push(d?.destination);
      fetchExpectedBytes(oc, d);
      return false;
    }
    return true;
  }));

const deleteLesson = async (
  id: number,
  tasks?: React.MutableRefObject<DownloadTask[]>,
  setStatus?: (arg0: string) => void
): Promise<void> => {
  setStatus?.('Download');
  await deletePromise;
  const oc =
    offlineContent[id] ||
    Object.values(offlineContent).find(offc => offc?.overview?.lessons?.some(l => l.id === id));
  const overviewContainingLesson = Object.values(offlineContent).find(
    oContent => oContent?.overview?.lessons?.some(l => l.id === id)
  );
  if (overviewContainingLesson && offlineContent?.[id]) {
    overviewContainingLesson.sizeInBytes += offlineContent?.[id]?.sizeInBytes || 0;
  } else {
    const filterToBeDeleted = (toBeDel: string[] = []): string[] =>
      toBeDel.filter(
        tbd =>
          Object.values(offlineContent)?.filter(
            o => o.dlded.includes(tbd) || o.dlding?.some(d => d.destination === tbd)
          ).length === 1
      );
    const toBeDeleted: any = filterToBeDeleted(
      oc?.dlded?.concat(oc?.dlding.map(d => d.destination))
    );
    offlineFiles = offlineFiles?.filter(
      of => !toBeDeleted?.some((tbd: string | string[]) => tbd.includes(of))
    );
    toBeDeleted.map(async (tbd: any) => {
      tasks?.current?.map(t => {
        if (t.id === tbd.split('/').pop()) {
          t.stop();
          allDownloads = allDownloads?.filter(ad => ad.id !== t.id);
        }
      });
      if (tbd?.includes(publicPath)) {
        tbd = tbd.split('/');
        tbd?.pop();
        tbd = tbd?.join('/');
      }
      try {
        return await ReactNativeBlobUtil.fs.unlink(tbd);
      } catch {}
    });
  }
  if (tasks?.current) {
    tasks.current = [];
  }
  const taskId = offlineContent?.[id]?.fileSizes?.largestFile;
  delete offlineContent?.[oc?.id];

  if (taskId) {
    DeviceEventEmitter.emit('dldProgress', {
      val: 1,
      id: taskId,
    });
  }
  setOfflineContent();
};

const handleOldOfflineFormat = (): void => {
  const oc = offlineContent;
  Object.keys(oc).map(k => {
    const contentEntity = oc[k]?.entity;
    if (contentEntity) {
      oc[k] = {
        dlded: contentEntity.dldedFiles.map((df: string) =>
          publicOfflineFiles.includes(df) ? `${publicPath}/${df}` : `${securedPath}/${df}`
        ),
        dlding: [],
        fileSizes: {},
        sizeInBytes: contentEntity.offlineSize,
        id: parseInt(k, 10),
      };
      const commentsHandle = (comments: IComment[]): IComment[] =>
        comments?.map(c => ({
          ...c,
          user: {
            ...c.user,
            'fields.profile_picture_image_url':
              oc[k]?.dlded?.find(
                dld => dld?.includes(c?.user?.['fields.profile_picture_image_url'])
              ) || '',
          },
        }));
      const videoHandle = (video: IVideo): IVideo[] => [
        {
          ...video,
          file: oc[k]?.dlded?.find((dld: string | string[]) => dld?.includes(video?.file)) || '',
        },
      ];
      if (contentEntity?.lessons) {
        oc[k].overview = {
          ...contentEntity,
          lessons: contentEntity.lessons?.map((l: ILesson) => ({
            ...l,
            comments: commentsHandle(l.comments),
            assignments: l.assignments,
            related_lessons: l.related_lessons,
            video_playback_endpoints: videoHandle(l.video_playback_endpoints[0]),
          })),
        };
      } else {
        const comments = oc[k]?.lesson?.comments;
        oc[k].lesson = {
          ...contentEntity,
          comments: comments ? commentsHandle(comments) : [],
          assignments: contentEntity.assignments,
          related_lessons: contentEntity.related_lessons,
          video_playback_endpoints: videoHandle(contentEntity.video_playback_endpoints[0]),
        };
      }
    }

    const handleLesson = (lesson: ILesson): void => {
      lesson.style = lesson.style;
      lesson.difficulty = lesson.difficulty;
      lesson.title = lesson.title;
      lesson.description = lesson.description;
      lesson.vimeo_video_id = lesson.vimeo_video_id;
      lesson.assignments?.map(a => {
        a.title = a.title;
        a.description = a.description;
        a.sheet_music_image_url = a.sheet_music_image_url;
      });
      if (!!lesson.instructor) {
        lesson.instructor = lesson.instructor?.map(i => ({
          id: i.id,
          name: i.name,
          biography: i.biography,
          head_shot_picture_url: i.head_shot_picture_url,
        }));
      }
    };
    if (oc[k]?.lesson) {
      handleLesson(oc[k]?.lesson ?? ({} as ILesson));
    }
    if (oc[k]?.overview) {
      const overview = oc[k]?.overview;
      oc[k].overview!.description = overview?.description || '';
      oc[k].overview!.thumbnail_url = overview?.thumbnail_url || '';
      oc[k].overview!.title = oc[k]?.overview?.title || '';
      oc[k].overview!.style = oc[k]?.overview?.style || '';
      oc[k].overview!.difficulty = oc[k]?.overview?.difficulty;
      oc[k]?.overview?.lessons?.map(l => handleLesson(l));
    }
  });
};

export default DownloadV2;
export { offlineContent, resumeAll, addDownloadEventListener };
