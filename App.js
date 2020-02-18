import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import StartScreen from './Components/StartScreen';
import ContactList from './Components/ContactList';
import Name from './Components/Name';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="home" component={StartScreen} title = "Home" initial/>
          <Scene key="name" component={Name}/>
          <Scene key="lists" component={ContactList} title = "List"/>
        </Stack>
      </Router>
    );
  }
}
