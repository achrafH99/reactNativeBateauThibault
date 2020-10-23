import {Ionicons,Fontisto, Foundation, AntDesign,Entypo} from "@expo/vector-icons";
import React from 'react';
import {Image} from 'react-native'

let INITIAL_STATE = {
    home : [
        {
          title: "Produits et Promotions",
          componentPath: 'CategoryList',
          style:{
            width:"94%",
            paddingVertical: 21,
            backgroundColor: "white",
            borderColor:"white",
            borderWidth: 2,
            borderRadius: 15,
            elevation: 8,
             paddingVertical: 30,
             display: "flex",
             flexDirection: "row",
             alignItems: "center",
             justifyContent: "center",
             paddingHorizontal:5,
             overflow: "visible"

          },
          icon:<Entypo name="shop" size={28} color="#008cdc" />

        },
        {
          title: "Bateaux",
          componentPath: 'Bateaux',
          icon: <Ionicons name="md-boat" size={28} color="#008cdc" />
        },
        {
          title: "Restaurants",
          componentPath: 'Restaurants',
          icon: <Ionicons name="md-restaurant" size={28} color="#008cdc" />
        },
        {
          title: "Recettes",
          componentPath: 'Recettes',
          icon:<Entypo name="menu" size={28} color="#008cdc" />
        },
        {
          title: "Contact",
          componentPath: 'Contact',
          icon:<Ionicons name="md-contact" size={28} color="#008cdc" />
        }
    ],
    bateaux : [
      {
        title: "De la Brise",
        componentPath: 'Detail',
        index: 0,
        image:require('../../assets/images/deLaBrise.png')

      },
      {
        title: "Saphir",
        componentPath: 'Detail',
        index: 1,
        image:require('../../assets/images/saphir.png')
      },
      {
        title: "Gast Micher",
        componentPath: 'Detail',
        index: 2,
        image:require('../../assets/images/gastMicher.png')
      },
      {
        title: "Aquilon",
        componentPath: 'Detail',
        index: 3,
        image: require('../../assets/images/aquilon.png'),
      }
    ],
    recettes : [
      {
        title: "Homard",
        componentPath: 'Detail',
        index: 0,
        image:require('../../assets/images/homardRecette.png')

      },{
        title: "St Jacques",
        componentPath: 'Detail',
        index: 1,
        image:require('../../assets/images/saintJacques.png')

      },{
        title: "Bar",
        componentPath: 'Detail',
        index: 2,
        image:require('../../assets/images/barRecette.png')

      },{
        title: "Tourteau",
        componentPath: 'Detail',
        index: 3,
        image:require('../../assets/images/poulpe.png')

      }

    ],
    restaurants :[
      {
        title: "Bistrot des Gascons",
        componentPath: 'Detail',
        index:0,
        image:require('../../assets/images/barRecette.png')

      },{
        title: "Les fous de l'île",
        componentPath: 'Detail',
        index:1,
        image:require('../../assets/images/barRecette.png')

      },{
        title: "Bistrot Landais",
        componentPath: 'Detail',
        index:2,
        image:require('../../assets/images/barRecette.png')

      },{
        title: "Villa 9-Trois",
        componentPath: 'Detail',
        index:3,
        image:require('../../assets/images/barRecette.png')

      },{
        title: "Bistrot du Sommelier",
        componentPath: 'Detail',
        index:4,
        image:require('../../assets/images/barRecette.png')

      },{
        title: "Devenez partenaire!",
        componentPath: 'Contact',
        image:require('../../assets/images/barRecette.png')

      },

    ]
};


const reducer = (state = INITIAL_STATE, action) => {
    return state;
};

export default reducer;
