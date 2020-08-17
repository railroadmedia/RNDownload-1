import { Alert, Platform, AppState, DeviceEventEmitter } from 'react-native';

import RNFetchBlob from 'rn-fetch-blob';
import NetInfo from '@react-native-community/netinfo';
import RNBackgroundDownloader from 'react-native-background-downloader';

import downloadService from './services/download.service';

let offPath;
let isiOS = Platform.OS == 'ios';

export default class DownloadResume {
  constructor(offlinePath) {
    offPath =
      offlinePath || isiOS
        ? RNFetchBlob.fs.dirs.LibraryDir
        : RNFetchBlob.fs.dirs.DocumentDir;

    // NetInfo.addEventListener(this.handleConnectivity);
    AppState.addEventListener('change', this.handleDownloads);
  }

  static addProgressListener(callback) {
    DeviceEventEmitter.addListener('dldProgress', callback);
  }

  static removeProgressListener(callback) {
    DeviceEventEmitter.removeListener('dldProgress', callback);
  }

  handleConnectivity = async ({ type }) => {
    if (!(type === 'none' || type === 'unknown')) this.handleDownloads();
  };

  handleDownloads = async () => {
    let existingDld = (
      await RNBackgroundDownloader.checkForExistingDownloads()
    )[0];
    let offlineContent;
    if (this.offlineContent && Object.keys(this.offlineContent).length) {
      offlineContent = this.offlineContent;
    } else {
      try {
        offlineContent = await RNFetchBlob.fs.readFile(
          `${offPath}/offlineContent`,
          'utf8'
        );
      } catch (e) {}
      if (!offlineContent) return;
      try {
        offlineContent = JSON.parse(offlineContent);
      } catch (e) {
        return;
      }
    }
    let dldingId;
    try {
      dldingId = Object.values(offlineContent).filter(
        ocv => ocv.entity.dlding && ocv.entity.dldedFiles.length
      );
    } catch (e) {}
    if (!dldingId || !dldingId.length) {
      try {
        dldingId = Object.values(offlineContent).filter(
          ocv => ocv.entity.dlding
        );
      } catch (e) {}
    }
    if (dldingId.length) dldingId = dldingId[0].entity.id;
    else return;

    let sizes = offlineContent[dldingId].entity.sizes;
    let progress = offlineContent[dldingId].entity.progress;

    if (dldingId) {
      let dldingFiles = offlineContent[dldingId].entity.dldingFiles;
      if (dldingFiles) {
        dldingFiles.map((dingF, i) => {
          offlineContent[dldingId].entity.dldedFiles.map(dedF => {
            if (dedF === dingF.key)
              offlineContent[dldingId].entity.dldingFiles.splice(i, 1);
          });
        });
      }
    }
    if (existingDld && existingDld.state !== 'DONE') await existingDld.resume();
    if (existingDld && existingDld.state !== 'DONE') {
      existingDld
        .begin(async expectedBytes => {
          let freeSpace = isiOS
            ? await RNFetchBlob.fs.df().free
            : await RNFetchBlob.fs.df().internal_free;
          if (freeSpace < expectedBytes) {
            let title = '';
            try {
              title = `'${
                offlineContent[dldingId].entity.fields.filter(
                  f => f.key === 'title'
                )[0].value
              }'`;
            } catch (e) {}
            Alert.alert(
              `Error while downloading ${title}`,
              'There is insufficient storage space on your device. Please free up some space and try again.',
              [{ text: 'OK' }],
              { cancelable: false }
            );
            existingDld.stop();
            this.delete(offlineContent, dldingId);
            delete downloadService.deletedDld;
            return;
          }
        })
        .progress(async p => {
          clearTimeout(this.enforceLowStorageAction);
          if (downloadService.deletedDld) {
            existingDld.pause();
            let { ocAfterDelete, deletedId } = await downloadService.deletedDld;
            delete downloadService.deletedDld;
            if (existingDld.id.indexOf(deletedId) > -1) {
              existingDld.stop();
              let firstDldingContentId;
              if (!firstDldingContentId || !firstDldingContentId.length) {
                try {
                  firstDldingContentId = Object.values(ocAfterDelete).filter(
                    oc => oc.entity.dlding
                  )[0].entity.id;
                  this.bckgDld(ocAfterDelete, firstDldingContentId);
                } catch (e) {}
              }
              return;
            }
            existingDld.resume();
          }
          progress[existingDld.id] = p;
          sizes[existingDld.id] = existingDld.totalBytes;
          if (
            offlineContent[dldingId].entity.dldedFiles.indexOf(existingDld.id) <
            0
          )
            offlineContent[dldingId].entity.dldedFiles.push(existingDld.id);

          let totalProgress = 0;
          Object.values(progress).map(p => (totalProgress += p));
          totalProgress /= Object.keys(progress).length;

          DeviceEventEmitter.emit('dldProgress', {
            id: dldingId,
            val: totalProgress
          });

          this.enforceLowStorageAction = setTimeout(async () => {
            let freeSpace = isiOS
              ? await RNFetchBlob.fs.df().free
              : await RNFetchBlob.fs.df().internal_free;
            if (freeSpace < 500000000) {
              let title = '';
              try {
                title = `'${
                  offlineContent[dldingId].entity.fields.filter(
                    f => f.key === 'title'
                  )[0].value
                }'`;
              } catch (e) {}
              Alert.alert(
                `Error while downloading ${title}`,
                'There is insufficient storage space on your device. Please free up some space and try again.',
                [{ text: 'OK' }],
                { cancelable: false }
              );
              existingDld.stop();
              this.delete(offlineContent, dldingId);
              delete downloadService.deletedDld;
              return;
            }
          }, 30000);
        })
        .done(async () => {
          if (downloadService.deletedDld) {
            let { ocAfterDelete, deletedId } = await downloadService.deletedDld;
            delete downloadService.deletedDld;
            if (existingDld.id.indexOf(deletedId) > -1) {
              let firstDldingContentId;
              if (!firstDldingContentId || !firstDldingContentId.length) {
                try {
                  firstDldingContentId = Object.values(ocAfterDelete).filter(
                    oc => oc.entity.dlding
                  )[0].entity.id;
                  this.bckgDld(ocAfterDelete, firstDldingContentId);
                } catch (e) {}
              }
              return;
            }
          }
          progress[existingDld.id] = 1;
          sizes[existingDld.id] = existingDld.totalBytes;
          let totalProgress = 0;
          Object.values(progress).map(p => (totalProgress += p));
          totalProgress /= Object.keys(progress).length;
          DeviceEventEmitter.emit('dldProgress', {
            id: dldingId,
            val: totalProgress
          });

          if (
            offlineContent[dldingId].entity.dldedFiles.indexOf(existingDld.id) <
            0
          )
            offlineContent[dldingId].entity.dldedFiles.push(existingDld.id);

          let newOfflineContent = JSON.parse(
            await RNFetchBlob.fs.readFile(`${offPath}/offlineContent`, 'utf8')
          );
          newOfflineContent[dldingId] = offlineContent[dldingId];
          this.replaceObjValByStringPath(
            newOfflineContent,
            newOfflineContent[dldingId].entity.dldingFiles[0].pathToValue,
            existingDld.id
          );

          if (newOfflineContent[dldingId].entity.dldingFiles.length === 1) {
            newOfflineContent[dldingId].entity.offlineSize =
              newOfflineContent[dldingId].entity.offlineSize || 0;
            Object.values(sizes).map(
              s => (newOfflineContent[dldingId].entity.offlineSize += s)
            );

            delete newOfflineContent[dldingId].entity.urls;
            delete newOfflineContent[dldingId].entity.sizes;
            delete newOfflineContent[dldingId].entity.dlding;
            delete newOfflineContent[dldingId].entity.progress;
            delete newOfflineContent[dldingId].entity.dldingFiles;
            DeviceEventEmitter.emit('dldProgress', {
              id: dldingId,
              val: undefined
            });
            clearTimeout(this.enforceLowStorageAction);

            try {
              try {
                await RNFetchBlob.fs.writeFile(
                  `${offPath}/offlineContent`,
                  JSON.stringify(newOfflineContent),
                  'utf8'
                );
              } catch (e) {
                let title = '';
                try {
                  title = `'${
                    offlineContent[dldingId].entity.fields.filter(
                      f => f.key === 'title'
                    )[0].value
                  }'`;
                } catch (e) {}
                Alert.alert(
                  `Error while downloading ${title}`,
                  'There is insufficient storage space on your device. Please free up some space and try again.',
                  [{ text: 'OK' }],
                  { cancelable: false }
                );
                this.delete(offlineContent, dldingId);
                delete downloadService.deletedDld;
                return;
              }
              this.offlineContent = Object.assign({}, newOfflineContent);

              try {
                let firstDldingContentId = Object.values(
                  newOfflineContent
                ).filter(noc => noc.entity.dlding)[0].entity.id;
                return this.bckgDld(newOfflineContent, firstDldingContentId);
              } catch (e) {}

              let existingLesons = [];
              if (offlineContent[dldingId].entity.lessons)
                offlineContent[dldingId].entity.lessons.map(async l => {
                  if (offlineContent[l.id]) existingLesons.push(l.id);
                });
              for (let i = 0; i < existingLesons.length; i++)
                await this.delete(offlineContent, existingLesons[i], true);

              return;
            } catch (e) {}
          }
          try {
            try {
              await RNFetchBlob.fs.writeFile(
                `${offPath}/offlineContent`,
                JSON.stringify(newOfflineContent),
                'utf8'
              );
            } catch (e) {
              let title = '';
              try {
                title = `'${
                  offlineContent[dldingId].entity.fields.filter(
                    f => f.key === 'title'
                  )[0].value
                }'`;
              } catch (e) {}
              Alert.alert(
                `Error while downloading ${title}`,
                'There is insufficient storage space on your device. Please free up some space and try again.',
                [{ text: 'OK' }],
                { cancelable: false }
              );
              this.delete(offlineContent, dldingId);
              delete downloadService.deletedDld;
              return;
            }
            this.offlineContent = Object.assign({}, newOfflineContent);

            newOfflineContent[dldingId].entity.dldingFiles.splice(0, 1);
            this.bckgDld(newOfflineContent, dldingId);
          } catch (e) {}
        })
        .error(async error => {
          clearTimeout(this.enforceLowStorageAction);
          let title = '';
          try {
            title = `'${
              offlineContent[dldingId].entity.fields.filter(
                f => f.key === 'title'
              )[0].value
            }'`;
          } catch (e) {}
          Alert.alert(
            `Error while downloading ${title}`,
            'There is insufficient storage space on your device. Please free up some space and try again.',
            [{ text: 'OK' }],
            { cancelable: false }
          );
          this.delete(offlineContent, dldingId);
          delete downloadService.deletedDld;
          return;
        });
    } else {
      this.bckgDld(offlineContent, dldingId);
    }
  };

