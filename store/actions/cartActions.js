export const addProduct = (data) => {
    return dispatch => {
        dispatch({
            type: "ADD_PRODUCT",
            value: data
        });
    };
};

export const removeProduct = (data) => {
    return dispatch => {
        dispatch({
            type: "REMOVE_PRODUCT",
            value: data
        });
    };
};

export const incrementQuantity = (data) => {
    return dispatch => {
        dispatch({
            type : "INCREMENT_QUANTITY",
            value: data
        })
    }
}

export const decrementQuantity = (data) => {
    return dispatch => {
        dispatch({
            type : "DECREMENT_QUANTITY",
            value: data
        })
    }
}

export const deleteProduct = (data) => {
    return dispatch => {
        dispatch({
            type : "DELETE_PRODUCT",
            value: data
        })
    }
}

export const deleteAllProducts = (data) => {
    return dispatch => {
        dispatch({
            type : "DELETE_ALL_PRODUCTS",
            value: data
        })
    }
}