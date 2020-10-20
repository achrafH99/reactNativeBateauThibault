import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button} from 'teaset';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { Card,SimpleCard } from "@paraboly/react-native-card";
import { Component } from 'react';
import {Ionicons,Fontisto} from "@expo/vector-icons";


const buttonsInfos = [
  {

  }
];


export default class Home extends Component{

  constructor(props){
    super(props);
  }

  navigate(url){
    this.props.navigation.navigate(url);
  }

  render(){
    return (
      <View style={styles.container}>
          <View style={styles.part}>

          </View>
          <View style={styles.part}>
            <Card iconComponent={<Ionicons name="md-restaurant" size={32} color="black" />} title="Details" onPress={() => this.navigate("Detail")}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06ABA6',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  head: {
    flex: 1,
    backgroundColor: 'red',
    width:"100%",
    paddingTop:"50%",
    alignItems: 'center',
  },
  head2: {
    flex: 1,
    backgroundColor: 'blue',
    width:"100%",
    paddingTop:"50%",
    alignItems: 'center',

  },
  button:{
    position: 'absolute',
    top:  5,
    backgroundColor: "black",
    opacity:0.4,
    width:"98%",
    height:"50%"
  },
  buttonLT:{
    bottom: 90,
    backgroundColor: "black",
    opacity:0.4,
    width:"48%",
    height:"450%",
    right:4
  },
  buttonRT:{
    bottom: 90,
    backgroundColor: "black",
    opacity:0.4,
    width:"48%",
    height:"450%",
    left:4
  },
  part: {
    height: "50%"
  }
});
