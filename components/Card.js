import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, style }) => {
  return (
    // override existing styles with incoming styles
    <View style={{...styles.card, ...style}}>{children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    // 'shadows...' properties only work on iOS
    shadowColor: '#A8A8A8',
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    // 'elevation' property creates shadow for android
    elevation: 5
  }
});

export default Card;
