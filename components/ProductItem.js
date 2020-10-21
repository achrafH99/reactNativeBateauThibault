import React from 'react'
import { Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native'

export default function ProductItem({ name ,navigation, screen, icon }) {
    return (
        <TouchableOpacity style={styles.product}
            onPress={ () => {
                    // navigation.navigate(screen)
                }
            }>
            <View style={styles.item}>
                <View style={styles.image}>
                    <Image source={require('../assets/images/poulpe.png')} style={styles.logo}/>
                </View>
                <View style={styles.description} >
                    <View>
                        <Text>name</Text>
                    </View>
                    <View>
                        <Text>prix/prix x2</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderRadius: 30
    },
    description: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    },
    logo:{
        width: 50,
        height: 50,
    },
    image:{
        paddingRight: 2,
    }
})
