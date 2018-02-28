import React, {Component} from 'react';
import {StyleSheet, View, Text,Image } from 'react-native';
import {DrawerNavigator} from 'react-navigation'
import {Icon, Button, Container, Header, Content, Left} from 'native-base'
export default class SettingsScreen extends React.Component {

 static  navigationOptions = {
        drawerIcon: (
                <Image  source={require('./settings.png')}
                    style={{height: 24, width: 24}}
                    />)
        }

    render() {
        return(
                <Container>
        <Header>
        <Left>
            <Icon name="ios-menu" onPress={()=>this.props.navigation.navigate('DrawerOpen')}/>
            </Left>
            </Header>
                    <Content contentContainerStyle={{flex:1,
                        alignItems:'center',
                        justifyContent:'center'
                         }}>
                        <Text>
                        Settings
                        </Text>
                    </Content>
                </Container>
                )
    }

}

