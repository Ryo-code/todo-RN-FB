import React, { Component } from 'react';
import { Text, TextInput, View, ListView, TouchableOpacity } from 'react-native';
import Firebase from 'firebase';


export default class App extends React.Component {
  constructor(props){
    super(props);
    const myFireBaseRef = new Firebase('https://todo-rn-fb-tut.firebaseio.com/');

    myFireBaseRef.set({
      title: "Hello world!",
      author: "Ryo"      
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
