import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, ToastAndroid } from 'react-native';
import { Card, ListItem,Icon, Overlay,Input } from 'react-native-elements';
import { Value } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {incrementQuantity,decrementQuantity,deleteProduct,deleteAllProducts} from "../store/actions/cartActions";
import images from "../services/images";
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Header } from "react-native-elements"
import CartComponent from '../components/CartComponent';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      visible : false,
      lastName : '',
      firstName : '',
      address : '',
      city : '',
    };
  }

  add(element){

    this.props.incrementQuantity(element);
  }

  deleteAllProducts(){
    this.props.deleteAllProducts();
  }

  deleteProduct(id){
    this.props.deleteProduct(id);
  }

  remove(element){

     this.props.decrementQuantity(element);
  }

  goToHome(){
    this.props.navigation.navigate("Home");
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

  payer(){
    ToastAndroid.show("Le paiement a été effectué", ToastAndroid.SHORT);
    this.toggleOverlay();
    this.deleteAllProducts();
    this.goToHome();
  }

  toggleOverlay(){
    this.setState({visible : !this.state.visible})
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
                                <Ionicons name="md-trash" size={32} color="red" onPress={() => this.deleteProduct(value.product.id)}/>

                                
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
                  <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Commander' onPress={() => this.toggleOverlay()} />
                </Card>
                  </ScrollView>
                  <Overlay fullScreen={false} overlayStyle={{height: "40%", width: "90%", display: "flex", justifyContent:"space-around"}}  isVisible={this.state.visible} onBackdropPress={() => this.toggleOverlay}>
                      <TextInput style={styles.input} placeholder="Last Name" value={this.state.valueLastName} onChange={(value) => this.setState({lastName : value })}></TextInput>
                      <TextInput style={styles.input} placeholder="First Name" value={this.state.valueLastName} onChange={(value) => this.setState({firstName : value })}></TextInput>
                      <TextInput style={styles.input} placeholder="Address" value={this.state.valueLastName} onChange={(value) => this.setState({address : value })}></TextInput>
                      <TextInput style={styles.input} placeholder="City" value={this.state.valueLastName} onChange={(value) => this.setState({city : value })}></TextInput>
                    <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    titleStyle={{fontSize:28}}
                    title='Payer' onPress={() => this.payer()} />
                  </Overlay>
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
    },
    input : {
      fontSize: 22,
      marginBottom : 20
    }
});

const mapStateToProps = (state) => {
    return {
        cartProducts : state.cart.products
    }
}

const dispatch = (dispatch) => {
    return bindActionCreators({incrementQuantity: incrementQuantity, decrementQuantity:decrementQuantity,deleteProduct:deleteProduct,deleteAllProducts:deleteAllProducts},dispatch)
}

export default connect(mapStateToProps, dispatch)(Cart);


