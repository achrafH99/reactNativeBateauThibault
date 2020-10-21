import React, { Component } from 'react';
import { Text, View,StyleSheet,ImageBackground} from 'react-native';
import images from "../services/images";

export default class List extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <ImageBackground source={images["background"]} style={styles.image}>
            <View style={styles.list}>
                <View style={styles.title}>
                    <Text style={styles.titleTxt}>Choisissez vos produits</Text>
                </View>
                <View style={styles.elements}>
                    {this.props.list}
                </View>
            </View>
            </ImageBackground>
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
    image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
})
