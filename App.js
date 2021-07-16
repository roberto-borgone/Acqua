import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './app/screens/SplashScreen';

export default function App() {

  return (
    <View
      style = {styles.body}
    >
      <StatusBar
        translucent
        backgroundColor = "#ECF0F3"
        barStyle = "dark-content"
      ></StatusBar>
      <SplashScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1
  }
});
