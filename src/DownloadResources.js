/* props: maxFontMultiplier */

import React from 'react';
import {
  View,
  Text,
  Alert,
  Platform,
  ScrollView,
  TouchableOpacity,
  PermissionsAndroid,
  DeviceEventEmitter
} from 'react-native';

import ReactNativeBlobUtil from 'react-native-blob-util';

import { zip, mp3, mp4, pdf } from './img/svgs';
import DeviceInfo from 'react-native-device-info';

const getTypeByExtension = path => {
  if (path === 'mp3' || path.indexOf('mp3') > 0) return 'audio/mp3';
  if (path === 'pdf' || path.indexOf('pdf') > 0) return 'application/pdf';
  if (path === 'zip' || path.indexOf('zip') > 0) return 'application/zip';
};

const downloadRes = (
  resource,
  lessonTitle,
  id,
  notEmmitingProgress,
  notOppeningAfterDld,
  cancel,
  isConnected,
  showNoConnectionAlert
) => {
  if (cancel) return this[id].cancel(() => {});
  return new Promise(async (resolve, reject) => {
    let isiOS = Platform.OS === 'ios';
    let resourceUrl;
    if (decodeURI(resource.resource_url) === resource.resource_url) {
      resourceUrl = encodeURI(resource.resource_url);
    } else {
      resourceUrl = resource.resource_url;
    }
    let dirs = ReactNativeBlobUtil.fs.dirs;
    const filePath = isiOS
      ? `${dirs.DocumentDir}/${lessonTitle.replace(
          /[&\/\\#,+()$~%.,^'":*?!|<>{}]/g,
          ''
        )}/${resource.resource_id}.${resource.extension}`
      : `${dirs.DownloadDir}/${lessonTitle.replace(
          /[&\/\\#,+()$~%.,^'":*?!|<>{}]/g,
          ''
        )}/${resource.resource_id}.${resource.extension}`;
    let exists = await ReactNativeBlobUtil.fs.exists(filePath);
    if (exists) {
      resolve();
      if (!notOppeningAfterDld) {
        if (isiOS)
          setTimeout(
            () => ReactNativeBlobUtil.ios.openDocument(filePath),
            1000
          );
        else {
          ReactNativeBlobUtil.android.actionViewIntent(
            filePath,
            getTypeByExtension(filePath)
          );
        }
      }
    } else {
      if (!isConnected) {
        return showNoConnectionAlert();
      }
      if (isiOS) {
        try {
          let fetchConf = ReactNativeBlobUtil.config({
            fileCache: true,
            path: filePath
          });
          this[id] = fetchConf.fetch('GET', resourceUrl);
          this[id]
            .progress((received, total) => {
              if (!notEmmitingProgress)
                DeviceEventEmitter.emit('dldProgress', {
                  id,
                  val: received / total
                });
            })
            .then(res => {
              resolve();
              if (!notEmmitingProgress)
                DeviceEventEmitter.emit('dldProgress', {
                  id,
                  val: undefined
                });
              if (!getTypeByExtension(filePath))
                ReactNativeBlobUtil.fs
                  .mv(res.data, `${res.data}${resource.extension}`)
                  .then(() => {
                    if (!notOppeningAfterDld)
                      ReactNativeBlobUtil.ios.openDocument(
                        `${res.data}${resource.extension}`
                      );
                  })
                  .catch(() => {
                    reject();
                  });
              else if (!notOppeningAfterDld)
                ReactNativeBlobUtil.ios.openDocument(res.data);
            })
            .catch(e => {
              reject();
              Alert.alert(
                `Error while downloading ${resource.resource_name}`,
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
          if (DeviceInfo.getSystemVersion() >= 13) {
            granted = PermissionsAndroid.RESULTS.GRANTED;
          } else {
            granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Write to external Storage',
                message: 'For downloading resources we need your permission',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK'
              }
            );
          }
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            ReactNativeBlobUtil.fs.df().then(info => {
              let { free, internal_free, external_free } = info;
              let freeSpaceInMb =
                (free || Math.max(internal_free, external_free)) / 1024 / 1024;
              let extension = resource.extension;
              let hasSpace = false;
              if (
                (extension === 'pdf' && freeSpaceInMb > 1) ||
                (extension !== 'pdf' && freeSpaceInMb > 100)
              ) {
                hasSpace = true;
              }
              if (hasSpace) {
                try {
                  let options = {
                    fileCache: true,
                    addAndroidDownloads: {
                      useDownloadManager: true,
                      notification: true,
                      path: filePath,
                      title: resource.resource_name,
                      description: 'Downloading'
                    }
                  };
                  let fetchConf = ReactNativeBlobUtil.config(options);
                  fetchConf
                    .fetch('GET', resourceUrl)
                    .then(fetchResp => {
                      resolve();
                      if (!notOppeningAfterDld) {
                        const extension = getTypeByExtension(
                          resource.extension
                        );
                        if (resource.wasWithoutExtension) {
                          ReactNativeBlobUtil.fs
                            .mv(filePath, `${filePath}${resource.extension}`)
                            .then(() => {
                              ReactNativeBlobUtil.android.actionViewIntent(
                                `${filePath}${resource.extension}`,
                                extension
                              );
                            })
                            .catch(e => {
                              reject();
                            });
                        } else {
                          ReactNativeBlobUtil.android.actionViewIntent(
                            filePath,
                            extension
                          );
                        }
                      }
                    })
                    .catch(e => {
                      reject();
                    });
                } catch (e) {
                  resolve();
                }
              } else {
                resolve();
                Alert.alert(
                  `Error while downloading ${resource.resource_name}`,
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

const renderSvgs = (extension, propStyle) => {
  const svgStyle = {
    height: 18,
    width: 18,
    fill: propStyle.color
  };
  switch (extension) {
    case 'zip':
      return zip(svgStyle);
    case 'mp3':
      return mp3(svgStyle);
    case 'mp4':
      return mp4(svgStyle);
    case 'pdf':
      return pdf(svgStyle);
  }
};

export default class DownloadResources extends React.Component {
  static addProgressListener(callback) {
    DeviceEventEmitter.addListener('dldProgress', callback);
  }

  static removeProgressListener(callback) {
    DeviceEventEmitter.removeAllListeners('dldProgress', callback);
  }

  render() {
    let {
      resources,
      maxFontMultiplier,
      styles: propStyle,
      lessonTitle,
      isConnected,
      showNoConnectionAlert
    } = this.props;
    return (
      <View style={propStyle.container}>
        <ScrollView>
          {resources &&
            resources.map((resource, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: propStyle.borderColor
                }}
                onPress={async () => {
                  await this.props.onClose();
                  downloadRes(
                    resource,
                    lessonTitle,
                    index,
                    undefined,
                    undefined,
                    undefined,
                    isConnected,
                    showNoConnectionAlert
                  );
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      marginRight: 15
                    }}
                  >
                    {renderSvgs(resource.extension, propStyle)}
                  </View>

                  <Text
                    maxFontSizeMultiplier={maxFontMultiplier}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={{
                      color: propStyle.color,
                      fontSize: 14,
                      color: propStyle.color,
                      fontFamily:
                        propStyle?.touchableTextResourceNameFontFamily,
                      width: '75%'
                    }}
                  >
                    {resource.resource_name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    );
  }
}

export { downloadRes };
