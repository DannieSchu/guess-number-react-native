import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput style={styles.input} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color="sandybrown" />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color="#f7287b" />
          </View>
        </View>
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
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  input: {
    width: 50,
    height: 50,
    padding: 5,
    marginVertical: 20,
    textAlign: 'center',
    backgroundColor: '#A8A8A8',
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: '40%'
  }
});

export default StartGameScreen;
