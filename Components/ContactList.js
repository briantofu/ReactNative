import React, { Component }  from 'react';
import { View, Text, StyleSheet} from 'react-native';
import axios from 'axios';


export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          lastName: '',
          firstName: '',
        };
      }
    componentDidMount(){
     axios.get(`https://martinjaycyhalum.xyz/api/v1/contacts/m0TmkGFsPAmJwmhS5Z2N`)
     .then(res => res.data)
     .then((data) =>
     {
         this.setState({
             email: data.email,
             lastName: data.lastName,
             firstName: data.firstName
         });
     });
    }
    render(){
        const {email, lastName, firstName} = this.state;
        return(
           
                <View style = {styles.container}>

                   <Text>First Name:{firstName}</Text>
                   <Text>Last Name:{lastName}</Text>
                   <Text>Email:{email}</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#deb887',
  }
});
  