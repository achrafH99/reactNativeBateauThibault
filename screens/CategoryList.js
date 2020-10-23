import React from 'react'
import Category from '../components/Category'
import Img from '../constants/image'
import categorie from '../constants/categorie'
import List from '../components/List';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import images from "../services/images";

export default function CategoryList({ navigation }) {
    return (
        <SafeAreaView>
                <Header
                    containerStyle = {{backgroundColor: "black",height : 100, paddingBottom:0, marginBottom: 0}}
                    centerComponent={{ text: 'Categories', style: { color: '#fff', fontSize:32 }}}
                />
                <ImageBackground source={images["background"]} style={styles.image}>
                        <List navigation={navigation}  list={categorie.map(({ name, screen, id }) => {
                            return <Category key={name} navigation={navigation} name={name} image={Img.poulpe.uri} screen={screen} id={id} />
                        })}/>
                </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    product :{
        padding: 3,
        marginLeft : 14
    },
    image: {
        // flex: 1,
        resizeMode: "cover",
        height: "100%",
        justifyContent: "center",
        paddingTop : 30
      }
})
