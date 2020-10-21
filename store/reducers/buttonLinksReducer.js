import {Ionicons,Fontisto, Foundation, AntDesign,Entypo} from "@expo/vector-icons";
import React from 'react';

let INITIAL_STATE = {
    home : [
        {
          title: "Produits et Promotions",
          componentPath: 'Detail',
          style:{
            width:"98%",
            // paddingHorizontal: 4,
            paddingVertical: 21,
            backgroundColor: "#0100A7",
            borderRadius: 15,
            elevation: 8,
             opacity : 0.8,
             paddingVertical: 30,
             display: "flex",
             flexDirection: "row",
             alignItems: "center",
             justifyContent: "space-around",
             paddingHorizontal:5,
             overflow: "visible"

          },
          icon:<AntDesign name="tagso" size={28} color="white" />

        },
        {
          title: "Bateaux",
          componentPath: 'Detail',
          icon: <Ionicons name="md-boat" size={28} color="white" />
        },
        {
          title: "Restaurants",
          componentPath: 'Detail',
          icon: <Ionicons name="md-restaurant" size={28} color="white" />
        },
        {
          title: "Recettes",
          componentPath: 'Detail',
          icon:<Entypo name="menu" size={28} color="white" />
        },
        {
          title: "Contact",
          componentPath: 'Detail',
          icon:<Ionicons name="md-contact" size={28} color="white" />
        }
    ]
};

const reducer = (state = INITIAL_STATE, action) => {
    return state;
};

export default reducer;
