import * as React from 'react';
import { StyleProp, StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import type { HeadingStyleProp } from './dto/headingStyleProp';
import type { HeadTypes } from './dto/headTypes';

export interface IHeadingProps {
  type: HeadTypes;
  text?: string;
  style?: StyleProp<HeadingStyleProp>;
}

export class Heading extends React.Component<IHeadingProps> {
  styles = StyleSheet.create({
    h1: {
      alignSelf: 'center',
      alignItems: 'center',
      fontFamily: fonts.black,
      fontSize: 24,
      lineHeight: 30,
      color: colors.darkBlue,
      marginBottom: 16,
    },
    h2: {
      alignSelf: 'center',
      alignItems: 'center',
      fontFamily: fonts.bold,
      fontSize: 20,
      lineHeight: 24,
      color: colors.darkBlue,
      marginBottom: 16,
    },
  });

  render() {
    let _style = {};
    switch (this.props.type) {
      case 'h2': {
        _style = this.styles.h2;
        break;
      }
      default: {
        _style = this.styles.h1;
        break;
      }
    }

    let txt = this.props.children || this.props.text;
    return <Text style={[_style, this.props.style || {}]}>{txt}</Text>;
  }
}

export default Heading;
