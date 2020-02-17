import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Actions, Router, Scene} from 'react-native-router-flux';
export default class StartScreen extends Component {
    render(){
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Contact List</Text>
      <Text style = {styles.desc}>A React Native Exercise from Brian Nebres</Text>
      <Text style = {styles.click} onPress={() => Actions.lists()}>Tap here to view</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 14,
    color: 'white'
  },
  click: { 
    fontSize: 18,
    color: 'white',
    position: 'absolute',
    bottom: 21
  }
});
