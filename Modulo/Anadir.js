import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Anadir extends Component {

    static navigationOptions = {
    tabBarIcon: () => <Icon size={24} name="add" color="white" />
    }
    
    render() {
    return (
      <View style={styles.infoContainer}>
                    <TextInput style={styles.input}
                       placeholder="Titulo"
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       autoCorrect={false}
		       underlineColorAndroid='transparent'
                    />
                    <TextInput style={styles.input}
                       placeholder="Marca"
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       autoCorrect={false}
		       underlineColorAndroid='transparent'
                    />
                    <TextInput style={styles.input}
                       placeholder="Categorias"
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       autoCorrect={false}
		       underlineColorAndroid='transparent'
                    />
                    <TextInput style={styles.input}
                       placeholder="Descripción"   
                       placeholderTextColor='rgba(255,255,255,0.8)'
		       underlineColorAndroid='transparent'
                    />
                    <TextInput style={styles.input}
                       placeholder="Precio"   
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       keyboardType='numeric'
		       underlineColorAndroid='transparent'
                    />
                    <View style={styles.image}>
                        <View style={styles.cameras}>
                            <Icon size={90} name="camera-alt" color="white" />
                        </View>
                        <View style={styles.cameras}>
                            <Icon size={90} name="camera-alt" color="white" />
                        </View>
                        <View style={styles.cameras}>
                            <Icon size={90} name="camera-alt" color="white" />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Publicar</Text>
                    </TouchableOpacity>
                </View>
    );
  }
};

export default Anadir;
    
const styles = StyleSheet.create({
    infoContainer: {
        flex:1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        backgroundColor: 'rgb(32,53,70)',
        flexDirection: 'column'
    },
    input: {
        height: 45,
        width:330,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom:3,
        marginTop:15,
        marginLeft:-3,
        paddingHorizontal: 10
    },
    buttonText:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'bold',
        fontSize:18
    },
    buttonContainer:{
        backgroundColor:'#06CB1B',
        paddingVertical:15,
        borderRadius:40
    },
    cameras:{
        width:100,
        height:100,
        marginTop:15,
        marginLeft: 2,
        marginRight:10
    },
    image:{
        flexDirection: 'row',
        flex:1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 200
    }
});