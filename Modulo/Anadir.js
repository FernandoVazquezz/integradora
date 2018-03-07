import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import {TabNavigator} from 'react-navigation';
import {firebaseDatabase,Autentication} from './Firebase';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Anadir extends Component {
    state= {Titulo:'', Marca:'', Categorias:'',Descripción:'', Precio:'',Venta:true,countArticulos:1}
    
   
   
    send = ()=>{    
         var user = Autentication.currentUser;    
      const idUsuario = user.uid;
      var refe = firebaseDatabase.ref('usuarios/'+idUsuario+'/countProducts/countProducts');
        refe.on("value", function(snapshot) {
        const countArticulos=snapshot.val();
        (countArticulos)=>this.setState({countArticulos:countArticulos});
        }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        });
        
        const countArticulo= this.state.countArticulos;
        const countArticulos=countArticulo+1;
        this.setState({countArticulos:countArticulos});
        var user = Autentication.currentUser;    
         
        var ref = firebaseDatabase.ref('usuarios/'+idUsuario+'/countProducts').set({
        countProducts: this.state.countArticulos });
    
        let titulo = firebaseDatabase.ref('usuarios/'+idUsuario+'/productos/');
        let comments2 =titulo.push();
        comments2.set({ 
        Titulo: this.state.Titulo,
        Marca: this.state.Marca,
        Categorias: this.state.Categorias,
        Descripción: this.state.Descripción,
        Precio: this.state.Precio,
        Venta: this.state.Venta
        });
    }

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
                       onChangeText={(text)=>this.setState({Titulo:text})}
                    />
                    <TextInput style={styles.input}
                       placeholder="Marca"
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       autoCorrect={false}
                       underlineColorAndroid='transparent'
                       onChangeText={(text)=>this.setState({Marca:text})}
                    />
                    <TextInput style={styles.input}
                       placeholder="Categorias"
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       autoCorrect={false}
                       underlineColorAndroid='transparent'
                       onChangeText={(text)=>this.setState({Categorias:text})}
                    />
                    <TextInput style={styles.input}
                       placeholder="Descripción"   
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       underlineColorAndroid='transparent'
                       onChangeText={(text)=>this.setState({Descripción:text})}
                    />
                    <TextInput style={styles.input}
                       placeholder="Precio"   
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       keyboardType='numeric'
                       underlineColorAndroid='transparent'
                       onChangeText={(text)=>this.setState({Precio:text})}
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
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.send}>
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