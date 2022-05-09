import {ADD_PRODUCTS} from './product.types'

export const productInitialState=[];

const productReducer=(state=productInitialState,action)=>{
    switch(action.type){
        case ADD_PRODUCTS: 
            return[...state, action.payload];
                default:
                    return state;
    }
};
    export default productReducer