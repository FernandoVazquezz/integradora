import React from 'react';
import { Button, View, Text } from 'react-native';
import {Autentication} from './Modulo/Firebase';
import {Scene, Router} from 'react-native-router-flux';
import Screen2 from './Modulo/Screen2';
import Menu from './Modulo/Menu'; 
import HomeApp from './Modulo/HomeApp'; 
import Screen from './Modulo/Screen';
import Registrar from './Modulo/Registrar';
import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {

componentDidMount(){
        Autentication.onAuthStateChanged(function(user) {
            if (user) {
             Actions.HomeApp();
            } 
          });

    }

render() {

       return (<Menu />);
    }
}
