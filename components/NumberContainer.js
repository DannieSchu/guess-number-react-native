import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NumberContainer = ({ style, children }) => {
  return (
    <View style={{...styles.container, ...style}}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default NumberContainer;
