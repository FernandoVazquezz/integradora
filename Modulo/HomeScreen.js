import React, {Component, PureComponent } from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableHightLight } from 'react-native';
import {DrawerNavigator} from 'react-navigation'
        import {Icon, Button, Container, Header, Content, Left} from 'native-base';
import SearchBar from 'react-native-search-bar'
        import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
export default class HomeScreen extends React.Component {

    static  navigationOptions = {
        drawerIcon: (
                <Image  source={require('./Home.png')}   style={{height: 24, width: 24}}/>)
        };

        render() {
            return(
                    <View>
                        <Header>
                                <Left> 
                                <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
                            </Left>
                        </Header>
                        <View style={styles.Carrousel}>
                            <SwipeableParallaxCarousel 
                                data={datacarousel}
                                /> 
                        </View>
                    </View>
                        )
            }

        };

        styles = StyleSheet.create({
            Carrousel: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start'

            }
        })
        const datacarousel = [
            {
                "id": 1,
                "title": "iPhone",
                "titleColor": "#ffffff",
                "imagePath": "https://cnet4.cbsistatic.com/img/9vEVqVx3KOqT0RGAswuhGv3YFSk=/830x467/2017/10/31/a22348c2-6d9b-4c45-9b4d-e5e2d1ce0344/iphone-x-comparisons-01.jpg"
            },
            {
                "id": 2,
                "title": "Clothes",
                "imagePath": "https://citipos.vn/dulieu/uploads/2017/10/gioi-tre-yeu-thich-khoi-nghiep-nen-thu-mo-hinh-kinh-doanh-thanh-ly.jpg"
            },
            {
                "id": 3,
                "title": "Furniture",
                "subtitle": "More than just a trend",
                "imagePath": "https://falabella.scene7.com/is/image/FalabellaAR/PC_Decohogar_Muebles_Living?$PC_mobile$"
            }
        ];