  bckgDld = async (offlineContent, id) => {
    if (id) {
      let dldingFiles = offlineContent[id].entity.dldingFiles;
      if (dldingFiles) {
        dldingFiles.map((dingF, i) => {
          offlineContent[id].entity.dldedFiles.map(dedF => {
            if (dedF === dingF.key)
              offlineContent[id].entity.dldingFiles.splice(i, 1);
          });
        });
      }
    }

    let sizes = offlineContent[id].entity.sizes;
    let progress = offlineContent[id].entity.progress;
    let u = offlineContent[id].entity.dldingFiles[0];

    task = RNBackgroundDownloader.download({
      id: u.key,
      url: u.value,
      destination: `${offPath}/${u.key}`
    })
      .begin(async expectedBytes => {
        let freeSpace = isiOS
          ? await RNFetchBlob.fs.df().free
          : await RNFetchBlob.fs.df().internal_free;
        if (freeSpace < expectedBytes) {
          let title = '';
          try {
            title = `'${
              offlineContent[id].entity.fields.filter(f => f.key === 'title')[0]
                .value
            }'`;
          } catch (e) {}
          Alert.alert(
            `Error while downloading ${title}`,
            'There is insufficient storage space on your device. Please free up some space and try again.',
            [{ text: 'OK' }],
            { cancelable: false }
          );
          task.stop();
          this.delete(offlineContent, id);
          delete downloadService.deletedDld;
          return;
        }
      })
      .progress(async p => {
        clearTimeout(this.enforceLowStorageAction);
        if (downloadService.deletedDld) {
          task.pause();
          let { ocAfterDelete, deletedId } = await downloadService.deletedDld;
          delete downloadService.deletedDld;
          if (task.id.indexOf(deletedId) > -1) {
            task.stop();
            let firstDldingContentId;
            if (!firstDldingContentId || !firstDldingContentId.length) {
              try {
                firstDldingContentId = Object.values(ocAfterDelete).filter(
                  oc => oc.entity.dlding
                )[0].entity.id;
                this.bckgDld(ocAfterDelete, firstDldingContentId);
              } catch (e) {}
            }
            return;
          }
          task.resume();
        }
        progress[u.key] = p;
        sizes[u.key] = task.totalBytes;
        if (offlineContent[id].entity.dldedFiles.indexOf(u.key) < 0)
          offlineContent[id].entity.dldedFiles.push(u.key);

        let totalProgress = 0;
        Object.values(progress).map(p => (totalProgress += p));
        totalProgress /= Object.keys(progress).length;

        DeviceEventEmitter.emit('dldProgress', { id, val: totalProgress });

        this.enforceLowStorageAction = setTimeout(async () => {
          let freeSpace = isiOS
            ? await RNFetchBlob.fs.df().free
            : await RNFetchBlob.fs.df().internal_free;
          if (freeSpace < 100000000) {
            let title = '';
            try {
              title = `'${
                offlineContent[id].entity.fields.filter(
                  f => f.key === 'title'
                )[0].value
              }'`;
            } catch (e) {}
            Alert.alert(
              `Error while downloading ${title}`,
              'There is insufficient storage space on your device. Please free up some space and try again.',
              [{ text: 'OK' }],
              { cancelable: false }
            );
            task.stop();
            this.delete(offlineContent, id);
            delete downloadService.deletedDld;
            return;
          }
        }, 30000);
      })
      .done(async () => {
        if (downloadService.deletedDld) {
          let { ocAfterDelete, deletedId } = await downloadService.deletedDld;
          delete downloadService.deletedDld;
          if (task.id.indexOf(deletedId) > -1) {
            let firstDldingContentId;
            if (!firstDldingContentId || !firstDldingContentId.length) {
              try {
                firstDldingContentId = Object.values(ocAfterDelete).filter(
                  oc => oc.entity.dlding
                )[0].entity.id;
                this.bckgDld(ocAfterDelete, firstDldingContentId);
              } catch (e) {}
            }
            return;
          }
        }
        progress[u.key] = 1;
        sizes[u.key] = task.totalBytes;
        let totalProgress = 0;
        Object.values(progress).map(p => (totalProgress += p));
        totalProgress /= Object.keys(progress).length;
        DeviceEventEmitter.emit('dldProgress', { id, val: totalProgress });

        if (offlineContent[id].entity.dldedFiles.indexOf(u.key) < 0)
          offlineContent[id].entity.dldedFiles.push(u.key);

        let newOfflineContent = JSON.parse(
          await RNFetchBlob.fs.readFile(`${offPath}/offlineContent`, 'utf8')
        );
        newOfflineContent[id] = offlineContent[id];
        this.replaceObjValByStringPath(newOfflineContent, u.pathToValue, u.key);

        if (
          newOfflineContent[id].entity.dldingFiles &&
          newOfflineContent[id].entity.dldingFiles.length === 1
        ) {
          newOfflineContent[id].entity.offlineSize =
            newOfflineContent[id].entity.offlineSize || 0;
          Object.values(sizes).map(
            s => (newOfflineContent[id].entity.offlineSize += s)
          );

          delete newOfflineContent[id].entity.urls;
          delete newOfflineContent[id].entity.sizes;
          delete newOfflineContent[id].entity.dlding;
          delete newOfflineContent[id].entity.progress;
          delete newOfflineContent[id].entity.dldingFiles;
          DeviceEventEmitter.emit('dldProgress', { id, val: undefined });
          clearTimeout(this.enforceLowStorageAction);

          try {
            await RNFetchBlob.fs.writeFile(
              `${offPath}/offlineContent`,
              JSON.stringify(newOfflineContent),
              'utf8'
            );
            this.offlineContent = Object.assign({}, newOfflineContent);
            try {
              let firstDldingContentId = Object.values(
                newOfflineContent
              ).filter(noc => noc.entity.dlding)[0].entity.id;
              return this.bckgDld(newOfflineContent, firstDldingContentId);
            } catch (e) {}

            let existingLesons = [];
            if (offlineContent[id].entity.lessons)
              offlineContent[id].entity.lessons.map(async l => {
                if (offlineContent[l.id]) existingLesons.push(l.id);
              });
            for (let i = 0; i < existingLesons.length; i++)
              await this.delete(offlineContent, existingLesons[i], true);

            return;
          } catch (e) {
            let title = '';
            try {
              title = `'${
                offlineContent[id].entity.fields.filter(
                  f => f.key === 'title'
                )[0].value
              }'`;
            } catch (e) {}
            Alert.alert(
              `Error while downloading ${title}`,
              'There is insufficient storage space on your device. Please free up some space and try again.',
              [{ text: 'OK' }],
              { cancelable: false }
            );
            this.delete(offlineContent, id);
            delete downloadService.deletedDld;
            return;
          }
        }
        try {
          try {
            await RNFetchBlob.fs.writeFile(
              `${offPath}/offlineContent`,
              JSON.stringify(newOfflineContent),
              'utf8'
            );
          } catch (e) {
            let title = '';
            try {
              title = `'${
                offlineContent[id].entity.fields.filter(
                  f => f.key === 'title'
                )[0].value
              }'`;
            } catch (e) {}
            Alert.alert(
              `Error while downloading ${title}`,
              'There is insufficient storage space on your device. Please free up some space and try again.',
              [{ text: 'OK' }],
              { cancelable: false }
            );
            this.delete(offlineContent, id);
            delete downloadService.deletedDld;
            return;
          }
          this.offlineContent = Object.assign({}, newOfflineContent);

          newOfflineContent[id].entity.dldingFiles.splice(0, 1);
          this.bckgDld(newOfflineContent, id);
        } catch (e) {}
      })
      .error(async error => {
        clearTimeout(this.enforceLowStorageAction);
        let title = '';
        try {
          title = `'${
            offlineContent[id].entity.fields.filter(f => f.key === 'title')[0]
              .value
          }'`;
        } catch (e) {}
        Alert.alert(
          `Error while downloading ${title}`,
          'There is insufficient storage space on your device. Please free up some space and try again.',
          [{ text: 'OK' }],
          { cancelable: false }
        );
        this.delete(offlineContent, id);
        delete downloadService.deletedDld;
        return;
      });
  };

