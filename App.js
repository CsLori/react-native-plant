import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import Navigation from "./Navigation/index";
import Block from "./Components/block.js";

const images = [
  require("./assets/image.jpg"),
  require("./assets/image.jpg"),
  require("./assets/image.jpg")
];

export default class App extends Component {
  state = {
    isLoadingComplete: false
  };

  handleResourcesAsync = async () => {
    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };
  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }
    return (
      <Block>
        <Navigation />
      </Block>
      // <Text>Hello World</Text>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
