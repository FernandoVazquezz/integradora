import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableHightLight } from 'react-native';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from 'react-native-material-design-searchbar';

class Buscar extends Component {

_onClose() {
    this._textInput.setNativeProps({text: ''});
    this.props.onSearchChange('');
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  _onFocus() {
    this.setState({isOnFocus: true});
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  _onBlur() {
    this.setState({isOnFocus: false});
    if (this.props.onBlur) {
      this.props.onBlur();
    }
    this._dismissKeyboard();
  }

    static navigationOptions = {
    tabBarIcon: () => <Icon size={24} name="search" color="white" />
    }
    
    render() {
    return (
      <View>
      <View style={styles.search}>
        <SearchBar
        onSearchChange={() => console.log('On Search Change')}
        height={50}
        onFocus={() => console.log('On Focus')}
        onBlur={() => console.log('On Blur')}
        placeholder={'Buscar producto...'}
        autoCorrect={false}
        padding={5}
        returnKeyType={'search'}
      />
      </View>
      <View>
                
      </View>
      
      </View>
      
    );
  }
};

export default Buscar;

const styles = StyleSheet.create({
        search: {
        flex: 1,
        marginTop:24,
        }
               
        });