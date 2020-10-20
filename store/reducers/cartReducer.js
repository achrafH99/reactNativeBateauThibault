let INITIAL_STATE = {
    products: []
};

let cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {...state, products: [...state.products, action.value]};
        case "REMOVE_PRODUCT":
            return {...state, products: state.products.filter(value=>value.name!=action.value.name)};
        default:
            return state;
    }
};

export default cartReducer;