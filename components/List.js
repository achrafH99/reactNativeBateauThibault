import React, { Component } from 'react';
import { StyleSheet,ScrollView } from 'react-native';

export default class List extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            
             <ScrollView contentContainerStyle={{paddingBottom: 180, marginTop: 15, display: "flex", flexDirection: "column", alignItems: "center"}}>
                    {this.props.list}
            </ScrollView>
            
        )
    }
}

const styles= StyleSheet.create({
    list:{
        width:"100%",
        height: "100%",
        display: "flex",
        flexDirection : "column",
        justifyContent: "space-between"
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
