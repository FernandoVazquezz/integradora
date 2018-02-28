import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback
,StatusBar, TextInput, SafeAreaView, Keyboard,
TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Autentication} from './Firebase'
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
 state={usuario:'',password:''}
  
 Autenticar=()=>{
 const email= this.state.usuario;
 const password = this.state.password;
 
 
Autentication.signInWithEmailAndPassword(email, password).then(function(accept) {
console.warn('welcome');
}).catch(function(error){
    console.warn(error)
})

 }
render() {
return(
<SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content"/>
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.logoContainer}>
            <View style={styles.logoContainer}>
                <Icon name="md-cart" color="#ffffff" size={90}/>
                <Text style={styles.title}>ComprApp</Text>
            </View>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.infoContainer}>
                    <TextInput style={styles.input}
                       placeholder="Usuario"
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       keyboardType='email-address'
                       returnKeyType='next'
                       autoCorrect={false}
                       onChangeText={(user)=>this.setState({usuario:user})}
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
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.Autenticar}>
                        <Text style={styles.buttonText}>Ingresar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>                  
                        <Text style={styles.register} onPress={()=>Actions.Registrar()}>Crear Cuenta</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View> 
    </TouchableWithoutFeedback> 
</SafeAreaView>
)}}

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
                        marginTop: 10,
                        marginBottom:10,
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
                        // backgroundColor: 'red',

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


