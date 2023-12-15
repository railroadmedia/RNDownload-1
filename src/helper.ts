import { Dimensions, PixelRatio, Platform } from 'react-native';

const DEVICE_HEIGHT = Dimensions.get('screen').height;
const DEVICE_WIDTH = Dimensions.get('screen').width;

export const WINDOW_WIDTH = DEVICE_WIDTH < DEVICE_HEIGHT ? DEVICE_WIDTH : DEVICE_HEIGHT;

export const pixR = PixelRatio.get();

export const IS_IOS = Platform.OS === 'ios';

export const FONT_MULTIPLIER = DEVICE_WIDTH < 375 ? 1 : DEVICE_WIDTH < 1024 ? 1.35 : 1.8;
