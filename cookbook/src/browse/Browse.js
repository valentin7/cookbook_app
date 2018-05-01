import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Browse extends React.Component {
  static navigationOptions = {
    title: '',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>In Browse Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});