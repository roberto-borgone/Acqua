import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, View, Image } from 'react-native';

function SplashScreen(props) {
  return (
    <ImageBackground 
      style = {styles.background}
      source = {require("../assets/background.png")}
    >
      <View
        style = {styles.mainView}
      >
        <Image
          style = {styles.logo}
          source = {require("../assets/logo.png")}
        ></Image>
        <Image
          style = {styles.acquatext}
          source = {require("../assets/acquatext.png")}
        ></Image>
        <Image
          style = {styles.trees}
          source = {require("../assets/trees.png")}
        ></Image>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  logo: {
    width: "25%",
    height: "12%",
  },
  acquatext: {
    width: "30%",
    height: "5%",
  },
  trees: {
    marginBottom: "10%",
    marginTop: "50%",
    width: "80%",
    height: "18%",
  }
})

export default SplashScreen;