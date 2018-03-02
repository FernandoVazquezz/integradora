import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'

import Buscar from './Buscar';
import Publicaciones from './Publicaciones';
import Añadir from './Anadir';
import Perfil from './Perfil';


export default class Screen extends Component {
  render() {
    return (
      <AppTabNavigator />
    );
  }
}

const AppTabNavigator = TabNavigator(
  {
    Buscar: { screen: Buscar },
    Publicaciones: { screen: Publicaciones },
    Añadir: { screen: Añadir },
    Perfil: { screen: Perfil }
  },
  {
    tabBarComponent: NavigationComponent,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    swipeEnabled:true,
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: 'white',
        rippleColor: 'white',
        tabs: {
          Buscar: {
            barBackgroundColor: '#37474F'
          },
          Publicaciones: {
            barBackgroundColor: '#00796B'
          },
          Añadir: {
            barBackgroundColor: '#37474F'
          },
          Perfil: {
            barBackgroundColor: '#00796B'
          }
        }
      }
    }
  }
);