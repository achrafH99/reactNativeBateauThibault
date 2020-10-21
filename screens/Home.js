import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, ImageBackground} from 'react-native';
import { Component } from 'react';
import { Button } from 'react-native-elements';
import {connect} from "react-redux";
import images from "../services/images";

class HomePage extends Component{
  constructor(props){
    super(props);
  }
  navigate(url){
    this.props.navigation.navigate(url);
  }
  render(){
    return (
      <View style={styles.container}>
        <ImageBackground source={images["background"]} style={styles.image}>
         <View style={styles.part}>

          </View>
          <View style={styles.part}>
             { this.props.buttonLinks &&
               (this.props.buttonLinks.map(value =>
                (<TouchableOpacity
                style={value.style ? value.style : styles.button}
                onPress={() => this.navigate(value.componentPath)}>
                {value.icon}
                  <Text style={styles.buttonText}>{value.title}</Text>
                </TouchableOpacity>)))
             }
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {buttonLinks : state.buttonLinks.home}
}
const Home = connect(mapStateToProps)(HomePage);
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#06ABA6',
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  button:{
    width:"48%",
    backgroundColor: "#0100A7",
    // paddingHorizontal: 12,
    paddingVertical: 30,
    marginVertical:10,
    // marginHorizontal: 5
    borderRadius: 15,
    elevation: 8,
    // textAlign: "center",
    opacity : 0.8,
    // paddingVertical: 21,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal:5

  },
  buttonText:{
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    // alignSelf: "center",
    textTransform: "uppercase",
    textAlign: "center",
    // marginHorizontal: 10,
    overflow: "visible"
  },
  part: {
    height: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  }
});
