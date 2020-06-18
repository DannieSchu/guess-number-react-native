import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
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
    padding: 15,
    borderRadius: 10,
    // shadow properties only work on iOS
    shadowColor: '#ccc',
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    // creates shadow for android
    elevation: 5
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    marginVertical: 20,
    width: 40,
    height: 40
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});

export default StartGameScreen;
