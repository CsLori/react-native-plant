import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AppLoading, Asset } from 'expo';
import Navigation from './Navigation/index';
import { Block } from './Components'


const images = [
  require('./assets/image.jpg'),
  require('./assets/image.jpg'),
  require('./assets/image.jpg')
]

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  }

  handleResourcesAsync = async () => {
    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync()
    })
    return Promise.all(cacheImages)
  }
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      )
    }
    return (
      <Block white >
        <Navigation />
      </Block>
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
