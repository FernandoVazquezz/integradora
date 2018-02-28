import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
        import {Scene, Router} from 'react-native-router-flux';
        import {DrawerNavigator, DrawerItems} from 'react-navigation'
        import HomeScreen from './HomeScreen'
        import SettingsScreen from './SettingsScreen'
        import {Container, Content, Header, Body, Icon} from 'native-base';

 export default class Screen2 extends React.Component {

    render() {
        return(
                <Myapp/>
              )
    }
}

const CustomDrawerContentComponent = (props) => (
            <Container>
                <Header style={{height: 200, backgroundColor: '#2BB3FF'}}>
                    <Body>
                        <Image
                            style={styles.Image}
                            source={require('./perfil.png')}/>
                    </Body>
                </Header>
                <Content>
                    <DrawerItems {...props}/>
                </Content>
            </Container>
                        );
            const Myapp = DrawerNavigator({
                Home: {
                    screen: HomeScreen
                },
                Settings: {
                    screen: SettingsScreen
                },Celulres: {
                    screen: SettingsScreen
                },Consolas: {
                    screen: SettingsScreen
                },Ropa: {
                    screen: SettingsScreen
                },Joyeria: {
                    screen: SettingsScreen
                },Libros: {
                    screen: SettingsScreen
                }
            }, {
                initialRouteName: 'Home',
                drawerPosition: 'left',
                contentComponent: CustomDrawerContentComponent,
                drawerOpenRoute: 'DrawerOpen',
                drawerCloseRoute: 'DrawerClose',
                drawerToggleRouter: 'DrawerToggle'
            });
        const  styles = StyleSheet.create({
                container: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                Image: {
                    height: 150,
                    width: 150,
                    borderRadius: 75
                }
            });