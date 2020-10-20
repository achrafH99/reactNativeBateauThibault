let INITIAL_STATE = {
    home : [
        {
          title: "Produits et Promotions",
          componentPath: 'Detail',
          style:{
            width:"98%",
            backgroundColor: "black",
            // paddingHorizontal: 4,
            paddingVertical: 21,
            // borderRadius: 10,
            elevation: 8,
             opacity : 0.6,
             paddingVertical: 30,
             display: "flex",
             flexDirection: "row",
             alignItems: "center",
             justifyContent: "center",
             
             overflow: "visible"
             
          }
        },
        {
          title: "Bateaux",
          componentPath: 'Detail'
        },
        {
          title: "Restaurants",
          componentPath: 'Detail'
        },
        {
          title: "Recettes",
          componentPath: 'Detail'
        },
        {
          title: "Contact",
          componentPath: 'Detail'
        }
    ]
};

const reducer = (state = INITIAL_STATE, action) => {
    return state;
};

export default reducer;