import React from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback
,StatusBar, TextInput, SafeAreaView, Keyboard,
TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native';
import {Autentication,firebaseDatabase} from './Firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import {TabNavigator} from 'react-navigation';

export default class Registrar extends React.Component {
    state= {usuario:'', password:'',email:''}
    
  send = ()=>{
        const usuario = this.state.usuario;
        const password = this.state.password;
        const email = this.state.email;
        Autentication.createUserWithEmailAndPassword(email, password).then(function(accept){
        var user = Autentication.currentUser;
                user.updateProfile({
                displayName: usuario,
                })
                
        const idUsuario = user.uid;
        let nuevoUser = firebaseDatabase.ref('usuarios/' + idUsuario+'/Datos');
        nuevoUser.set({
        contraseña:password,
        correo:email,
        });
    
        
        }).catch(function(error) {
            Alert.alert(
            'INCORRECTO',
            String(error),
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')}
            ],
            { cancelable: false }
            )
      });
    }      

        
        render() {    
        return (
            <SafeAreaView style={styles.container}>
    <TouchableWithoutFeedback style={styles.container}
                              onPress={Keyboard.dismiss}>
        <View style={styles.logoContainer}>
            <View style={styles.logoContainer}>
                <Icon name="md-contacts" color="#ffffff" size={90}/>
                <Text style={styles.title}>Registrate</Text>
            </View>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View  style={styles.infoContainer} >
                <TextInput style={styles.input}
                   placeholder="Usuario"
                   placeholderTextColor='rgba(255,255,255,0.8)'
                   keyboardType='go'
                   returnKeyType='next'
                   autoCorrect={false}
                   onChangeText={(user)=>this.setState({usuario:user})}
                   onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput style={styles.input}
                   placeholder="Email"
                   placeholderTextColor='rgba(255,255,255,0.8)'
                   keyboardType='email-address'
                   returnKeyType='next'
                   autoCorrect={false}
                   onChangeText={(email)=>this.setState({email:email})}
                   onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput style={styles.input}
                   placeholder="Contraseña"   
                   placeholderTextColor='rgba(255,255,255,0.8)'
                   returnKeyType='go' 
                   secureTextEntry
                   autoCorrect={false}
                   onChangeText={(pass)=>this.setState({password:pass})}
                   ref={"txtPassword"}
                />
                
                 
                <TouchableOpacity style={styles.buttonContainer} onPress={this.send}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
            </View>   
            </KeyboardAvoidingView>
        </View> 
    </TouchableWithoutFeedback> 
</SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
        container: {
        flex: 1,
                backgroundColor: 'rgb(32,53,70)',
                flexDirection: 'column'
        },
                logoContainer: {
                alignItems: 'center',
                justifyContent: 'flex-end',
                flex: 1
                },
                title: {
                color: 'white',
                        fontSize: 25,
                        textAlign: 'center',
                        marginTop: 5,
                        //  opacity: 0.5
                },
                infoContainer: {
                // position: 'absolute',
                        flex:1,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 200,
                        padding: 20,
                         

                },
                input: {
                height: 45,
                        width:350,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        color: '#FFF',
                        marginBottom:20,
                        paddingHorizontal: 10
                },
                buttonContainer:{
                backgroundColor:'#f7c744',
                        paddingVertical:15,
                        borderRadius:40
                },
                buttonText:{
                textAlign:'center',
                        color:'rgb(32,53,70)',
                        fontWeight:'bold',
                        fontSize:18
                },
                register:{
                color: 'white',
                        fontSize: 18,
                        textAlign: 'center',
                        marginTop: 5,
                        //  opacity: 0.5
                }
        });