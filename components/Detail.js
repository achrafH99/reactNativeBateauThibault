import React from 'react';
import { ImageBackground, SafeAreaView, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Button} from 'teaset';
import ListRow from 'teaset/components/ListRow/ListRow';
import TitlePage from './TitlePage';

const Detail = ({
    element
}) => (
    <ImageBackground source={images["background"]} style={styles.image}>
        <SafeAreaView>
             {/* <Card>
                <Card.Title>HELLO WORLD</Card.Title>
                <Card.Divider/>
                <Card.Image source={require('../assets/images/aquilon@2x.png')} />
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
            </Card> */}
        </SafeAreaView>
    </ImageBackground>
);

const styles = StyleSheet.create({
    container : {
        
    },
    image : {
        flex: 1,
        resizeMode: "cover",
        
    },
});

export default Detail;
