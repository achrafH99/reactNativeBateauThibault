import React, { Component } from 'react';
import { Text, View,StyleSheet,ScrollView,ImageBackground } from 'react-native';
import images from '../services/images'

export default class List extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.list}>
            <ImageBackground source={images["background"]} style={styles.image}>
                {/* <View style={styles.title}>
                    <Text style={styles.titleTxt}>Choisissez vos produits</Text>
                </View> */}
                <ScrollView contentContainerStyle={styles.elements}>
                    {this.props.list}
                </ScrollView>
            </ImageBackground>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    list:{
        width:"100%",
        height: "100%",
        overflow: "scroll"
    },
    title: {
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    titleTxt:{
        color: "#fff",
    },
    elements: {
        alignItems: "center",
        padding: 5,
    },
    image:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"center"
    }
})
