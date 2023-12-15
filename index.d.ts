import Download_V2, {
  addDownloadEventListener,
  resumeAll,
  offlineContent,
} from './src/components/Download_V2';
import DownloadResources from './src/components/DownloadResources';
import { downloadRes } from './src/components/downloadRes';
import { IOfflineContent, IDownloading } from './src/entity';

declare module 'RNDownload' {
  export {
    Download_V2,
    DownloadResources,
    offlineContent,
    downloadRes,
    resumeAll,
    addDownloadEventListener,
    IOfflineContent,
    IDownloading,
  };
}
