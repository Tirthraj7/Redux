import {combineReducers} from 'react';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
});
    export default rootReducer;