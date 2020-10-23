import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, ToastAndroid } from 'react-native';
import { Card, ListItem,Icon, Overlay,Input, Divider } from 'react-native-elements';
import { Value } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {incrementQuantity,decrementQuantity,deleteProduct,deleteAllProducts} from "../store/actions/cartActions";
import images from "../services/images";
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons ,AntDesign, Entypo} from '@expo/vector-icons';
import { Header } from "react-native-elements"
import CartComponent from '../components/CartComponent';
import Toast from 'react-native-tiny-toast'


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validate : false,
      errorMessage: '',
      visible : false,
      lastName : '',
      firstName : '',
      address : '',
      city : '',
      disabled : true
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
    Toast.showSuccess('Paiement accepté')

    this.toggleOverlay();
    this.deleteAllProducts();
    this.goToHome();
  }

  isDisabled() {

    return (this.state.lastName.length ==0 ||
      this.state.firstName.length ==0 ||
      this.state.address.length ==0||
      this.state.city.length == 0);

  }

  toggleOverlay(){
    this.setState({visible : !this.state.visible})
  }

  validate(){
    this.setState({validate : true});
  }

  clear(){
    return {lastName : '', firstName : '', address : '',city : ''};
  }

  handleChange(value){
    const ib = {...value, disabled : this.isDisabled()};
    this.setState(ib);
  }

  cancel(){
    this.setState({visible: false,validate : false});
  }

  goToHome(){
    this.props.navigation.navigate("Home");
}


  render() {
        return (
            <ImageBackground source={images["background"]} style={styles.image}>

                <SafeAreaView style={{flex: 1,paddingBottom:10}} >

                  <Header
                    containerStyle = {{backgroundColor: "black",height : 70, paddingBottom:25, marginBottom: 30}}
                    centerComponent={{ text: 'My Cart', style: { color: '#fff', fontSize:32 }}}
                    leftComponent={<Entypo name="home" size={32} color="white" onPress={() => this.goToHome()} />}
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
                  <Text style={{color:"Black", fontSize : 32, textAlign : "center", marginBottom : 15}}>{"Total : " + this.getTotal() + "€"}</Text>
                  <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Commander' onPress={() => this.toggleOverlay()} />
                </Card>
                  </ScrollView>
                  <Overlay fullScreen={false} overlayStyle={{height: "50%", width: "90%", display: "flex", justifyContent:"space-around"}}  isVisible={this.state.visible} onBackdropPress={() => this.toggleOverlay}>

                    {

                      this.state.validate == false && (
                        <View>
                          <TextInput style={styles.input} placeholder="Last Name" value={this.state.valueLastName} onChangeText={(value) => this.handleChange({lastName : value })}></TextInput>
                          <TextInput style={styles.input} placeholder="First Name" value={this.state.valueLastName} onChangeText={(value) => this.handleChange({firstName : value })}></TextInput>
                          <TextInput style={styles.input} placeholder="Address" value={this.state.valueLastName} onChangeText={(value) => this.handleChange({address : value })}></TextInput>
                          <TextInput style={styles.input} placeholder="City" value={this.state.valueLastName} onChangeText={(value) => this.handleChange({city : value })}></TextInput>
                        <Divider>

                        </Divider>
                        <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        titleStyle={{fontSize:28}}
                        title='Validate' onPress={() => this.validate()} disabled={this.state.disabled } />
                      </View>
                      )
                    }
                    {

                      this.state.validate == true && (
                      <View>
                        <ListItem>
                          <ListItem.Content>
                              <ListItem.Title style={{color:"black"}}>{"Last Name : " + this.state.lastName}</ListItem.Title>
                          </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title style={{color:"black"}}>{"First Name : " + this.state.firstName}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                          <ListItem.Content>
                              <ListItem.Title style={{color:"black"}}>{"Address : " + this.state.address}</ListItem.Title>
                          </ListItem.Content>
                        </ListItem>
                        <ListItem>
                          <ListItem.Content>
                              <ListItem.Title style={{color:"black"}}>{"City : " + this.state.city}</ListItem.Title>
                          </ListItem.Content>
                        </ListItem>
                        <Divider></Divider>
                        <ListItem>
                          <ListItem.Content>
                              <ListItem.Title style={{color:"blue"}}>{"Total : " + this.getTotal() + "€"}</ListItem.Title>
                          </ListItem.Content>
                        </ListItem>
                          <Divider></Divider>

                        <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
                        titleStyle={{fontSize:28}}
                        title='Cancel' onPress={() => this.cancel()} />
                        <Text></Text>
                        <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        titleStyle={{fontSize:28}}
                        title='Payer' onPress={() => this.payer()} />


                      </View>)
                    }
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
