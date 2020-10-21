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
import {Header} from "react-native-elements"
import CartComponent from '../components/CartComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

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
            this.setState({products : value.data.filter(val => {
                return val.category==this.props.route.params.idCategorie
            })})
        })
        .catch(err => {
            console.log(err);
        })
    }

    addToCart(product){
        this.props.addProduct({quantite : 1,product : product});
        
    }

    removeFromCart(product){
        this.props.removeProduct(product);
    }

    toggleCart(element) {
        const arr = this.props.cartProducts.filter(value => value.product.id == element.product.id);
        if(arr.length > 0){
            this.removeFromCart(element);
        } else {
            this.addToCart(element);
        }
    }

    render(){
        console.log(this.props.cartProducts);
        console.log(this.props.route.params.idCategorie)
        return (
            <SafeAreaView>
                <Header
                    containerStyle = {{backgroundColor: "bue",opacity: 0.7,height : 70, paddingBottom:25}}
                    rightComponent={<CartComponent products={this.props.cartProducts}/>}
                />
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
                            button={{ title: '', icon: <MaterialIcons name="shopping-cart" size={28} color="white" />, onButtonPress: () => this.toggleCart(product) }}  />
                        </View>
                    )
                })}/>
            </SafeAreaView>

        )
    }
}

const mapStateToProps = (state) => {
    return {cartProducts:state.cart.products};
}

const dispatch = (dispatch) => {
    return bindActionCreators({addProduct: addProduct, removeProduct: removeProduct},dispatch)
}

export default connect(mapStateToProps,dispatch)(ProductList);

const styles = StyleSheet.create({
    product :{
        padding: 3
    }
})
