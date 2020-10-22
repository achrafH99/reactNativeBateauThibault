import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, ImageBackground} from 'react-native';
import { Component } from 'react';
import { Button ,Header,Card,Icon} from 'react-native-elements';
import {connect} from "react-redux";
import images from "../services/images";
import { SafeAreaView } from 'react-native-safe-area-context';

class HomePage extends Component{
  constructor(props){
    super(props);
  }
  navigate(url){
    this.props.navigation.navigate(url);
  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={images["background"]} style={styles.image}>
          <View >
            <Card containerStyle={{borderRadius:10,backgroundColor:"black"}}>
              <Card.Title style={{color:"white"}}>HELLO WORLD</Card.Title>
              <Card.Divider/>
              <Text style={styles.textCard}>
              Vente en direct de notre bateau
              </Text>
              <Text style={styles.textCard}>
              Produits selon la saison,Livraison sur Paris
              </Text>
              <Text style={styles.textCard}>
              0663999978
              </Text>

            </Card>
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
      </SafeAreaView>
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
    backgroundColor: "#194d82",
    borderColor:"#023d52",
    borderWidth: 2,
    // paddingHorizontal: 12,
    paddingVertical: 30,
    marginVertical:10,
    // marginHorizontal: 5
    borderRadius: 15,
    elevation: 8,
    // textAlign: "center",
     opacity : 0.9,
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
    marginTop:"30%"
  },
  textCard: {
    marginBottom: 10,
    color:"white",
    textAlign:"center"
  }
});
