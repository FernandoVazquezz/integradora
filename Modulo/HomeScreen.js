import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableHightLight } from 'react-native';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
    tabBarIcon: () => <Icon size={24} name="ondemand-video" color="white" />
    }
    render() {
    return (
      <View>
        <Text>HomeScreen</Text>
      </View>
    );
  }
};