import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Create extends React.Component {
  static navigationOptions = {
    title: 'Create',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Text>In Create</Text>
      </View>
    );
  }
}