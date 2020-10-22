import React, { Component } from 'react'
import { Text, StyleSheet, Image, ImageBackground, View } from 'react-native'
import { Card } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../services/images";
import dataDetails from "../constants/details"

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {title : "Homard en chaud-froid",
            image : require("../assets/images/homardRecette.png"),
            subTitle : "22/08/1992",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
        }

    }

    componentDidMount() {
        if (this.props.route.params.type === "bateaux") this.setState( { data: dataDetails.bateaux[this.props.route.params.index]})
        if (this.props.route.params.type === "recettes") this.setState( { data: dataDetails.recettes[this.props.route.params.index]})
        if (this.props.route.params.type === "restaurants") this.setState( { data: dataDetails.restaurants[this.props.route.params.index]})
    }

    render() {
        return (
            <ImageBackground source={images["background"]} style={styles.image} >
                <SafeAreaView style={styles.details}>
                    <Card containerStyle={{ padding: 0, width: "90%", height: "80%", borderRadius: 25 }}>
                        <Image source={this.state.data.image} style={{ width: "100%", borderTopLeftRadius: 25, borderTopRightRadius: 25 }}></Image>
                        <View style={styles.text}>
                            <View>
                                <Text style={styles.title}>{this.state.data.title}</Text>
                                <Text style={styles.subtitle}>{this.state.data.subTitle}</Text>
                            </View>
                            <Text style={styles.description}>{this.state.data.description}</Text>
                        </View>
                    </Card>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        backgroundColor: "white",
    }
    ,
    details: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    text: {
        height: "55%",
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
        fontSize: 15,
        fontWeight: "100",
        textAlign: "center",
    }
})

export default Details
