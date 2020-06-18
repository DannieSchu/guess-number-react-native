import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { generateRandomBetween } from '../utils/generateRandomBetween';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import colors from '../constants/colors';

const GameScreen = ({ userChoice }) => {
  const [computerGuess, setComputerGuess] = useState(generateRandomBetween(1, 100, userChoice));

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>Opponent's Guess:</Text>
        <NumberContainer style={styles.number}>{computerGuess}</NumberContainer>
      </Card>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => {}} />
        <Button title="Greater" onPress={() => {}} />
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
    width: 200,
    maxWidth: '60%',
    marginVertical: 20
  }
});

export default GameScreen;
