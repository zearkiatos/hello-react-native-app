import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Greeting from './src/components/Greeting';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting text='Hello World! 👋 🌎' style={[styles.text, styles.red]} />
      <Greeting text='Hello World! 👋 🌎' style={[styles.text, styles.green]}  />
      <Greeting text='Hello World! 👋 🌎' style={[styles.text, styles.blue]}  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
      fontSize: 24,
      color: 'white',
  },
  red: {
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: 'blue'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
  },
});
