import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class List extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.list}>
                <View style={styles.title}>
                    <Text style={styles.titleTxt}>Choisissez vos produits</Text>
                </View>
                <View style={styles.elements}>
                    {this.props.list}
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    list:{
        backgroundColor: "#06ABA6",
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
    }
})