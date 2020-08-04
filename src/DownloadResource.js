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

import RNFetchBlob from 'rn-fetch-blob';

import { x, link, zip, mp3, mp4, pdf } from '../../img/svgs';

const getTypeByExtension = path => {
  if (path === 'mp3' || path.indexOf('mp3') > 0) return 'audio/mp3';
  if (path === 'pdf' || path.indexOf('pdf') > 0) return 'application/pdf';
  if (path === 'zip' || path.indexOf('zip') > 0) return 'application/zip';
};

const downloadRes = (
  resource,
  id,
  notEmmitingProgress,
  notOppeningAfterDld,
  cancel
) => {
  if (cancel) return this[id].cancel(() => {});
  return new Promise(async (resolve, reject) => {
    let isiOS = Platform.OS === 'ios';
    let dirs = RNFetchBlob.fs.dirs;
    const filePath = isiOS
      ? `${dirs.DocumentDir}/Downloads/${resource.resource_url
          .split('/')
          .pop()
          .replace(/ /g, '')
          .replace(/%20/g, '-')
          .toLowerCase()}`
      : `${dirs.SDCardDir}/Download/${resource.resource_url
          .split('/')
          .pop()
          .replace(/ /g, '-')
          .replace(/%20/g, '-')
          .toLowerCase()}`;
    let exists = await RNFetchBlob.fs.exists(filePath);
    if (exists) {
      resolve();
      if (!notOppeningAfterDld) {
        if (isiOS) RNFetchBlob.ios.openDocument(filePath);
        else {
          RNFetchBlob.android.actionViewIntent(
            filePath,
            getTypeByExtension(filePath)
          );
        }
      }
    } else {
      if (isiOS) {
        try {
          let fetchConf = RNFetchBlob.config({
            fileCache: true,
            path: filePath
          });
          this[id] = fetchConf.fetch(
            'GET',
            encodeURI(decodeURI(resource.resource_url))
          );
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
                RNFetchBlob.fs
                  .mv(res.data, `${res.data}${resource.extension}`)
                  .then(() => {
                    if (!notOppeningAfterDld)
                      RNFetchBlob.ios.openDocument(
                        `${res.data}${resource.extension}`
                      );
                  })
                  .catch(() => {
                    reject();
                  });
              else if (!notOppeningAfterDld)
                RNFetchBlob.ios.openDocument(res.data);
            })
            .catch(e => {
              reject();
              Alert.alert(
                `Error while downloading ${resource.resource_name}`,
                'There is insufficient storage space on your device. Please free up some space and try again.',
                [{ text: 'OK' }],
                { cancelable: false }
              );
              RNFetchBlob.fs.unlink(filePath);
            });
        } catch (e) {
          resolve();
        }
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Write to external Storage',
              message: 'For downloading resources we need your permission',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK'
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            RNFetchBlob.fs.df().then(info => {
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
                  let fetchConf = RNFetchBlob.config(options);
                  fetchConf
                    .fetch('GET', encodeURI(decodeURI(resource.resource_url)))
                    .then(fetchResp => {
                      resolve();
                      if (!notOppeningAfterDld) {
                        const extension = getTypeByExtension(
                          resource.extension
                        );
                        if (resource.wasWithoutExtension) {
                          RNFetchBlob.fs
                            .mv(filePath, `${filePath}${resource.extension}`)
                            .then(() => {
                              RNFetchBlob.android.actionViewIntent(
                                `${filePath}${resource.extension}`,
                                extension
                              );
                            })
                            .catch(e => {
                              reject();
                            });
                        } else {
                          RNFetchBlob.android.actionViewIntent(
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

const renderSvgs = (extension, theme) => {
  const svgStyle = {
    height: 18,
    width: 18,
    fill: 'red'
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
  render() {
    let { resources, maxFontMultiplier } = this.props;
    return (
      <View style={{ backgroundColor: 'red' }}>
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
                  borderBottomColor: 'red'
                }}
                onPress={async () => {
                  await this.props.onClose();
                  downloadRes(resource, index);
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      marginRight: 15
                    }}
                  >
                    {renderSvgs(resource.extension, theme)}
                  </View>

                  <Text
                    maxFontSizeMultiplier={maxFontMultiplier}
                    style={{
                      color: 'red',
                      fontSize: 14,
                      color: '#000000',
                      fontFamily: 'OpenSans'
                    }}
                  >
                    {resource.resource_name}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    maxFontSizeMultiplier={maxFontMultiplier}
                    style={{
                      color: 'red',
                      fontSize: 12,
                      marginRight: 10,
                      fontFamily: 'OpenSans'
                    }}
                  >
                    {resource.extension?.toUpperCase()}
                  </Text>
                  {link({
                    height: 12,
                    width: 12,
                    fill: 'red'
                  })}
                </View>
              </TouchableOpacity>
            ))}
          <TouchableOpacity
            onPress={this.props.onClose}
            style={{
              padding: 15,
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                marginRight: 15
              }}
            >
              {x({
                height: 18,
                width: 18,
                fill: 'red'
              })}
            </View>
            <Text
              maxFontSizeMultiplier={maxFontMultiplier}
              style={{
                color: 'red',
                fontSize: 14,
                fontFamily: 'OpenSans'
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
export { downloadRes };
