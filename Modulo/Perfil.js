import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions , TouchableWithoutFeedback
,StatusBar, TextInput, SafeAreaView, Keyboard,
TouchableOpacity, KeyboardAvoidingView, Alert,Modal,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Autentication , firebaseDatabase} from './Firebase'
import { Actions } from 'react-native-router-flux';
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageZoom from 'react-native-image-pan-zoom';

const images = [{
        
    url: 'https://cloud.educaplay.com/recursos/91/2937625/imagen_1_1492385898.png'
}, {
    url: 'https://cloud.educaplay.com/recursos/91/2937625/imagen_1_1492385898.png'
}, {
    url: 'https://cloud.educaplay.com/recursos/91/2937625/imagen_1_1492385898.png'
}]
    class Perfil extends React.Component {
     state = {name:'' ,modalVisible: false,}  
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
  
    componentDidMount() {
        var user = Autentication.currentUser;
        name = user.displayName;
        this.setState({name: name});     
    }
    
    
  static navigationOptions = {
    tabBarIcon: () => <Icon size={24} name="face" color="white" />
    }
    


render() {
return(
       
<SafeAreaView style={styles.container}>   
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
    
        <View style={styles.logoContainer}>
            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={this.send}>
                    <Image source={require('./usuario.jpg')} style={{width: 170, height: 170}}  />
                </TouchableOpacity>           
                <Text style={styles.title}> {this.state.name} </Text>
            </View>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.infoContainer}>
          
           <Modal visible={this.state.modalVisible} 
                  transparent={false} 
                  onRequestClose={() => this.setState({modalVisible: false})}>
                <ImageViewer imageUrls={images}/>
            </Modal>
          
                <TouchableOpacity onPress={() => { this.setModalVisible(true);}}>
                <Image source={require('./imagenicon.png')} style={styles.perfilMedio}  />
                </TouchableOpacity>   
                
                <TouchableOpacity onPress={() => { this.setModalVisible(true);}}>
                <Image source={require('./imagenicon.png')} style={styles.perfilMedio}  />
                </TouchableOpacity>
               
                <TouchableOpacity onPress={() => { this.setModalVisible(true);}}>
                <Image source={require('./imagenicon.png')} style={styles.perfilMedio}  />
                </TouchableOpacity> 
                </View>
            </KeyboardAvoidingView>
        </View> 
        
    </TouchableWithoutFeedback> 
</SafeAreaView>
);}};

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
                        flexDirection: 'row',
                        flex:1,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 200,
                        padding: 20,
                        // backgroundColor: 'red',

                },
                
                perfilMedio:{
                   width:105,
                   height:105,
                   marginLeft: 5,
                   marginRight:5,
                   backgroundColor: 'gray',
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

export default Perfil;



