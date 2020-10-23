import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, ImageBackground} from 'react-native';
import { Component } from 'react';
import { Button,Header,Card } from 'react-native-elements';
import {connect} from "react-redux";
import images from "../services/images";
import { SafeAreaView } from 'react-native-safe-area-context';

class RestaurantsPage extends Component{
  constructor(props){
    super(props);
  }
  navigate(url, params){
    this.props.navigation.navigate(url, params);
  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
      <Header
        containerStyle = {{backgroundColor: "black",height : 70,paddingBottom:25}}
        centerComponent={<Text style={{fontSize: 32, color: 'white'}}>Restaurants</Text>}/>
        <ImageBackground source={images["background"]} style={styles.image}>

      <View >
         <View >
         <Card containerStyle={{borderRadius:10}}>
           <Card.Title style={{color:"black",fontSize:20}}>Restaurants partenaires</Card.Title>
           <Card.Divider/>
           <Text style={styles.textCard}>
           Tous les restaurants partenaires avec le bateau de Thibault
           </Text>
           <Text style={styles.textCard}>
           Produits selon la saison,Livraison sur Paris
           </Text>
           <Text style={styles.textCard}>
           0663999978
           </Text>
         </Card>
          </View>
          </View>
          <View style={styles.part}>
             { this.props.buttonLinks &&
               (this.props.buttonLinks.map(value =>
                (<TouchableOpacity
                key={value.title}
                style={value.style ? value.style : styles.button}
                onPress={() => this.navigate(value.componentPath, {
                  index: value.index,
                  type: 'restaurants'
                })}>
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
  return {buttonLinks : state.buttonLinks.restaurants}
}
const Restaurants = connect(mapStateToProps)(RestaurantsPage);
export default Restaurants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#06ABA6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  button:{
    width:"44%",
    backgroundColor: "white",
    borderColor:"white",
    borderWidth: 2,
    // paddingHorizontal: 12,
    paddingVertical: 30,
    marginVertical:10,
    // marginHorizontal: 5,
    borderRadius: 15,
    elevation: 50,
    // textAlign: "center",
    //  opacity : 0.9,
    // paddingVertical: 21,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft:10

  },
  buttonText:{
    fontSize: 15,
    color: "black",
     fontWeight: "bold",
    // alignSelf: "center",
    textTransform: "uppercase",
    // marginHorizontal: 10,
    overflow: "visible",
    marginLeft : 10,
    justifyContent:"center"

  },
  part: {
    height: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingLeft:12,
    paddingBottom:50


  },
  textCard: {
    marginBottom: 10,
    color:"black",
    textAlign:"center",
    fontSize:18
  }
});
