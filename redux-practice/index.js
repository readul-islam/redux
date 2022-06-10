const {createStore} = require('redux')

//constants for state 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// initialize state 
const initailCounterState = {
    counte: 0,
}
// Action 

const inCrementCounter =()=>{
    return{
        type: INCREMENT,
    }
}

const deCrementCounter =()=>{
    return{
        type: INCREMENT,
    }
}
// create reducer 

const counterReducer =(state=initailCounterState, action)=>{


    switch (action.type) {  
        case INCREMENT:
            return{
                ...state,
                counte : state.counte + 1
            }
           
    
        default:
           state;
    }

}
//create store for reducer
const store = createStore(counterReducer)
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(inCrementCounter())