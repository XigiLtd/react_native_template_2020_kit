import * as React from 'react';
import {
  Text as ReactText,
  StyleSheet,
  Platform,
  StyleProp,
} from 'react-native';
import colors from '../styles/colors';
import fonts, { fontTypes } from '../styles/fonts';

export interface TextStyleProp {
  color?: string;
  fontSize?: number;
  fontFamily?: fontTypes;
}

export interface ITextProps {
  style?: StyleProp<TextStyleProp>;
  text?: string;
}

export class Text extends React.Component<ITextProps> {
  styles = StyleSheet.create({
    text: {
      fontFamily: fonts.medium,
      color: colors.grey,
      marginBottom: 16,
      ...Platform.select({
        ios: {
          fontSize: 12,
          lineHeight: 16,
        },
        android: {
          fontSize: 12,
          lineHeight: 16,
        },
        default: {
          fontSize: 14,
          lineHeight: 18,
        },
      }),
    },
  });

  render() {
    let txt = this.props.children || this.props.text;
    return (
      <ReactText style={[this.styles.text, this.props.style]}>{txt}</ReactText>
    );
  }
}

export default Text;
