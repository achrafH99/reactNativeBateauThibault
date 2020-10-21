import React from 'react'
import Category from '../components/Category'
import Img from '../constants/image'
import categorie from '../constants/categorie'
import List from '../components/List';

export default function CategoryList({ navigation }) {
    return (
        <List navigation={navigation} list={categorie.map(({ name, screen }) => {
            return <Category key={name} navigation={navigation} name={name} image={Img.poulpe.uri} screen={screen} />
        })}/>
    )
}
