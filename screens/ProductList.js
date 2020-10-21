import React from 'react'
import {  View, StyleSheet, Alert } from 'react-native'
import { Card } from "@paraboly/react-native-card";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import List from '../components/List';
import categorie from '../constants/categorie'
import products from '../constants/data'

export default function ProductList({ navigation }) {
    const val = 1; // numero categorie
    const productList = products.filter(value => {
        return value.category===val
    })
    return (
        <List navigation={navigation} list={productList.map( (product,i) => {
            return (
                <View key={product.name+" "+i} style={styles.product}>
                    <Card iconComponent={<MaterialCommunityIcons name="jellyfish" size={24} color="darkblue"/>} iconBackgroundColor="dodgerblue"
                        containerHeight={50}
                        title={product.name}
                        titleFontSize={14}
                        topRightText={`${product.price} euros`}
                        onPress={() => navigation.navigate("Detail")}
                        />
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