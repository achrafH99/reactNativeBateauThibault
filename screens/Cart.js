import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { Value } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {incrementQuantity,decrementQuantity} from "../store/actions/cartActions";
import images from "../services/images";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Header } from "react-native-elements"
import CartComponent from '../components/CartComponent';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  add(element){

    this.props.incrementQuantity(element);
  }

  remove(element){

     this.props.decrementQuantity(element);
  }

  getPriceTotalProduct(element){
    return element.quantity * element.product.price;
  }

  getTotal(){
    let total = 0;
    this.props.cartProducts.forEach(element => {
        total += this.getPriceTotalProduct(element);
    });
    return total;
  }

  render() {
        return (
            <ImageBackground source={images["background"]} style={styles.image}>

                <SafeAreaView style={{flex: 1,paddingBottom:10}} >
                  
                  <Header
                    containerStyle = {{backgroundColor: "#008cdc",height : 70, paddingBottom:25, marginBottom: 30}}
                    centerComponent={{ text: 'My Cart', style: { color: '#fff', fontWeight:"bold", fontSize:32 }}}
                />
              <ScrollView>
                <View style={{paddingHorizontal : 10}}>
                   {   
                        
                        this.props.cartProducts.map((value,i) => {
                            return (
                                <ListItem key={i} bottomDivider  >
                                <ListItem.Content>
                                  <ListItem.Title style={{color:"black"}}>{value.product.name}</ListItem.Title>
                                  <ListItem.Subtitle style={{color:"blue"}}>{value.product.comments}</ListItem.Subtitle>
                                </ListItem.Content>
                                <Ionicons name="md-remove-circle" size={32} color={value.quantity < 2 ? "grey" : "#008cdc"} onPress={() => value.quantity > 1 ? this.remove(value.product.id) : null} />
                                <Text>{value.quantity}</Text>
                                <Ionicons name="md-add-circle" size={32} color="#008cdc" onPress={() => this.add(value.product.id)}/>
                                
                              </ListItem>
                            );
                        })
                    }
                </View>

                <Card containerStyle={{marginTop : 70, borderRadius: 10}}>
                  <Card.Title>Price</Card.Title>
                  <Card.Divider/>
                  {
                    this.props.cartProducts.map((value,i) => {
                      return (
                        <ListItem key={i} bottomDivider   >
                                <ListItem.Content>
                                  <ListItem.Title style={{color:"black"}}>{value.quantity + " x "+value.product.name}</ListItem.Title>
                                </ListItem.Content>
                      <Text style={{color:"Black", fontSize : 32}}>{this.getPriceTotalProduct(value)+"€"}</Text>
                        </ListItem>
                      )
                    })
                  }
                  <Card.Divider/>
                  <Text style={{color:"Black", fontSize : 32, textAlign : "center"}}>{"Total : " + this.getTotal() + "€"}</Text>
                </Card>
                  </ScrollView>   
                </SafeAreaView>
                </ImageBackground>
        );
  }
}

const styles = StyleSheet.create({
    container : {
        
    },
    image : {
        flex: 1,
        resizeMode: "cover",
        
    },
    quantity: {fontSize:28},
    buttonQuantity : {
        backgroundColor : "white",
        borderRadius: 100,
        paddingHorizontal : 15
    }
});

const mapStateToProps = (state) => {
    return {
        cartProducts : state.cart.products
    }
}

const dispatch = (dispatch) => {
    return bindActionCreators({incrementQuantity: incrementQuantity, decrementQuantity:decrementQuantity},dispatch)
}

export default connect(mapStateToProps, dispatch)(Cart);


