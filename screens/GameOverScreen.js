import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Card from '../components/Card';
import fonts from '../constants/fonts';

const GameOverScreen = ({ guessRounds, userChoice, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={fonts.title}>Game Over</Text>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/success.png')} 
          style={styles.image}
          resizeMode="cover"
        />
      </View>
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
  },
  imageContainer: {
    width: 300,
    height: 300,
    marginVertical: 30,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default GameOverScreen;
