import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  StyleProp,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Text from '../text';
import type TextStyleProp from '../text/dto/textStyleProp';
import type { ButtonStyleProp } from './dto/buttonSytelProp';

export interface IButtonProps {
  onClick: () => void;
  text?: string;
  disabled?: boolean;
  inverse?: boolean;
  buttonStyle?: StyleProp<ButtonStyleProp>;
  textStyle?: StyleProp<TextStyleProp>;
}

export class Button extends React.Component<IButtonProps> {
  styles = StyleSheet.create({
    button: {
      alignSelf: 'flex-end',
      alignItems: 'center',
      backgroundColor: this.props.inverse ? colors.white : colors.blue,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 8,
      marginBottom: 10,
      borderStyle: 'solid',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: this.props.inverse ? colors.blue : colors.white,
      ...Platform.select({
        ios: {
          minWidth: 260,
          maxWidth: 320,
        },
        android: {
          minWidth: 280,
          maxWidth: 320,
        },
        default: {
          minWidth: 300,
          maxWidth: 320,
        },
      }),
    },
    text: {
      color: this.props.inverse ? colors.blue : colors.white,
      fontSize: 14,
      fontFamily: fonts.bold,
    },
  });

  onPress = () => {
    this.props.onClick();
  };

  render() {
    let txt = this.props.children || this.props.text;

    let txtStyle = Object.assign(this.styles.text, this.props.textStyle);

    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={[this.styles.button, this.props.buttonStyle]}
      >
        <Text style={txtStyle}>{txt}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
