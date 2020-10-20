import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import cartReducer from "./reducers/cartReducer";
import reducer from "./reducers/buttonLinksReducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    cart: cartReducer,
    buttonLinks: reducer
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;
