/* import React from 'react';
import {View} from 'react-native';
import Router, {Scene} from 'react-native-router-flux'
import StartScreen from './Components/StartScreen'
import Navigator from './Navigation/Navigator'
export default function App() {
  return (
   <View>
     <Navigator/>
   </View>
  );
}



 */
import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import StartScreen from './Components/StartScreen'
import ContactList from './Components/ContactList'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="home" component={StartScreen} title = "Home"/>
          <Scene key="lists" component={ContactList} title = "List"/>
          </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    backgroundColor: '#ecf0f1',
  },
});
