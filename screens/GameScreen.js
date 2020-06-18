import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { generateRandomBetween } from '../utils/generateRandomBetween';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import colors from '../constants/colors';

const GameScreen = ({ userChoice }) => {
  const [computerGuess, setComputerGuess] = useState(generateRandomBetween(1, 100, userChoice));

  // These refs are stored detached from the component; won't be rerendered with the component => values will persist
  // Numbers passed into useRef() are initial values. They are updated below. 
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = direction => {
    if ((direction === 'lower' && computerGuess < userChoice) || (direction === 'greater' && computerGuess > userChoice)) {
      Alert.alert('Be honest!', 'Please select the correct hint.', [
        {text: 'Sorry!', style: 'cancel'}
      ]);
      return;
    }
    // If guess is too high, then it should become the upper boundary of possible range. Set the current high equal to the current guess.
    if (direction === 'lower') {
      currentHigh.current = computerGuess;
    } else {
      currentLow.current = computerGuess;
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, computerGuess);
    setComputerGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>Opponent's Guess:</Text>
        <NumberContainer style={styles.number}>{computerGuess}</NumberContainer>
      </Card>
      <Card style={styles.buttonContainer}>
        <Button title="Go Lower" onPress={() => nextGuessHandler('lower')} />
        <Button title="Go Higher" onPress={() => nextGuessHandler('greater')} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    maxWidth: '80%',
    marginTop: 10
  },
  card: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 170,
    width: 225,
    maxWidth: '80%',
    marginVertical: 20
  }
});

export default GameScreen;