  delete = async (offlineContent, id, keepFiles) => {
    return (downloadService.deletedDld = new Promise(async resolve => {
      let dldedFiles = offlineContent[id].entity.dldedFiles;
      let dldingFiles = offlineContent[id].entity.dldingFiles;
      try {
        let oc = await RNFetchBlob.fs.readFile(
          `${offPath}/offlineContent`,
          'utf8'
        );
        dldedFiles = [...dldedFiles, oc[id].entity.dldedFiles];
        dldingFiles = [...dldingFiles, oc[id].entity.dldingFiles];
      } catch (e) {}
      delete offlineContent[id];
      try {
        await RNFetchBlob.fs.unlink(`${offPath}/offlineContent`);
      } catch (e) {}
      try {
        await RNFetchBlob.fs.writeFile(
          `${offPath}/offlineContent`,
          JSON.stringify(offlineContent),
          'utf8'
        );
        this.offlineContent = Object.assign({}, offlineContent);
      } catch (e) {}

      DeviceEventEmitter.emit('dldProgress', { id, val: undefined });
      clearTimeout(this.enforceLowStorageAction);

      if (!keepFiles)
        dldedFiles.map(async df => {
          try {
            await RNFetchBlob.fs.unlink(`${offPath}/${df}`);
          } catch (e) {}
        });
      if (!keepFiles && dldingFiles)
        dldingFiles.map(async df => {
          try {
            await RNFetchBlob.fs.unlink(`${offPath}/${df}`);
          } catch (e) {}
        });
      resolve({ ocAfterDelete: offlineContent, deletedId: id });
    }));
  };

  replaceObjValByStringPath = (obj, strPath, newVal) => {
    let arrPath = strPath.split(',');
    let val;
    arrPath.map(async (ap, i) => {
      if (!val) {
        val = obj[ap];
      } else if (i === arrPath.length - 1) {
        val[ap] = isiOS ? newVal : `file:///${newVal}`;
        if (!isiOS && val[ap].indexOf('.svg') > -1)
          val[ap] = `data:image/svg+xml;utf8,${await RNFetchBlob.fsreadFile(
            val[ap].replace('file://', `file://${offPath}`)
          )}`;
      } else {
        if (ap.indexOf('{') > -1) {
          ap = ap.replace('{', '').replace('}', '');
          val = val.filter(v => v.id == ap)[0];
        } else {
          val = val[ap];
        }
      }
    });
  };
}
