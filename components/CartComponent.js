import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Badge } from 'react-native-elements';

const CartComponent = ({
    products
}) => (
    <View style={styles.container}>
        <AntDesign name="shoppingcart" size={32} color="white" />
        <Badge status="error" value={products.length} />
    </View>
);

const styles = StyleSheet.create({
    container : {
        display : "flex",
        flexDirection : "row",
       
    }
});

export default CartComponent;
