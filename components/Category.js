import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'

export default function Category({ name ,navigation, screen, icon, image, id }) {
    return (
        // <TouchableOpacity style={styles.category}
            // onPress={ () => {
            //         navigation.navigate("ProductList", {
            //             idCategorie: id
            //         })
            //     }
            // }>
        //     <View style={styles.item}>
        //         <View style={styles.image}>
        //             <Image source={image} style={styles.logo}/>
        //         </View>
        //         <View >
        //             <Text style={{ color: "#fff" }}>{name}</Text>
        //         </View>
        //     </View>
        // </TouchableOpacity>

    <TouchableOpacity>
            {/* <Card.Image source={image} /> */}
            <Button
                // icon={<MaterialIcons name="visibility" size={24} color="white" />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width : "50%", alignSelf : "center"}}
                title='Go' 
                onPress={ () => {
                        navigation.navigate("ProductList", {
                            idCategorie: id
                        })
                    }
                }/>
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
// textAlign: "center",
 opacity : 0.9,
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
