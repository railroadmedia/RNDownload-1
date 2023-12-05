import { Dimensions, PixelRatio, Platform } from 'react-native';

let { width, height } = Dimensions.get('screen');
width = width < height ? width : height;

export const pixR = PixelRatio.get();

export const isiOS = Platform.OS === 'ios';

export const FONT_MULTIPLIER = width < 375 ? 1 : width < 1024 ? 1.35 : 1.8;
