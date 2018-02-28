import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
export default class Splash extends Component {

    render() { 
        return(
                <View style={styles.container}>
                    <Animatable.Text animation="fadeInDown"> <Icon name="md-cart" color="#ffffff" size={90}/></Animatable.Text>      
                    <Progress.Circle color='#DECD29' size={50} borderWidth={2} indeterminate={true} />
                    <Animatable.Text animation="fadeInDown">
                        <Text style={styles.title}>ComprApp</Text>
                    </Animatable.Text> 
                </View>
                ) 
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32,53,70)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        paddingTop: 45,
        fontSize: 35
    }
})