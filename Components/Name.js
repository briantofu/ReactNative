import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, AsyncStorage, Keyboard} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
export default class Name extends Component{
 constructor(props){
     super(props);
     this.state = {
         name: ''
     }
 }

    saveData = () => {
        const {name} = this.state;
        let myArray ={
            name:name,
        }
        AsyncStorage.setItem('myArray', JSON.stringify(myArray));
        Keyboard.dismiss();
        alert(name + ' has saved to my database'); 
    }
    
    goLists = () => {
        Actions.lists()
    }

    submit(){
    this.saveData();
    this.goLists();
    }

    render(){
        return(
             <View style = {styles.container}>
                 <Text style = {styles.text}>
                 What's your name?
                 </Text>
                 <TextInput 
                    style = {styles.input}
                    placeholder = "Enter your name, please"
                    onChangeText= {name => this.setState({name})}
                    />
                 <TouchableOpacity 
                    style = {styles.button} 
                    onPress={() => this.submit()} 
                    >
                    <Text style = {styles.text}> 
                        Submit
                    </Text>
                </TouchableOpacity>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#add8e6"
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20,
        textAlign: "center"
    },
    input: {
        fontSize: 20,
        
    },
    button: {
        backgroundColor: "#eee8aa",
        margin: 50,
        height: 30,
        width: 150,
        borderColor: "#cd853f" ,
        borderWidth: 2
    }
})