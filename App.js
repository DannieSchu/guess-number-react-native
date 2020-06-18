import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  // return this promise to wait for it to resolve before continuing
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [userChoice, setUserChoice] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // delay this screen's loading until fonts have rendered
  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />)
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserChoice(null);
  }

  const startGameHandler = selectedNumber => {
    setUserChoice(selectedNumber);
  };

  const gameOverHandler = numRounds => {
    setGuessRounds(numRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userChoice && guessRounds <= 0) {
    content = <GameScreen userChoice={userChoice} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen 
    guessRounds={guessRounds} 
    userChoice={userChoice}
    onNewGame={configureNewGameHandler} 
    />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
