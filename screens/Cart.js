import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Value } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {incrementQuantity,decrementQuantity} from "../store/actions/cartActions";
import images from "../services/images";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  add(id){
    this.props.incrementQuantity(id);
  }

  remove(id){
    this.props.decrementQuantity(id);
  }

  render() {
      console.log(this.props.cartProducts)
        return (
            <ImageBackground source={images["background"]} style={styles.image}>

                <SafeAreaView >
                   
                    {   
                        
                        this.props.cartProducts.map((value,i) => {
                            return (
                                <ListItem key={i} bottomDivider   linearGradientProps={{
                                    colors: ['#1eb7c5','#00909d'],
                                    start: { x: 1, y: 0 },
                                    end: { x: 0.2, y: 0 },
                                  }}>
                                <ListItem.Content>
                                  <ListItem.Title style={{color:"white"}}>{value.product.name}</ListItem.Title>
                                  <ListItem.Subtitle style={{color:"white"}}>{value.product.comments}</ListItem.Subtitle>
                                </ListItem.Content>
                                <Ionicons name="md-remove-circle" size={24} color="#16fce0" onPress={() => this.remove(value)} />
                                <Text>{value.quantity}</Text>
                                <Ionicons name="md-add-circle" size={24} color="#16fce0" onPress={() => this.add(value)}/>
                                
                              </ListItem>
                            );
                        })
                    }
                   
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
        justifyContent: "center"
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


