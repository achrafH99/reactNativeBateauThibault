import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Badge } from 'react-native-elements';

const CartComponent = ({
    products,navigation
}) => (
    <View style={styles.container}>
        <AntDesign name="shoppingcart" size={32} color="white" onPress={() => {navigation.navigate('Cart')}} />
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
