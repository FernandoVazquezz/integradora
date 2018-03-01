import React from 'react';
import { Button, View, Text } from 'react-native';
import Login from './Login';
import Splash from './Splash';
import {Scene, Router} from 'react-native-router-flux';

export default class HomeApp extends React.Component {
    
        constructor(props) {
        super(props);
        this.state = {currentScreen: 'Splash'}
        setTimeout(() => {
            this.setState({currentScreen: 'Login'})
        },1000)
    }
    render() {
        const{currentScreen} = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Login/>
        return mainScreen
    }
}

