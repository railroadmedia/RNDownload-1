// eslint-disable-next-line react-native/split-platform-components
import { Alert, DeviceEventEmitter, PermissionsAndroid } from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import DeviceInfo from 'react-native-device-info';
import { IS_IOS } from '../helper';
import type { IResource } from '../entity';

const getTypeByExtension = (path: string | string[]): string | undefined => {
  if (path === 'mp3' || path.indexOf('mp3') > 0) {
    return 'audio/mp3';
  }
  if (path === 'pdf' || path.indexOf('pdf') > 0) {
    return 'application/pdf';
  }
  if (path === 'zip' || path.indexOf('zip') > 0) {
    return 'application/zip';
  }
};

export const downloadRes = (
  resource: IResource,
  lessonTitle: string,
  id: number,
  notEmmitingProgress: boolean,
  notOppeningAfterDld: boolean,
  cancel: boolean,
  isConnected: boolean,
  showNoConnectionAlert: () => void
): Promise<void> | undefined => {
  if (cancel) {
    return;
  }
  return new Promise<void>(async (resolve, reject) => {
    let resourceUrl: string;
    if (decodeURI(resource?.resource_url) === resource?.resource_url) {
      resourceUrl = encodeURI(resource?.resource_url);
    } else {
      resourceUrl = resource?.resource_url;
    }
    const dirs = ReactNativeBlobUtil.fs.dirs;
    const filePath = IS_IOS
      ? `${dirs.DocumentDir}/${lessonTitle?.replace(
          /[&\/\\#,+()$~%.,^'":*?!|<>{}]/g,
          ''
        )}/${resource?.resource_id}.${resource?.extension}`
      : `${dirs.DownloadDir}/${lessonTitle?.replace(
          /[&\/\\#,+()$~%.,^'":*?!|<>{}]/g,
          ''
        )}/${resource?.resource_id}.${resource?.extension}`;
    const exists = await ReactNativeBlobUtil.fs.exists(filePath);
    if (exists) {
      resolve();
      if (!notOppeningAfterDld) {
        if (IS_IOS) {
          setTimeout(() => ReactNativeBlobUtil.ios.openDocument(filePath), 1000);
        } else {
          const mimeType = getTypeByExtension(filePath);
          if (mimeType) {
            ReactNativeBlobUtil.android.actionViewIntent(filePath, mimeType);
          }
        }
      }
    } else {
      if (!isConnected) {
        return showNoConnectionAlert();
      }
      if (IS_IOS) {
        try {
          const fetchConf = ReactNativeBlobUtil.config({
            fileCache: true,
            path: filePath,
          });
          // console.log('this id1', this[id]);

          fetchConf
            .fetch('GET', resourceUrl)
            .progress((received: number, total: number) => {
              if (!notEmmitingProgress) {
                DeviceEventEmitter.emit('dldProgress', {
                  id,
                  val: received / total,
                });
              }
            })
            .then((res: { data: string }) => {
              resolve();
              if (!notEmmitingProgress) {
                DeviceEventEmitter.emit('dldProgress', {
                  id,
                  val: undefined,
                });
              }
              if (!getTypeByExtension(filePath)) {
                ReactNativeBlobUtil.fs
                  .mv(res.data, `${res.data}${resource?.extension}`)
                  .then(() => {
                    if (!notOppeningAfterDld) {
                      ReactNativeBlobUtil.ios.openDocument(`${res.data}${resource?.extension}`);
                    }
                  })
                  .catch(() => {
                    reject();
                  });
              } else if (!notOppeningAfterDld) {
                ReactNativeBlobUtil.ios.openDocument(res.data);
              }
            })
            .catch(() => {
              reject();
              Alert.alert(
                `Error while downloading ${resource?.resource_name}`,
                'There is insufficient storage space on your device. Please free up some space and try again.',
                [{ text: 'OK' }],
                { cancelable: false }
              );
              ReactNativeBlobUtil.fs.unlink(filePath);
            });
        } catch (e) {
          resolve();
        }
      } else {
        try {
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
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            ReactNativeBlobUtil.fs.df().then(info => {
              const { free, internal_free, external_free } = info;
              const freeSpaceInMb =
                (free || Math.max(Number(internal_free), Number(external_free))) / 1024 / 1024;
              let hasSpace = false;
              if (
                (resource?.extension === 'pdf' && freeSpaceInMb > 1) ||
                (resource?.extension !== 'pdf' && freeSpaceInMb > 100)
              ) {
                hasSpace = true;
              }
              if (hasSpace) {
                try {
                  const options = {
                    fileCache: true,
                    addAndroidDownloads: {
                      useDownloadManager: true,
                      notification: true,
                      path: filePath,
                      title: resource?.resource_name,
                      description: 'Downloading',
                    },
                  };
                  const fetchConf = ReactNativeBlobUtil.config(options);
                  fetchConf
                    .fetch('GET', resourceUrl)
                    .then(() => {
                      resolve();
                      if (!notOppeningAfterDld) {
                        const extension = getTypeByExtension(resource?.extension);
                        if (resource?.wasWithoutExtension) {
                          ReactNativeBlobUtil.fs
                            .mv(filePath, `${filePath}${resource?.extension}`)
                            .then(() => {
                              if (extension) {
                                ReactNativeBlobUtil.android.actionViewIntent(
                                  `${filePath}${resource?.extension}`,
                                  extension
                                );
                              }
                            })
                            .catch(() => {
                              reject();
                            });
                        } else {
                          if (extension) {
                            ReactNativeBlobUtil.android.actionViewIntent(filePath, extension);
                          }
                        }
                      }
                    })
                    .catch(() => {
                      reject();
                    });
                } catch (e) {
                  resolve();
                }
              } else {
                resolve();
                Alert.alert(
                  `Error while downloading ${resource?.resource_name}`,
                  'There is insufficient storage space on your device. Please free up some space and try again.',
                  [{ text: 'OK' }],
                  { cancelable: false }
                );
              }
            });
          }
        } catch (err) {
          resolve();
        }
      }
    }
  });
};
