import { Value } from "react-native-reanimated";
import { incrementQuantity } from "../actions/cartActions";

let INITIAL_STATE = {
    products: []
};

let cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {...state, products: [...state.products, action.value]};
        case "REMOVE_PRODUCT":
            return {...state, products: state.products.filter(value=>value.product.id!=action.value.product.id)};
        case "INCREMENT_QUANTITY" :
            return  {...state, products: increment(state.products,action.value) };
        case "DECREMENT_QUANTITY" :
            return  {...state, products: decrement(state.products,action.value) };
        case "DELETE_PRODUCT" : 
            return {...state, products: deleteProduct(state.products,action.value)}
        default:
            return state;
    }
};

const increment = (array,id) => {
    const arr = [];
    array.forEach(element => {
        if(element.product.id == id){
            element.quantity += 1;
        }
        arr.push(element);
    });
    return arr;
}

const decrement = (array,id) => {
    const arr = [];
    array.forEach(element => {
        if(element.product.id == id){
            element.quantity -= 1;
        }
        arr.push(element);
    });
    return arr;
}

const deleteProduct = (array,id) => {
    let arr=[];
    arr = array.filter(value => value.product.id != id)
    return arr;
}

export default cartReducer;