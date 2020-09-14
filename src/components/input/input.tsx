import * as React from 'react';
import { Platform, View, TextInput, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Text } from '../text';

export interface IInputProps {
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: any) => void;
}

export class Input extends React.Component<IInputProps> {
  state = {
    val: '',
    errorMessage: '',
  };

  styles = StyleSheet.create({
    container: {
      marginBottom: 12,
    },
    inputContainer: {
      height: 52,
      backgroundColor: colors.white,
      borderStyle: 'solid',
      borderColor: colors.middleGrey,
      borderWidth: 2,
      borderRadius: 3,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 8,
      paddingTop: 8,
      ...Platform.select({
        ios: {
          minWidth: 260,
        },
        android: {
          minWidth: 260,
        },
        default: {
          minWidth: 320,
        },
      }),
    },
    input: {
      fontFamily: fonts.medium,
      fontSize: 14,
      lineHeight: 20,
      color: colors.darkGrey,
    },
  });

  onChange = (txt: string) => {
    this.setState(
      {
        val: txt,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(txt);
        }
      }
    );
  };

  render() {
    return (
      <View style={this.styles.container}>
        <View style={this.styles.inputContainer}>
          <Text>{this.props.placeholder}</Text>
          <TextInput
            placeholder={this.props.placeholder}
            style={this.styles.input}
            onChangeText={(text) => this.onChange(text)}
            value={this.state.val}
          />
        </View>
        {this.state.errorMessage && (
          <Text style={{ color: colors.lime }}>this.state.errorMessage</Text>
        )}
      </View>
    );
  }
}

export default Input;
