/* props: maxFontMultiplier */

import React from 'react';
import {
  Text,
  Modal,
  Animated,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

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
        <TouchableOpacity
          onPress={this.toggle}
          testID='modalBackground'
          style={styles.modalBackground}
        >
          <Animated.View
            style={[
              styles.animatedView,
              {
                marginHorizontal: 50,
                opacity: this.state.opacity,
                backgroundColor: propStyle?.background || 'white'
              }
            ]}
          >
            <Text
              maxFontSizeMultiplier={this.props.maxFontMultiplier}
              testID='alertTitle'
              style={{
                fontSize: 20,
                textAlign: 'center',
                paddingVertical: 10,
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
                fontSize: 14,
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
                minHeight: 46,
                marginTop: 10,
                borderWidth: 2,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: propStyle?.touchableDeleteBorderColor || 'black',
                backgroundColor: propStyle?.touchableDeleteBackground || 'white'
              }}
            >
              <Text
                maxFontSizeMultiplier={this.props.maxFontMultiplier}
                style={{
                  padding: 15,
                  fontSize: 15,
                  textAlign: 'center',
                  color: propStyle?.touchableTextDeleteColor || 'black',
                  fontFamily: propStyle?.touchableTextDeleteFontFamily
                }}
              >
                DELETE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity testID='cancelBtn' onPress={this.toggle}>
              <Text
                maxFontSizeMultiplier={this.props.maxFontMultiplier}
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  textAlign: 'center',
                  color: propStyle?.touchableTextCancelColor || 'black',
                  fontFamily: propStyle?.touchableTextCancelFontFamily
                }}
              >
                CANCEL
              </Text>
            </TouchableOpacity>
            {this.props.additionalBtn}
            {this.props.additionalTextBtn}
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  animatedView: {
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    margin: 5
  }
});
