import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default function Category({ name ,navigation, screen, icon, image, id }) {
    return (
        <TouchableOpacity style={styles.category}
            onPress={ () => {
                    navigation.navigate("ProductList", {
                        idCategorie: id
                    })
                }
            }>
            <View style={styles.item}>
                <View style={styles.image}>
                    <Image source={image} style={styles.logo}/>
                </View>
                <View >
                    <Text style={{ color: "#fff" }}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    category:{
        backgroundColor: "rgba(0,0,0,.25)",
        padding: "2%",
        marginBottom: 20,
        borderWidth: .4,
        width: "100%"
    },
    item:{
        flexDirection: "row",
        alignItems: "center"
    },
    image:{
        paddingRight: "2%",
    },
    logo:{
        width: 100,
        height:100,
        
    }
})