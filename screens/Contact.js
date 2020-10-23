import React from 'react'
import { Text, StyleSheet, Image, ImageBackground, View } from 'react-native'
import { Avatar, Card } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../services/images";

function Contact() {
    return (
        <ImageBackground source={images["background"]} style={styles.image} >
            <SafeAreaView style={styles.details}>
                <Card containerStyle={{ padding: 0, width: "90%", borderRadius: 25 }}>
                    <View style={styles.avatar}>
                        <Avatar
                            rounded
                            size="xlarge"
                            ImageComponent={()=> {
                                return <Image source={require("../assets/images/TIG.png")} style={{ width: "100%", flexDirection: "row", justifyContent: "center" }} />
                            }}
                        />
                        <View style={styles.text}>
                            <View>
                                <Text style={styles.title}>Le bateau de Thibault</Text>
                                <Text style={styles.subtitle}>06.63.99.99.78</Text>
                                <Text style={styles.subtitle}>le bateau de Thibault</Text>
                                <Text style={styles.subtitle}>www.facebook.com/lebateaudethibault</Text>
                            </View>
                            <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                        </View>
                    </View>
                </Card>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    avatar: {
        paddingTop: "5%",
        alignItems: "center"
    },
    text: {
        flexDirection: "column",
        justifyContent: "space-between",
    }
    ,
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        padding: "5%"
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "100",
        textAlign: "center",
        color: "gray"
    },
    description: {
        paddingTop: 25,
        paddingBottom: 25,
        marginLeft:10,
        marginRight:10,
        fontSize: 15,
        fontWeight: "100",
        textAlign: "center",
    }
})

export default Contact
