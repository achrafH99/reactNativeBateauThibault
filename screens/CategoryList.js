import React from 'react'
import Category from '../components/Category'
import Img from '../constants/image'
import categorie from '../constants/categorie'
import List from '../components/List';
import { SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';

export default function CategoryList({ navigation }) {
    return (
        <SafeAreaView>
                <Header
                    containerStyle = {{backgroundColor: "#008cdc",height : 100, paddingBottom:0, marginBottom: 0}}
                    centerComponent={{ text: 'Categories', style: { color: '#fff', fontSize:32 }}}
                />
                    <List navigation={navigation} list={categorie.map(({ name, screen, id }) => {
            return <Category key={name} navigation={navigation} name={name} image={Img.poulpe.uri} screen={screen} id={id} />
        })}/>
        </SafeAreaView>
    )
}
