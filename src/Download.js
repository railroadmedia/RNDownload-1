import React from 'react';
import {
  View,
  Text,
  Alert,
  Platform,
  Animated,
  PixelRatio,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  DeviceEventEmitter
} from 'react-native';

import RNFetchBlob from 'rn-fetch-blob';
import RNBackgroundDownloader from 'react-native-background-downloader';

import { downloadRes } from './DownloadResources';
import AnimatedCustomAlert from './AnimatedCustomAlert';

import downloadService from './services/download.service';

import { download, trash, stopDownload } from './img/svgs';

let task;
let offPath;
let isiOS = Platform.OS == 'ios';
const windowDims = Dimensions.get('window'),
  windowWidth = windowDims.width,
  halfGreaterWDim =
    windowDims.height < windowDims.width
      ? windowDims.width / 2
      : windowDims.height / 2;

export default class Download extends React.Component {
  _isMounted = false;

  state = {
    dldWidth: 0,
    dlding: false,
    entityExists: false,
    percentage: new Animated.Value(0)
  };

  constructor(props) {
    super(props);
    offPath =
      props.offPath || isiOS
        ? RNFetchBlob.fs.dirs.LibraryDir
        : RNFetchBlob.fs.dirs.DocumentDir;
    this.progress = this.progress.bind(this);
    this.download = this.download.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true;
    let offlineContent;
    try {
      offlineContent = await RNFetchBlob.fs.readFile(
        `${offPath}/offlineContent`,
        'utf8'
      );
    } catch (e) {}
    if (offlineContent) {
      try {
        offlineContent = JSON.parse(offlineContent);
      } catch (e) {}
      DeviceEventEmitter.addListener(
        'dldProgress',
        this.percentageListener.bind(this)
      );
      if (
        offlineContent[this.props.entity.id] &&
        offlineContent[this.props.entity.id].entity.dlding
      ) {
        if (this._isMounted) this.setState({ dlding: true });
      } else if (
        offlineContent[this.props.entity.id] &&
        !offlineContent[this.props.entity.id].entity.dlding
      ) {
        if (this._isMounted) this.setState({ entityExists: true });
      } else {
        let offlineKeyIds = Object.keys(offlineContent);
        let found = false;
        for (let i = 0; i < offlineKeyIds.length; i++) {
          if (offlineContent[offlineKeyIds[i]].entity.lessons) {
            for (
              let j = 0;
              j < offlineContent[offlineKeyIds[i]].entity.lessons.length;
              j++
            ) {
              if (
                this.props.entity.id ===
                  offlineContent[offlineKeyIds[i]].entity.lessons[j].id &&
                offlineContent[offlineKeyIds[i]].entity.dlding
              ) {
                found = true;
                if (this._isMounted) this.setState({ dlding: true });
              } else if (
                this.props.entity.id ===
                  offlineContent[offlineKeyIds[i]].entity.lessons[j].id &&
                !offlineContent[offlineKeyIds[i]].entity.dlding
              ) {
                found = true;
                if (this._isMounted) this.setState({ entityExists: true });
              }
            }
          }
          if (found) break;
        }
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    DeviceEventEmitter.removeListener(
      'dldProgress',
      this.percentageListener.bind(this)
    );
  }

  dldReducer = download => {
    delete download.sort;
    delete download.brand;
    delete download.is_new;
    delete download.started;
    delete download.child_id;
    delete download.language;
    delete download.permissions;
    delete download.archived_on;
    delete download.current_lesson;
    delete download.user_playlists;
    delete download.live_event_end_time;
    delete download.live_event_start_time;
    delete download.published_on_in_timezone;
    delete download.live_event_end_time_in_timezone;
    delete download.live_event_start_time_in_timezone;

    if (download.lessons) {
      download.lessons.map(l => {
        this.dldReducer(l);
      });
    }

    if (download.related_lessons) {
      download.related_lessons.map(rl => {
        this.dldReducer(rl);
      });
    }

    if (download.assignments) {
      download.assignments.map(a => {
        this.dldReducer(a);
      });
    }

    let usefulFields = [];
    download.fields.map(f => {
      if (f.key !== 'tag') usefulFields.push(f);
    });
    download.fields = usefulFields;

    let usefulData = [];
    download.data.map(d => {
      if (
        d.key === 'thumbnail_url' ||
        d.key === 'description' ||
        d.key === 'sheet_music_image_url' ||
        d.key.indexOf('mp3_') >= 0
      )
        usefulData.push(d);
    });
    download.data = usefulData;

    return download;
  };

  getAssignWHRatio = async assignments => {
    let assignPromises = [];
    assignments.map(a => {
      let svgs = [],
        nsvgs = [];
      a.data.map(d => {
        if (d.key === 'sheet_music_image_url' && d.value.indexOf('.pdf') > -1)
          return;
        if (d.key === 'sheet_music_image_url' && d.value.indexOf('.svg') > -1)
          return svgs.push(d);
        if (d.key === 'sheet_music_image_url' && d.value.indexOf('.svg') < 0)
          return nsvgs.push(d);
      });
      if (svgs.length) {
        assignPromises.push(
          new Promise(async (res, rej) => {
            let vbPromises = [];
            svgs.map(s => vbPromises.push(fetch(s.value)));

            (await Promise.all(vbPromises)).map(async (vbResp, i) => {
              let vbArr;
              try {
                vbArr = vbResp._bodyText
                  .split('viewBox="')[1]
                  .split('" ')[0]
                  .split(' ');
              } catch (e) {
                vbArr = (await vbResp.text())
                  .split('viewBox="')[1]
                  .split('" ')[0]
                  .split(' ');
              }
              svgs[i].whRatio = vbArr[2] / vbArr[3];
              i === svgs.length - 1 && res();
            });
          })
        );
      }
      if (nsvgs.length) {
        nsvgs.map((ns, i) => {
          assignPromises.push(
            new Promise((res, rej) => {
              Image.getSize(
                ns.value,
                (w, h) => {
                  ns.whRatio = w / h;
                  res();
                },
                e => {
                  ns.whRatio = 1;
                  res();
                }
              );
            })
          );
        });
      }
    });
    await Promise.all(assignPromises);
  };

  percentageListener(percentage) {
    if (this._isMounted && percentage.id === this.props.entity.id) {
      if (percentage.val === undefined && this.props.onDone)
        this.props.onDone();
      if (percentage.val !== undefined) this.animateProgress(percentage.val);
      else if (percentage.val === undefined && this.deletedDld)
        this.setState({ dlding: false, entityExists: false });
      else if (this._isMounted)
        this.setState({ dlding: false, entityExists: true });
    }
  }

  async collectUrls() {
    let urls = [];
    let entity = this.props.entity,
      comments;
    try {
      comments = JSON.parse(JSON.stringify(this.props.additionalData.comments));
    } catch (e) {}
    if (this.props.downloadExtendedEntity) {
      entity = await this.props.downloadExtendedEntity();
      entity.mp3s = JSON.parse(
        JSON.stringify(
          entity.data.filter(d => d.key.indexOf('_click_url') > -1)
        )
      );
      if (entity.assignments) await this.getAssignWHRatio(entity.assignments);
      else if (entity.lessons)
        entity.lessons.map(async l => {
          if (l.assignments) await this.getAssignWHRatio(l.assignments);
        });
    }
    try {
      entity.video_playback_endpoints = this.filterVideosByResolution(
        entity.video_playback_endpoints
      );
    } catch (e) {}
    try {
      entity.lessons.map(
        l =>
          (l.video_playback_endpoints = this.filterVideosByResolution(
            l.video_playback_endpoints
          ))
      );
    } catch (e) {}
    entity.comments = comments;

    this.collectMp3Url(entity, urls);
    this.collectVideoUrl(entity, urls);
    this.collectThumbnailUrl(entity, urls);
    this.collectAssignmentUrl(entity, urls);
    this.collectRelatedLessUrl(entity, urls);
    this.collectCommProfileImgUrl(entity, urls);

    //overview videos
    try {
      if (entity.lessons) {
        this.collectHeadShotPic(entity, urls);
        entity.lessons.map(l => {
          this.collectMp3Url(l, urls, l.id);
          this.collectVideoUrl(l, urls, l.id);
          this.collectAssignmentUrl(l, urls, l.id);
          this.collectRelatedLessUrl(l, urls, l.id);
          this.collectCommProfileImgUrl(l, urls, l.id);
        });
      }
    } catch (e) {}
    entity.urls = urls;
    entity = this.dldReducer(entity);
    return entity;
  }

  async download() {
    delete this.deletedDld;
    if (
      !this.props.entity.video_playback_endpoints &&
      !this.props.entity.lessons
    )
      return Alert.alert(
        'Copyrighted material',
        'This video contains copyrighted material and is not available for offline viewing.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    let id = this.props.entity.id;
    let parentId = this.props.entity.parent_id;
    let offlineContent;
    if (this.offlineContent) {
      offlineContent = this.offlineContent;
    } else {
      try {
        offlineContent = await RNFetchBlob.fs.readFile(
          `${offPath}/offlineContent`,
          'utf8'
        );
      } catch (e) {}
      try {
        offlineContent = JSON.parse(offlineContent);
      } catch (e) {
        offlineContent = {};
      }
      if (!offlineContent) offlineContent = {};
    }

    if (offlineContent[parentId]) {
      let title = 'Hold your horses...';
      let msg =
        'This lesson has been downloaded\nas part of a Course.\nAre you sure you want to delete the\nCourse and all of its Course Parts?\nYou will no longer be able to\naccess this lesson offline.';
      this.idToDelete = parentId;
      this.offlineCToDelete = offlineContent;
      return this.alert.toggle(title, msg);
    } else if (offlineContent[id]) {
      let title = 'Hold your horses...';
      let msg =
        'This will delete this lesson from\nyour device and cannot be undone.\nAre you sure about this?';
      this.idToDelete = id;
      this.offlineCToDelete = offlineContent;
      return this.alert.toggle(title, msg);
    } else {
      if (this._isMounted) this.setState({ dlding: true });
      let entity = await this.collectUrls();

      this.animateProgress(0);
      DeviceEventEmitter.emit('dldProgress', { id, val: 0 });
      try {
        if (this.resDldling) {
          let title = 'Hold your horses...';
          let msg =
            'This will delete this lesson from\nyour device and cannot be undone.\nAre you sure about this?';
          return this.alert.toggle(title, msg);
        }
        this.resDldling = true;
        if (entity.resources) {
          this.resources = entity.resources;
          await Promise.all(
            this.resources.map((r, i) => downloadRes(r, i, true, true))
          );
          delete this.resources;
        }
        delete this.resDldling;
      } catch (e) {
        return;
      }

      offlineContent[id] = {};
      offlineContent[id].entity = entity;
      offlineContent[id].entity.sizes = {};
      offlineContent[id].entity.progress = {};
      offlineContent[id].entity.dlding = true;
      offlineContent[id].entity.dldedFiles = [];
      offlineContent[id].entity.dldingFiles = [];
      try {
        offlineContent[id].comments = JSON.parse(
          JSON.stringify(this.props.additionalData.comments)
        );
      } catch (e) {}

      let urls = entity.urls;
      urls.map(u => {
        offlineContent[id].entity.sizes[u.key] = 0;
        offlineContent[id].entity.progress[u.key] = 0;
        offlineContent[id].entity.dldingFiles.push(u);
      });
      try {
        await RNFetchBlob.fs.writeFile(
          `${offPath}/offlineContent`,
          JSON.stringify(offlineContent),
          'utf8'
        );
        this.offlineContent = offlineContent;
        if (
          Object.values(offlineContent).filter(ocv => ocv.entity.dlding)
            .length === 1
        )
          this.bckgDld(offlineContent);
      } catch (e) {
        let title = '';
        try {
          title = `'${
            offlineContent[this.props.entity.id].entity.fields.filter(
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
        this.delete(offlineContent, this.props.entity.id);
      }
    }
  }

  async bckgDld(offlineContent, id) {
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

    id = id || this.props.entity.id;
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
          try {
            task.stop();
          } catch (e) {}
          this.delete(offlineContent, id);
          delete this.deletedDld;
          return;
        }
      })
      .progress(async p => {
        clearTimeout(this.enforceLowStorageAction);
        if (this.deletedDld) {
          task.pause();
          let { ocAfterDelete, deletedId } = await this.deletedDld;
          delete this.deletedDld;
          if (task.id.indexOf(deletedId) > -1) {
            try {
              task.stop();
            } catch (e) {}
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

        this.progress(totalProgress, id);

        this.enforceLowStorageAction = setTimeout(async () => {
          let freeSpace = isiOS
            ? await RNFetchBlob.fs.df().free
            : await RNFetchBlob.fs.df().internal_free;
          if (freeSpace < 500000000) {
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
            try {
              task.stop();
            } catch (e) {}
            this.delete(offlineContent, id);
            delete this.deletedDld;
            return;
          }
        }, 30000);
      })
      .done(async () => {
        if (this.deletedDld) {
          let { ocAfterDelete, deletedId } = await this.deletedDld;
          delete this.deletedDld;
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
        this.progress(totalProgress, id);

        if (offlineContent[id].entity.dldedFiles.indexOf(u.key) < 0)
          offlineContent[id].entity.dldedFiles.push(u.key);

        let newOfflineContent = JSON.parse(
          await RNFetchBlob.fs.readFile(`${offPath}/offlineContent`, 'utf8')
        );
        newOfflineContent[id] = offlineContent[id];
        this.replaceObjValByStringPath(newOfflineContent, u.pathToValue, u.key);
        if (
          u.pathToValue.indexOf(',lessons') > -1 &&
          u.pathToValue.indexOf('related_lessons') > -1
        ) {
          let lessonsIndex = u.pathToValue.indexOf(',lessons') + 8;
          let relatedIndex = u.pathToValue.indexOf('related_lessons');
          let ptv = u.pathToValue;
          ptv = ptv
            .replace(ptv.slice(lessonsIndex, relatedIndex), '')
            .replace('related_lessons', '');
          this.replaceObjValByStringPath(newOfflineContent, ptv, u.key);
        }

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
          if (this._isMounted)
            this.setState({ dlding: false, entityExists: true });

          try {
            await RNFetchBlob.fs.writeFile(
              `${offPath}/offlineContent`,
              JSON.stringify(newOfflineContent),
              'utf8'
            );
            this.offlineContent = newOfflineContent;
            DeviceEventEmitter.emit('dldProgress', {
              id: this.props.entity.id,
              val: undefined
            });
            DeviceEventEmitter.removeListener(
              'dldProgress',
              this.percentageListener.bind(this)
            );
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
            delete this.deletedDld;
            return;
          }
        }
        try {
          await RNFetchBlob.fs.writeFile(
            `${offPath}/offlineContent`,
            JSON.stringify(newOfflineContent),
            'utf8'
          );
          this.offlineContent = newOfflineContent;
          newOfflineContent[id].entity.dldingFiles.splice(0, 1);
          this.bckgDld(newOfflineContent, id);
        } catch (e) {
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
          delete this.deletedDld;
          return;
        }
      })
      .error(async () => {
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
        delete this.deletedDld;
        return;
      });
  }

  async delete(offlineContent, id, keepFiles) {
    if (this.resDldling) {
      this.animateProgress(0);
      DeviceEventEmitter.emit('dldProgress', { id, val: undefined });
      if (this._isMounted)
        this.setState({ dlding: false, entityExists: false });
      if (this.resources)
        this.resources.map((r, i) => downloadRes(null, i, null, null, true));
      delete this.resources;
      delete this.resDldling;
      return;
    }

    return (this.deletedDld = new Promise(async resolve => {
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
        this.offlineContent = offlineContent;
      } catch (e) {}

      this.animateProgress(0);
      DeviceEventEmitter.emit('dldProgress', { id, val: undefined });
      if (this._isMounted)
        this.setState({ dlding: false, entityExists: false });

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
      try {
        let existingDld = (
          await RNBackgroundDownloader.checkForExistingDownloads()
        )[0];
        existingDld.id.includes(id) && existingDld?.stop();
      } catch (e) {}
      resolve({ ocAfterDelete: offlineContent, deletedId: id });
    }));
  }

  collectMp3Url(entity, urls) {
    try {
      entity.mp3s.map(mp3 => {
        if (!urls.filter(u => u.value === mp3.value).length)
          urls.push({
            value: mp3.value,
            pathToValue: `${entity.id},entity,mp3s,{${mp3.id}},value`,
            key: `${entity.id}${mp3.key}${this.getExtension(mp3.value)}`
          });
      });
    } catch (e) {}
  }

  collectVideoUrl(entity, urls, isLesson) {
    try {
      let selectedVideo = entity.video_playback_endpoints.filter(
        vpe => vpe.height == 720
      )[0];
      if (!selectedVideo) selectedVideo = entity.video_playback_endpoints[0];
      if (!urls.filter(u => u.value === selectedVideo.file).length)
        urls.push({
          value: selectedVideo.file,
          key: `${entity.parent_id || ''}${entity.id}Video${
            selectedVideo.height
          }${this.getExtension(selectedVideo.file)}`,
          pathToValue:
            isLesson === undefined
              ? `${entity.id},entity,video_playback_endpoints,0,file`
              : `${entity.parent_id},entity,lessons,{${isLesson}},video_playback_endpoints,0,file`
        });
      entity.video_playback_endpoints = [selectedVideo];
    } catch (e) {}
  }

  collectHeadShotPic(entity, urls) {
    try {
      entity.fields.map(f => {
        if (f.key === 'instructor') {
          f.value.data.map(d => {
            if (
              d.key === 'head_shot_picture_url' &&
              !urls.filter(u => u.value === d.value).length
            ) {
              urls.push({
                value: d.value,
                key: `${entity.id}${d.id}${this.getExtension(d.value)}`,
                pathToValue: `${entity.id},entity,fields,{${f.id}},value,data,{${d.id}},value`
              });
            }
          });
        }
      });
    } catch (e) {}
  }

  collectThumbnailUrl(entity, urls, isLesson) {
    try {
      entity.data.map(d => {
        if (
          d.key === 'thumbnail_url' &&
          !urls.filter(u => u.value === d.value).length
        )
          urls.push({
            value: `https://cdn.musora.com/image/fetch/fl_lossy,q_auto:eco,c_thumb,w_${
              halfGreaterWDim >> 0
            },ar_${16 / 9}/${d.value}`,
            key: `${entity.parent_id || ''}${entity.id}${
              d.id
            }${this.getExtension(d.value)}`,
            pathToValue:
              isLesson === undefined
                ? `${entity.id},entity,data,{${d.id}},value`
                : `${entity.parent_id},entity,lessons,{${isLesson}},data,{${d.id}},value`
          });
      });
    } catch (e) {}
  }

  collectAssignmentUrl(entity, urls, isLesson) {
    try {
      entity.assignments.map(a =>
        a.data.map(d => {
          if (
            d.value.indexOf('http') >= 0 &&
            !urls.filter(u => u.value === d.value).length
          )
            urls.push({
              value: d.value,
              key: `${entity.parent_id || ''}${entity.id}${
                d.id
              }${this.getExtension(d.value)}`,
              pathToValue:
                isLesson === undefined
                  ? `${entity.id},entity,assignments,{${a.id}},data,{${d.id}},value`
                  : `${entity.parent_id},entity,lessons,{${isLesson}},assignments,{${a.id}},data,{${d.id}},value`
            });
        })
      );
    } catch (e) {}
  }

  collectRelatedLessUrl(entity, urls, isLesson) {
    entity.related_lessons?.map(rl => {
      try {
        let tId;
        let thumbnail = rl.data.filter(d => {
          if (d.key === 'thumbnail_url') {
            tId = d.id;
            return true;
          }
        })[0];
        if (!urls.filter(u => u.value === thumbnail.value).length)
          urls.push({
            value: thumbnail.value,
            key: `${entity.parent_id || ''}${entity.id}${
              thumbnail.id
            }${this.getExtension(thumbnail.value)}`,
            pathToValue:
              isLesson === undefined
                ? `${entity.id},entity,related_lessons,{${rl.id}},data,{${tId}},value`
                : `${entity.parent_id},entity,lessons,{${isLesson}},related_lessons,{${rl.id}},data,{${tId}},value`
          });
      } catch (e) {}
    });
  }

  collectCommProfileImgUrl(entity, urls, isLesson) {
    let comments = entity.comments;
    try {
      comments.map(c => {
        if (
          !urls.filter(
            u => u.value === c.user['fields.profile_picture_image_url']
          ).length
        )
          urls.push({
            value: c.user['fields.profile_picture_image_url'],
            key: `${this.props.entity.id}${c.id}${this.getExtension(
              c.user['fields.profile_picture_image_url']
            )}`,
            pathToValue:
              isLesson === undefined
                ? `${this.props.entity.id},comments,{${c.id}},user,fields.profile_picture_image_url`
                : `${this.props.entity.id},entity,lessons,{${isLesson}},comments,{${c.id}},user,fields.profile_picture_image_url`
          });
      });
    } catch (e) {}
  }

  progress(progress, id) {
    DeviceEventEmitter.emit('dldProgress', { id, val: progress });
    if (this._isMounted) this.animateProgress(progress);
  }

  getExtension(name) {
    if (name.indexOf('.svg') >= 0) return '.svg';
    if (name.indexOf('.png') >= 0) return '.png';
    if (name.indexOf('.jpg') >= 0) return '.jpg';
    if (name.indexOf('.mp4') >= 0) return '.mp4';
    if (name.indexOf('.mp3') >= 0) return '.mp3';
    if (name.indexOf('.pdf') >= 0) return '.pdf';
    if (name.indexOf('.jpeg') >= 0) return '.jpeg';
    return '.jpg';
  }

  filterVideosByResolution(videos) {
    return videos
      .filter(v => {
        return v.height <= windowWidth * PixelRatio.get();
      })
      .sort((a, b) => {
        return a.height < b.height ? 1 : -1;
      });
  }

  animateProgress(percentage) {
    Animated.timing(this.state.percentage, {
      duration: 500,
      toValue: percentage * this.state.dldWidth
    }).start();
  }

  replaceObjValByStringPath(obj, strPath, newVal) {
    let arrPath = strPath.split(',');
    let val;
    arrPath.map(async (ap, i) => {
      if (!val) {
        val = obj[ap];
      } else if (i === arrPath.length - 1) {
        val[ap] = isiOS ? newVal : `file:///${newVal}`;
        if (!isiOS && val[ap].indexOf('.svg') > -1)
          val[ap] = `data:image/svg+xml;utf8,${await RNFetchBlob.fs.readFile(
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
  }

  render() {
    return (
      <React.Fragment>
        <TouchableOpacity
          style={[styles.underCompleteTOpacities, this.props.parentStyle]}
          onPress={this.download}
        >
          {this.state.dlding && (
            <View
              style={{ alignItems: 'center' }}
              onLayout={e => {
                if (this._isMounted && this.props.noText)
                  this.setState({ dldWidth: e.nativeEvent.layout.width });
              }}
            >
              {stopDownload({ width: 25, height: 25, fill: 'red' })}

              {!this.props.noText && (
                <Text
                  maxFontSizeMultiplier={this.props.maxFontMultiplier}
                  style={{
                    color: 'red',
                    fontSize: 10,
                    marginTop: 5,
                    color: '#ffffff',
                    fontFamily: 'OpenSans-Regular'
                  }}
                  onLayout={e => {
                    if (this._isMounted)
                      this.setState({ dldWidth: e.nativeEvent.layout.width });
                  }}
                >
                  Downloading
                </Text>
              )}
              <View
                style={{
                  height: 2,
                  backgroundColor: 'grey',
                  width: this.state.dldWidth,
                  marginTop: 3
                }}
              >
                <Animated.View
                  style={{
                    width: this.state.percentage,
                    backgroundColor: 'red',
                    flex: 1
                  }}
                />
              </View>
            </View>
          )}
          {!this.state.dlding && this.state.entityExists && (
            <View style={{ alignItems: 'center' }}>
              {trash({
                height: 25,
                width: 25,
                fill: this.props.iconColor || 'white'
              })}

              {!this.props.noText && (
                <Text
                  maxFontSizeMultiplier={this.props.maxFontMultiplier}
                  style={{
                    fontSize: 10,
                    marginTop: 5,
                    color: '#ffffff',
                    fontFamily: 'OpenSans-Regular',
                    color: this.props.textColor || 'white'
                  }}
                >
                  Downloaded
                </Text>
              )}
            </View>
          )}
          {!this.state.dlding && !this.state.entityExists && (
            <View style={{ alignItems: 'center' }}>
              {download({
                height: 25,
                width: 25,
                fill: this.props.iconColor || 'white'
              })}

              {!this.props.noText && (
                <Text
                  maxFontSizeMultiplier={this.props.maxFontMultiplier}
                  style={{
                    fontSize: 10,
                    marginTop: 5,
                    color: '#ffffff',
                    fontFamily: 'OpenSans-Regular',
                    color: this.props.textColor || 'white'
                  }}
                >
                  Download
                </Text>
              )}
            </View>
          )}
        </TouchableOpacity>
        <AnimatedCustomAlert
          ref={r => (this.alert = r)}
          onDelete={() => {
            this.delete(this.offlineCToDelete, this.idToDelete);
            delete this.idToDelete;
            delete this.offlineCToDelete;
            this.alert.toggle();
          }}
        />
      </React.Fragment>
    );
  }
}

export const getOfflineContent = async offPath => {
  offPath =
    offPath || isiOS
      ? RNFetchBlob.fs.dirs.LibraryDir
      : RNFetchBlob.fs.dirs.DocumentDir;
  let downloads = [];
  try {
    let offlineContent = JSON.parse(
      await RNFetchBlob.fs.readFile(`${offPath}/offlineContent`, 'utf8')
    );
    Object.keys(offlineContent).map(key => downloads.push(offlineContent[key]));
  } catch (e) {}
  return downloads;
};

export const handleDownloads = async () => {
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
      dldingId = Object.values(offlineContent).filter(ocv => ocv.entity.dlding);
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
          task.stop();
          this.delete(offlineContent, dldingId);
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
        progress[existingDld.id] = p;
        sizes[existingDld.id] = existingDld.totalBytes;
        if (
          offlineContent[dldingId].entity.dldedFiles.indexOf(existingDld.id) < 0
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
            task.stop();
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
          offlineContent[dldingId].entity.dldedFiles.indexOf(existingDld.id) < 0
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

const styles = StyleSheet.create({
  underCompleteTOpacities: {
    alignItems: 'center'
  }
});
