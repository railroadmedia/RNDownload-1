# RNDownload
Download functionality, based on [react-native-background-downloader](https://github.com/railroadmedia/react-native-background-downloader.git#2.3.4.1). All downloads are serial because of some issues on iOS with parallel download.
## List of changes:
* Styles
* Progress event
* Network handling
* Wrapped resume functionality
* Custom download button with progress
* Whole lesson download (text, media, resources, comments)
## Libraries used
* [react-native-blob-util](https://github.com/RonRadtke/react-native-blob-util)
* [react-native-svg](https://github.com/react-native-community/react-native-svg)
* [@react-native-community/netinfo](https://github.com/react-native-community/react-native-netinfo)
## Installation
```
npm i --save https://github.com/bogdan-vol/RNDownload.git
```
Add podspecs to your Podfile then ```pod install```

Inside ```AppDelegate.m```:
```
...
#import <RNBackgroundDownloader.h>
...
- (void)application:(UIApplication *)application handleEventsForBackgroundURLSession:(NSString *)identifier completionHandler:(void (^)(void))completionHandler
{
  [RNBackgroundDownloader setCompletionHandlerWithIdentifier:identifier completionHandler:completionHandler];
}
...
```
## Props
### Download
Prop | Type | Required | Description
-----|------|----------|------------
iconColor | string | no | download button icon color (default white)
textColor | string | no | download button text color (default white)
entity | object | yes | the entity from which the library automatically extracts downloadable content (images, media etc) and plain text and downloads them
additionalData | object | no | additional data to be downloaded (used for comments; to be changed in the future and moved into entity)
parentStyle | object | no | touchable area style
downloadExtendedEntity | func | no | extended entity used when downloading an entire course with special endpoint that gets all videos for all lessons (see mocks in [index.js](https://github.com/bogdan-vol/RNDownload/blob/master/index.js))

### DownloadResources
Prop | Type | Required | Description
-----|------|----------|------------
resources | object | yes | resources to be downloaded
## EVENTS
### Progress event
```
import Download from 'RNDownload';
...
Download.addProgressListener(({id, val}) => {
  //id is the downloading task id
  //val is the value in percentage of the download progress
})
```

