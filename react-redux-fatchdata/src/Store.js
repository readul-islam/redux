import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
const { default: TodoReducer } = require('./Services/Reducer/TodoReducer');
const store= createStore(TodoReducer,applyMiddleware(thunk))

export default store