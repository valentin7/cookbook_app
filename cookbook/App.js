import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Browse} from './src/browse';
import {Create} from './src/create';
import {Profile} from './src/profile';


export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  Browse: { screen: Browse},
  Create: { screen: Create },
  Profile: { screen: Profile},
});


