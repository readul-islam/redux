const {createStore,combineReducers,applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');
// PRODUCTS
const getProducts = 'GET_PRODUCTS';
const ADDProduct = 'ADD_PRODUCT';
//state
const intailProductsState={
    products: ['mango, banna, fruitcake'],
    numberOfProducts: 3
}
//action
const getAllProducts = ()=>{
   return{
    type:getProducts
   }
}
const addProduct = (value)=>{
return{
  type:ADDProduct,
   payload:value
}
}
// create reducer 

const createReducer = (state=intailProductsState, action)=>{

    switch(action.type) {
        case getProducts:
            return{
                ...state,
            }
            case ADDProduct:
                return{
                    products:[...state.products, action.payload],
                    numberOfProducts:state.numberOfProducts + 1
                }
                default:
                    return state
    }

}
const get_Cart = 'GET_CART';
const add_Cart = 'ADD_CART';
//state
const intailCartState={
    products: ['mango', ' banna'],
    numberOfProducts: 2
}
//action
const getcart = ()=>{
   return{
    type:getProducts
   }
}
const addCart = (value)=>{
return{
  type:ADDProduct,
   payload:value
}
}
// create reducer 

const cARTReducer = (state=intailCartState, action)=>{

    switch(action.type) {
        case get_Cart:
            return{
                ...state,
            }
            case add_Cart:
                return{
                    products:[...state.products, action.payload],
                    numberOfProducts:state.numberOfProducts + 1
                }
                default:
                    return state
    }

}
//multiple reducer add 

const rootReducr = combineReducers({
    carR:cARTReducer,
    createR:createReducer
})

//store 
const store = createStore(rootReducr, applyMiddleware(logger))
store.subscribe(()=>{
    console.log(store.getState().carR);
})
store.dispatch(getcart())