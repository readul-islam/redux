const {createStore} = require('redux');
const { default: CounterReducer } = require('./services/reducers/CounterReducer');
const store = createStore(CounterReducer)
export default store;