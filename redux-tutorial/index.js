
const {createStore} = require('redux');

const increment = 'Increment'
const decrement = 'decrement'
const add_User = 'AddUser'
//STATE
const initialConuterState = {
    count: 0,
}
// ACTION-> object-> type, payload
const incrementCounter = () => {

    return {
        type: increment
    }
}
const decrementCounter = () => {
    return {
        type: decrement
    }
}

//reducer for counter
const counterReducer = (state = initialConuterState, action) => {
    switch (action.type) {
        case increment:
            return {
                ...state,
                count: state.count + 1
            }
      case decrement:
            return {
                ...state,
                count: state.count - 1
            }
 default:
            state;
    }

}


//store> getState -> state golor obosta dekte pabo , dispatch > kono akti action k dispatch korte parbo, subscribe > aitar madomo state output dekte parbo 

//creare store
const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})
//dispatch action

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())