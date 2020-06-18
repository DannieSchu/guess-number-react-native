import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import fonts from '../constants/fonts';

const GameOverScreen = ({ guessRounds, userChoice, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={fonts.title}>Game Over</Text>
      <Card>
        <Text style={fonts.bodyText}>Number of Rounds: {guessRounds}</Text>
      </Card>
      <Card>
        <Text style={fonts.bodyText}>Correct Number: {userChoice}</Text>
      </Card>
      <Button title="Play Again" onPress={onNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
