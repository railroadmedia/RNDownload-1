/* props: maxFontMultiplier */

import React from 'react';
import {
  View,
  Text,
  Modal,
  Animated,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DeviceInfo from 'react-native-device-info';

export default class AnimatedCustomAlert extends React.PureComponent {
  state = {
    visible: false,
    opacity: new Animated.Value(0)
  };

  toggle = (title, message) => {
    this.title = title;
    this.message = message;
    if (this.state.visible) this.props.onClose?.();
    this.setState(state => ({ visible: !state.visible }));
  };

  animate = () => {
    Animated.timing(this.state.opacity, {
      duration: 250,
      useNativeDriver: true,
      toValue: this.state.visible ? 1 : 0
    }).start();
  };

  render() {
    const { styles: propStyle } = this.props;
    return (
      <Modal
        testID='modal'
        transparent={true}
        onShow={this.animate}
        visible={this.state.visible}
        onRequestClose={this.toggle}
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
                opacity: this.state.opacity,
                backgroundColor: propStyle?.background || 'white'
              }
            ]}
          >
            <View style={DeviceInfo.isTablet() && { height: '10%' }} />
            <View style={styles.msgContainer}>
              <Text
                maxFontSizeMultiplier={this.props.maxFontMultiplier}
                testID='alertTitle'
                style={{
                  fontSize: 24,
                  textAlign: 'center',
                  fontFamily: propStyle?.textTitleFontFamily,
                  color: propStyle?.textTitleColor || 'black'
                }}
              >
                {this.title}
              </Text>
              <Text
                maxFontSizeMultiplier={this.props.maxFontMultiplier}
                testID='alertMessage'
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                  paddingVertical: 10,
                  fontFamily: propStyle?.textMessageFontFamily,
                  color: propStyle?.textMessageColor || 'black'
                }}
              >
                {this.message}
              </Text>
              <TouchableOpacity
                testID='deleteBtn'
                onPress={this.props.onDelete}
                style={{
                  width: 200,
                  marginTop: 10,
                  borderWidth: 2,
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderColor: propStyle?.touchableDeleteBorderColor || 'black',
                  backgroundColor:
                    propStyle?.touchableDeleteBackground || 'white'
                }}
              >
                <Text
                  maxFontSizeMultiplier={this.props.maxFontMultiplier}
                  style={{
                    padding: 8,
                    fontSize: 18,
                    textAlign: 'center',
                    color: propStyle?.touchableTextDeleteColor || 'black',
                    fontFamily: propStyle?.touchableTextDeleteFontFamily
                  }}
                >
                  DELETE
                </Text>
              </TouchableOpacity>
              {this.props.additionalBtn}
              {this.props.additionalTextBtn}
            </View>
            <TouchableOpacity testID='cancelBtn' onPress={this.toggle}>
              <Text
                maxFontSizeMultiplier={this.props.maxFontMultiplier}
                style={{
                  fontSize: 18,
                  padding: 10,
                  alignSelf: 'center',
                  textAlign: 'center',
                  color: propStyle?.touchableTextCancelColor || 'black',
                  fontFamily: propStyle?.touchableTextCancelFontFamily
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </SafeAreaView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1
  },
  lgradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 0
  },
  animatedView: {
    flex: 1,
    justifyContent: 'space-between'
  },
  msgContainer: {
    alignSelf: 'center',
    paddingHorizontal: '10%'
  }
});
