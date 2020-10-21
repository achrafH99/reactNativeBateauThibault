import React, { Component } from 'react'
import {  View, StyleSheet, Alert,Icon } from 'react-native'
import { Card } from "@paraboly/react-native-card";
import { MaterialIcons,Ionicons,Fontisto, Foundation, AntDesign } from '@expo/vector-icons';
import List from '../components/List';
import categorie from '../constants/categorie'
import products from '../constants/data'
import { PricingCard } from 'react-native-elements';
import {connect} from 'react-redux';
import {addProduct, removeProduct} from "../store/actions/cartActions";
import   {bindActionCreators} from "redux"
import getRessources from "../services/apirest";
const val = 1; // numero categorie
const productList = products.filter(value => {
    return value.category===val
})

export class  ProductList extends Component {

    constructor(props){
        super(props);
        this.state ={products : []};
    }


    componentDidMount(){
        getRessources('products')
        .then((value) => {
            console.log(value);
            this.setState({products : value.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    addToCart(product){
        this.props.addProduct(product);
    }

    removeFromCart(product){
        this.props.removeProduct(product);
    }

    render(){
        return (
            <List navigation={this.props.navigation} list={this.state.products.map( (product,i) => {
                return (
                    <View key={product.name+" "+i} style={styles.product}>
                        <PricingCard
                        containerStyle={{width:350,display:"flex",justifyContent:"center"}}
                        color="#4f9deb"
                        title={product.name}
                        price={product.price + "€"}
                        info={[ product.comments,"Unité : "+product.unit ,product.availability ? "Disponible" : "Indisponible" ]}
                        infoStyle={{color:"black"}}
                        button={{ title: '', icon: <MaterialIcons name="add-shopping-cart" size={28} color="white" />, onButtonPress: () => this.props.addProduct() }}  />
                    </View>
                )
            })}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {cartProducts:state.cart.products};
}

const dispatch = (dispatch) => {
    bindActionCreators({addProduct: addProduct, removeProduct: removeProduct},dispatch)
}

export default connect(mapStateToProps,dispatch)(ProductList);

const styles = StyleSheet.create({
    product :{
        padding: 3
    }
})
