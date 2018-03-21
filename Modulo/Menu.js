import React from 'react';
import { Button, View, Text } from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Screen from './Screen';
import Registrar from './Registrar';
import Login from './Login';
import Modificar from './Modificar';

export default class Menu extends React.Component {

render() {

        return( 
                <Router navigationBarStyle={{ backgroundColor: 'rgb(32,53,70)' }}>
                    <Scene key="root"> 
                        <Scene key="Login" component={Login} hideNavBar={true}/>
                        <Scene key="Registrar" component={Registrar} hideNavBar={true}/>
                        <Scene key="Screen" component={Screen} hideNavBar={true}/>
                        <Scene key="Modificar" component={Modificar} title="Mod. Perfil"/>
                    </Scene>
                </Router>
                )
    }
}