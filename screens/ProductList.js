import React from 'react'
import {  View, StyleSheet, Alert } from 'react-native'
import { Card } from "@paraboly/react-native-card";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import List from '../components/List';
import categorie from '../constants/categorie'
import products from '../constants/data'
import { PricingCard } from 'react-native-elements';



export default function ProductList({ navigation }) {
    const val = 1; // numero categorie
    const productList = products.filter(value => {
        return value.category===val
    })
    return (
        <List navigation={navigation} list={productList.map( (product,i) => {
            return (

                <View key={product.name+" "+i} style={styles.product}>

                    <PricingCard
                    containerStyle={{width:350}}
                    color="#4f9deb"
                    title={product.name}
                    price={product.price + "€"}
                    button={{ title: 'GET STARTED', icon: 'flight-takeoff' }} />
                </View>

            )
        })}/>
    )
}

const styles = StyleSheet.create({
    product :{
        padding: 3
    }
})
