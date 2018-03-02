import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableHightLight } from 'react-native';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Buscar extends Component {

    static navigationOptions = {
    tabBarIcon: () => <Icon size={24} name="search" color="white" />
    }
    
    render() {
    return (
      <View>
        <Text>Buscar</Text>
      </View>
    );
  }
};

export default Buscar;