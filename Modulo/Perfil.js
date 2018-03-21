
import React from 'react';
import { StyleSheet,Alert, Text, Image, TouchableOpacity, View, Dimensions, TextInput, ScrollView,RefreshControl } from 'react-native';
import { Header } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Avatar} from 'react-native-elements';
import {Autentication, firebaseDatabase} from './Firebase';
import { Actions } from 'react-native-router-flux';
import Menu from './Menu';

class Perfil extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  _onRefresh() {
    this.componentDidMount();
    this.setState({refreshing: false});
  }

Verificar(){
   Alert.alert(
  'Cierre de Sesion',
  '¿Esta seguro de que quiere cerrar la sesion?',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => Autentication.signOut().then(function() {
      Actions.Login();
}) }
  ],
  { cancelable: false }
) 
   
}


    state = {name:'',vendidos:0,venta:0,Correo:''}  
    
    componentDidMount() {
        var user = Autentication.currentUser;
        name = user.displayName;
        id= user.uid;
        this.setState({name: name});
        
        var ref = firebaseDatabase.ref('usuarios/'+id+'/countProducts');
        ref.on('value', snapshot => {
            const usuario = snapshot.val();
            if (usuario) {
                this.setState({
                    venta: usuario.countProducts
                });
            }
        });
        var ref = firebaseDatabase.ref('usuarios/'+id+'/Datos');
        ref.on('value', snapshot => {
     
            const usuario = snapshot.val();

            if (usuario) {
                this.setState({
                    Correo: usuario.correo
                });
            }
        });
    }

    static navigationOptions = {
        tabBarIcon: () => <Icon size={24} name="face" color="white" />
    }
    
    render() {
    return (
        <View style={styles.Container}>
            <ScrollView
         refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
                             }                          
        >
            <View style={styles.IconosPer}>
                <View style={styles.Config}>
                <TouchableOpacity>
                    <Icon name='settings' color='#B0BEC5' size={25} onPress={()=>Actions.Modificar()}/>
                </TouchableOpacity>
                </View>
                <View style={styles.Sesion}>
                <TouchableOpacity>
                    <Icon name='input' color='#B0BEC5' size={25} onPress={this.Verificar}/>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Cabeza}>
                <Avatar
                xlarge
                rounded
                source={{uri: "http://cdn.vogue.es/uploads/images/thumbs/201345/clara_lago_en_7dias_7looks_jueves__952579785_1200x800.jpg"}}
                activeOpacity={0.7}
                height={40}
                widht={40}
                />
            </View>
            <View style={styles.NomInf}>
                <Text style={styles.nombre}>{this.state.name}</Text>
                <Text style={styles.info}>{this.state.Correo}</Text>
            </View>
            <View style={styles.Estadisticas}>
                <View style={styles.Izquierda}>
                    <Text style={styles.text}>EN VENTAS</Text>
                    <Text style={styles.num}>{this.state.venta}</Text>
                </View>
                <View style={styles.Derecha}>
                    <Text style={styles.text}>VENDIDOS</Text>
                    <Text style={styles.num}>27</Text>
                </View>
            </View>
            <View style={styles.Estadisticas}>
                <View style={styles.Izquierda}>
                    <Text style={styles.text}>EN VENTA</Text>
                    <Text style={styles.num}>3</Text>
                </View>
                <View style={styles.Derecha}>
                    <Text style={styles.text}>VENDIDOS</Text>
                    <Text style={styles.num}>27</Text>
                </View>
            </View>
            <View style={styles.Estadisticas}>
                <View style={styles.Izquierda}>
                    <Text style={styles.text}>EN VENTA</Text>
                    <Text style={styles.num}>3</Text>
                </View>
                <View style={styles.Derecha}>
                    <Text style={styles.text}>VENDIDOS</Text>
                    <Text style={styles.num}>27</Text>
                </View>
            </View>
            <View style={styles.Estadisticas}>
                <View style={styles.Izquierda}>
                    <Text style={styles.text}>EN VENTA</Text>
                    <Text style={styles.num}>3</Text>
                </View>
                <View style={styles.Derecha}>
                    <Text style={styles.text}>VENDIDOS</Text>
                    <Text style={styles.num}>27</Text>
                </View>
            </View>
            </ScrollView>
        </View>
    );
  }
};

export default Perfil;

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#fdfcfb'
    },
    IconosPer:{
        height: 30,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    Config:{
        marginRight: 5
    },
    Sesion:{
        marginRight: 10
    },
    Cabeza:{
        height: 150,
        marginLeft: 105
    },
    NomInf:{
        height: 50
    },
    nombre:{
        textAlign: 'center',
        fontSize: 30,
        marginTop: 15
    },
    info:{
        textAlign: 'center',
        color: '#B0BEC5'
    },
    Estadisticas:{
        flexDirection: 'row',
        marginTop: 50
    },
    Derecha:{
        backgroundColor: '#BA68C8',
        height: 100,
        width: 180
    },
    Izquierda:{
        backgroundColor: '#4DD0E1',
        height: 100,
        width: 180
    },
    text:{
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10
    },
    num:{
        color: '#FFF',
        textAlign: 'center',
        fontSize: 40
    }
});
