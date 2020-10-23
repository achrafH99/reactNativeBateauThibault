import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default function Category({ name ,navigation, screen, icon, image, id }) {
    return (

    <TouchableOpacity
                style={styles.category}
                title='Go' 
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
                    <Text style={{ color: "#194d82",fontSize:22,fontWeight:"bold" }}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    category:{
        backgroundColor: "white",
    borderColor:"#023d52",
    borderWidth: 2,
    borderRadius: 15,
    elevation: 8,
 opacity : 0.9,
        padding: "2%",
        marginBottom: 20,
        borderWidth: .4,
        width: "90%",
        
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
