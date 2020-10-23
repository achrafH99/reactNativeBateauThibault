import React from 'react';
import Home from './screens/Home.js';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,CardStyleInterpolators  } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import { Provider } from 'react-redux';
import store from "./store/configureStore";
import ProductList from './screens/ProductList';
import CategoryList from './screens/CategoryList';
import  {SafeAreaProvider} from 'react-native-safe-area-context';
import Bateaux from './screens/Bateaux'
import Cart from './screens/Cart.js';
import Recettes from './screens/Recettes.js'
import Restaurants from './screens/Restaurants.js'
import Details from './screens/Details.js';
import Contact from './screens/Contact.js';


const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors:{
    primary: 'rgb(255, 45, 85)',
    background: '#09AFAD',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  }
};

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator  initialRouteName="Home" style={styles.container} screenOptions={{headerShown : false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Details} />
            <Stack.Screen name="ProductList" component={ProductList} options={{
              cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS    }}  />
            <Stack.Screen name="CategoryList" component={CategoryList} options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS     }}/>
            <Stack.Screen name="Bateaux" component={Bateaux}/>
            <Stack.Screen name="Cart" component={Cart}/>
            <Stack.Screen name="Recettes" component={Recettes}/>
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Restaurants" component={Restaurants}/>

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
