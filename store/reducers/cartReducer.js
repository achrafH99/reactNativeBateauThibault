import { Value } from "react-native-reanimated";

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
            return  {...state, products: [...state.products.filter(value => value.product.id != action.value.product.id),{quantity : action.value.quantity + 1, product : action.value.product}] };
        case "DECREMENT_QUANTITY" :
            return  {...state, products: [...state.products.filter(value => value.product.id != action.value.product.id),{quantity : action.value.quantity - 1, product : action.value.product}] };
        default:
            return state;
    }
};

export default cartReducer;