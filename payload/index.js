const {createStore} = require('redux')
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//state = 0 or user
const initalCounterState = {
    count: 0,
    user:['readul islam']
}


// action 
const inc_add_user =(value)=>{
    return{
        type:INCREMENT,
        payload:value
    }
}

//create reduceer
const counterReducer = (state=initalCounterState, action)=>{
switch(action.type){
    case INCREMENT:
        return{
            user:[...state.user, action.payload],
            count:state.count + 10
        }
        default:
           state
           
}
}

// store
const store = createStore(counterReducer)
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(inc_add_user('rofik'))
store.dispatch(inc_add_user('rofik'))
store.dispatch(inc_add_user('rofik'))