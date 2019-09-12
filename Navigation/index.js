import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Welcome from '../Screens/Welcome';
// import Login from '../Screens/Login'
// import Browse from '../Screens/Browse'
// import Explore from '../Screens/Explore'
// import Settings from '../Screens/Settings'

import { theme } from '../Constants';

const screens = createMaterialTopTabNavigator(
  {
    Welcome
    // Login,
    // Browse,
    // Explore,
    // Settings,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRigthContainerStyle: {}
    }
  }
);

export default createAppContainer(screens);
