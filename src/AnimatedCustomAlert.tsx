/* props: maxFontMultiplier */

import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import {
  View,
  Text,
  Modal,
  Animated,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DeviceInfo from 'react-native-device-info';
import { FONT_MULTIPLIER } from './helper';

interface IAnimatedCustomAlert {
  onClose?: () => void;
  onDelete?: () => void;
  styles: { [key: string]: any };
}

const AnimatedCustomAlert = forwardRef<{ toggle: () => void }, IAnimatedCustomAlert>(
  (props, ref) => {
    const { onClose, onDelete, styles: propStyle } = props;
    console.log('prros-> ', propStyle);

    const [visible, setVisible] = useState(false);
    const title = useRef<string | undefined>('');
    const message = useRef<string | undefined>('');
    const opacity = useRef(new Animated.Value(0));

    useImperativeHandle(ref, () => ({
      toggle,
    }));

    const toggle = (titleText?: string, messageText?: string) => {
      title.current = titleText;
      message.current = messageText;
      if (visible) {
        onClose?.();
      }
      setVisible(!visible);
    };

    const animate = () => {
      Animated.timing(opacity.current, {
        duration: 250,
        useNativeDriver: true,
        toValue: visible ? 1 : 0,
      }).start();
    };

    return (
      <Modal
        testID='modal'
        transparent={true}
        onShow={animate}
        visible={visible}
        onRequestClose={() => toggle()}
        supportedOrientations={['portrait', 'landscape']}
      >
        <LinearGradient
          style={styles.lgradient}
          colors={['rgba(0, 12, 23, 0.69)', 'rgba(0, 12, 23, 1)']}
        />
        <SafeAreaView testID='modalBackground' style={styles.modalBackground}>
          <Animated.View
            style={[
              styles.animatedView,
              {
                marginHorizontal: 10,
                opacity: opacity.current,
                backgroundColor: propStyle?.alertBackground || 'white',
              },
            ]}
          >
            <View style={DeviceInfo.isTablet() && { height: '10%' }} />
            <View style={styles.msgContainer}>
              <Text
                maxFontSizeMultiplier={FONT_MULTIPLIER}
                testID='alertTitle'
                style={{
                  fontSize: 24,
                  textAlign: 'center',
                  fontFamily: propStyle?.alertTextTitleFontFamily,
                  color: propStyle?.alertTextTitleColor || 'black',
                }}
              >
                {title.current}
              </Text>
              <Text
                maxFontSizeMultiplier={FONT_MULTIPLIER}
                testID='alertMessage'
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                  paddingVertical: 10,
                  fontFamily: propStyle?.alertTextMessageFontFamily,
                  color: propStyle?.alertTextMessageColor || 'black',
                }}
              >
                {message.current}
              </Text>
              <TouchableOpacity
                testID='deleteBtn'
                onPress={onDelete}
                style={[
                  styles.deleteBtn,
                  {
                    borderColor: propStyle?.alertTouchableDeleteBorderColor || 'transparent',
                    backgroundColor: propStyle?.alertTouchableDeleteBackground || 'white',
                  },
                ]}
              >
                <Text
                  maxFontSizeMultiplier={FONT_MULTIPLIER}
                  style={[
                    styles.deleteBtnText,
                    {
                      color: propStyle?.alertTouchableTextDeleteColor || 'black',
                      fontFamily: propStyle?.alertTouchableTextDeleteFontFamily,
                    },
                  ]}
                >
                  {'DELETE'}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity testID='cancelBtn' onPress={() => toggle()}>
              <Text
                maxFontSizeMultiplier={FONT_MULTIPLIER}
                style={[
                  styles.cancelBtnText,
                  {
                    color: propStyle?.alertTouchableTextCancelColor || 'black',
                    fontFamily: propStyle?.alertTouchableTextCancelFontFamily,
                  },
                ]}
              >
                {'Cancel'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </SafeAreaView>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
  },
  lgradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 0,
  },
  animatedView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  msgContainer: {
    alignSelf: 'center',
    paddingHorizontal: '10%',
  },
  deleteBtn: {
    width: 200,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  deleteBtnText: {
    padding: 8,
    fontSize: 18,
    textAlign: 'center',
  },
  cancelBtnText: {
    fontSize: 18,
    padding: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default AnimatedCustomAlert;
