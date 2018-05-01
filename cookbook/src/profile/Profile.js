import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Text>In Profile</Text>
      </View>
    );
  }
}