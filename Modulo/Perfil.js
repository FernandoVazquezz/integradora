import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableHightLight } from 'react-native';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Perfil extends Component {

    static navigationOptions = {
    tabBarIcon: () => <Icon size={24} name="face" color="white" />
    }
    
    render() {
    return (
      <View>
        <Text>Perfil</Text>
      </View>
    );
  }
};

export default Perfil;