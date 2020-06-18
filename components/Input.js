import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Input = props => {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}}></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: colors.neutral,
    borderBottomWidth: 2,
    marginVertical: 15
  }
});

export default Input;
