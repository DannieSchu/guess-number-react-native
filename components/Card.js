import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Card = ({ children, style }) => {
  return (
    // override existing styles with incoming styles
    <View style={{...styles.card, ...style}}>{children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    // 'shadows...' properties only work on iOS
    shadowColor: colors.neutral,
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
