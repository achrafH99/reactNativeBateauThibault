import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text>hello!</Text>
      </View>
      <View style={styles.head2}>
        <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('Products')}><Text style={{color:"white"}}>Produits et promotions</Text></TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.buttonLT}><Text style={{color:"white"}}>Produits et promotions</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonRT}><Text style={{color:"white"}}>Produits et promotions</Text></TouchableOpacity>

        </View>
        <View style={{flexDirection: 'row',top:75}}>
          <TouchableOpacity style={styles.buttonLT}><Text style={{color:"white"}}>Produits et promotions</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonRT}><Text style={{color:"white"}}>Produits et promotions</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  }
});
