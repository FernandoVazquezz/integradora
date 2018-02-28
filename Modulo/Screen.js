import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class Screen extends Component {
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
      >
        <Tab 
          barBackgroundColor="#37474F"
          label="Buscar"
          icon={<Icon size={24} color="white" name="search" />}
        />
        <Tab
          barBackgroundColor="#00796B"
          label="Favoritos  "
          icon={<Icon size={24} color="white" name="favorite" />}
        />
        <Tab
          barBackgroundColor="#5D4037"
          label="Notificaciones"
          icon={<Icon size={24} color="white" name="speaker-notes" />}
        />
        <Tab
          barBackgroundColor="#3E2723"
          label="perfil"
          icon={<Icon size={24} color="white" name="face" />}
        />
      </BottomNavigation>
    );
  }
}