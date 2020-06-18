import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Alert 
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!', 
        'Choose a number between 1 and 99.' ,
        [{
          text: 'Okay', 
          style: 'destructive', 
          onPress: resetInputHandler
        }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
  };

  const confirmedOutput = confirmed ? (
    <Card style={styles.outputContainer}>
      <Text style={fonts.bodyText}>Chosen Number:</Text>
      <NumberContainer style={styles.chosenNumber}>{selectedNumber}</NumberContainer>
      <Button title="Start Game" onPress={() => onStartGame(selectedNumber)} />
    </Card>
    ) : null

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.screen}>
        <View style={styles.titleContainer}>
          <Text style={fonts.title}>Start a New Game!</Text>
        </View>
        <Card style={styles.inputContainer}>
          <Text>Enter a Number</Text>
          <Input 
            style={styles.input} 
            maxLength={2} 
            blurOnSubmit 
            keyboardType="number-pad" 
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button 
                title="Reset" 
                onPress={resetInputHandler} 
                color={colors.secondary} 
              />
            </View>
            <View style={styles.button}>
              <Button 
                title="Confirm" 
                onPress={confirmInputHandler} 
                color={colors.primary} 
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginBottom: 80
  },
  titleContainer: {
    marginVertical: 10,
    flex: 1  
  },
  input: {
    width: 55,
    textAlign: 'center',
    padding: 5,
    fontSize: 16,
    color: colors.primary
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: '40%'
  },
  outputContainer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    marginBottom: 40,
    width: '50%'
  }
});

export default StartGameScreen;
