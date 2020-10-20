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
