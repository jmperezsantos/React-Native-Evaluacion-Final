import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginComponent from './src/components/LoginComponent';
import firebase from 'firebase';
import { Encabezado } from './src/components/lib/index';
import StackNavigator from './src/StackNavigator';

export default class App extends React.Component {

  componentWillMount() {

    firebase.initializeApp({
      apiKey: "AIzaSyDml7P8DXXD5MozNkkTnyathClACwbOsfc",
      authDomain: "shop-3b443.firebaseapp.com",
      databaseURL: "https://shop-3b443.firebaseio.com",
      projectId: "shop-3b443",
      storageBucket: "shop-3b443.appspot.com",
      messagingSenderId: "581600526149"
    })

  }

  render() {
    return (

      <StackNavigator/>
      
    );
  }
}
