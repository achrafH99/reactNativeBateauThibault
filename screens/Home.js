import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, ImageBackground,Image} from 'react-native';
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
                <Header
                  containerStyle = {{backgroundColor: "black",height : 70,paddingBottom:25,paddingTop:50}}
                    centerComponent={<Image style={{width:300,height:80}}source={require('../assets/images/header.png')}/>}
          />
        <ImageBackground source={images["background"]} style={styles.image}>
          <View >
            <Card containerStyle={{borderRadius:10}}>
              <Card.Title style={{color:"black"}}>Le Bateau de Thibault</Card.Title>
              {/* <Card.Divider/> */}
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
    justifyContent: 'center',

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
    justifyContent: "center",
    paddingHorizontal:5

  },
  buttonText:{
    fontSize: 15,
    color: "black",
    // fontWeight: "bold",
    // alignSelf: "center",
    textTransform: "uppercase",
    textAlign: "center",
    // marginHorizontal: 10,
    overflow: "visible",
    marginLeft : 10
  },
  part: {
    height: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop:"25%",
    marginLeft :10

  },
  textCard: {
    marginBottom: 10,
    color:"black",
    textAlign:"center",
    fontSize:18
  }
});
