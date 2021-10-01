import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

declare module 'RNDownload' {
  interface Comment {
    comment: string;
    created_on: string;
    id: number;
    user_id: number;
    is_liked: boolean;
    like_count: number;
    replies: Comment[];
    user: {
      display_name: string;
      'fields.profile_picture_image_url': string;
      xp: string;
      xp_level: string;
    };
  }

  interface DownloadProps {
    entity: {
      id: number;
      comments?: Comment[];
      content: Promise<{}>;
    };
    styles: {
      touchable: StyleProp<ViewStyle>;
      iconDownloadColor: string;
      activityIndicatorColor: string;
      animatedProgressBackground: string;
      textStatus: StyleProp<ViewStyle>;
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
  }

  export interface Resource {
    extension: string;
    resource_id: number;
    resource_name: string;
    resource_url: string;
  }

  interface DownloadResourcesProps {
    resources: Resource[];
    lessonTitle: string;
    styles: {
      container?: StyleProp<any>;
      touchableTextResourceNameFontFamily: string;
      touchableTextResourceExtensionFontFamily: string;
      touchableTextResourceCancelFontFamily: string;
      borderColor?: string;
      color?: string;
    };
    onClose: () => void;
  }

  class Download_V2 extends React.Component<DownloadProps, {}> {}

  class DownloadResources extends React.Component<DownloadResourcesProps, {}> {}

  export { Download_V2, DownloadResources };
}
