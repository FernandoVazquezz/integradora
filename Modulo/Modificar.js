import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,ScrollView} from 'react-native';
import { Header } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Avatar, Button} from 'react-native-elements';
import {Autentication, firebaseDatabase} from './Firebase';
import { Akira } from 'react-native-textinput-effects';

class Modificar extends React.Component {
  
state= {NombreUser:'', ContraseñaNueva:'',ContraseñaActual:'',Contraseña:'',Email:''}    

componentDidMount() {
        var user = Autentication.currentUser;
        id= user.uid;
        
        var ref = firebaseDatabase.ref('usuarios/'+id+'/Datos');
        ref.on('value', snapshot => {
     
            const usuario = snapshot.val();

            if (usuario) {
                this.setState({
                    Contraseña: usuario.contraseña,
                    Email: usuario.correo
                });
            }
        });
    }
 
    Verificar = ()=>{
         const Pass = this.state.ContraseñaActual;
         console.warn(Pass);
         const contraseña = this.state.Contraseña;
         console.warn(contraseña);
        if(contraseña === Pass){
            this.sendCorreo();
        }else{
            alert("La contraseña anterior no coincide");
        }
    }
      sendNombre = ()=>{    
      const Nombre = this.state.NombreUser;
       var user = Autentication.currentUser;
            user.updateProfile({
              displayName: Nombre
              
            }).then(function() {
               alert("Nombre Actualizado Correctamente");
            }).catch(function(error) {
              // An error happened.
            });
            
    }
    
       
    
    sendCorreo = ()=>{    
      const Pass = this.state.ContraseñaNueva;
      const ema = this.state.Email;
       var user = Autentication.currentUser;
      
            user.updatePassword(Pass).then(function() {
              alert("Contraseña Actualizada Correctamente");
            }).catch(function(error) {
              alert(error);
            });
            
            
           
            id= user.uid; 
            var ref = firebaseDatabase.ref('usuarios/'+id+'/Datos').set({
        contraseña: Pass,
        correo:ema,
    
        });
    }
    
    
    render() {
        return(
            <View style={styles.Container}>
    <ScrollView>
             
                <View style={styles.Cabeza}>
                    <TouchableOpacity>
                    <Avatar
                    xlarge
                    rounded
                    source={{uri: "http://cdn.vogue.es/uploads/images/thumbs/201345/clara_lago_en_7dias_7looks_jueves__952579785_1200x800.jpg"}}
                    activeOpacity={0.7}
                    height={40}
                    widht={40}
                    />
                    </TouchableOpacity>
                </View>
                <View style={styles.Textos}>
                    <Akira
                    label={'Nuevo Nombre De Usuario'}
                    borderColor={'#a5d1cc'}
                    labelStyle={{ color: '#ac83c4' }}
                    onChangeText={(text)=>this.setState({NombreUser:text})}
                    />
               
                </View>
                 
                <View style={styles.Boton}>  
                    <Button
                    onPress={this.sendNombre}
                    large
                    icon={{name: 'done'}}
                    title='ACTUALIZAR NOMBRE'
                    backgroundColor='#4CAF50'/>
                </View>
                
                <View style={styles.Textos}>    
                    <Akira
                    style={styles.Correo}
                    label={'Contraseña Actual'}
                    borderColor={'#a5d1cc'}
                    labelStyle={{ color: '#ac83c4' }}
                    onChangeText={(text)=>this.setState({ContraseñaActual:text})}    
                    />
                    
                    <Akira
                    style={styles.Correo}
                    label={'Nuevo Contraseña'}
                    borderColor={'#a5d1cc'}
                    labelStyle={{ color: '#ac83c4' }}
                    onChangeText={(text)=>this.setState({ContraseñaNueva:text})}    
                    />
                </View>
                <View style={styles.Boton}>  
                    <Button
                    onPress={this.Verificar}
                    large
                    icon={{name: 'done'}}
                    title='ACTUALIZAR CONTRASEÑA'
                    backgroundColor='#4CAF50'/>
                </View>
               </ScrollView> 
            </View>
        );
    }
};

export default Modificar;

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#fdfcfb'
    },
    Cabeza:{
        height: 150,
        marginLeft: 105,
        marginTop: 25
    },
    Textos: {
        padding: 16,
        marginTop: 15
    },
    Correo: {
        marginTop: 4
    },
    Boton:{
        marginTop: 15
    }
});