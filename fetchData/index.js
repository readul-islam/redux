const { default: axios } = require('axios');
const {createStore,applyMiddleware} = require('redux');
const thunk = require('redux-thunk').default
const GET_REQUEST_TODOS = 'GET_REQUEST_TODOS';
const GET_REQUEST_SUCCESS = 'GET_REQUEST_SUCCESS';
const GET_REQUEST_FAILED = 'GET_REQUEST_FAILED';

//state
const instailTodoState={
    todos:[],
    isLoading:false,
    error:null,
}
//action
const getRequest = ()=>{
return{
    type:GET_REQUEST_TODOS
}
}
const getRequestSuccess = (value)=>{
    return {
        type:GET_REQUEST_SUCCESS,
    payload:value
    }

}
const getRequestFailed = (value)=>{
    return {
        type:GET_REQUEST_FAILED,
    payload:value
    }

}
//create reducer

const todosReducer =(state=instailTodoState, action)=>{

switch(action.type){
        case GET_REQUEST_TODOS:
            return{
                ...state,
                isLoading:true
            }
        case GET_REQUEST_SUCCESS:
            return{
                todos:[...state.todos, action.payload],
                isLoading:false,
                error:null
            }
        case GET_REQUEST_FAILED:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
            default:
                return state
}

}

const fetchData =()=>{
    return (dispatch)=>{
        dispatch(getRequest())
        axios.get('https://jsonplaceholder.typicode.com/todo')
        .then(res => {
            const data = res.data
            const titles = data.map(d => d.title)
            dispatch(getRequestSuccess(titles))
        })
        .catch(error=> {
            // console.log(error);
            dispatch(getRequestFailed(error.message))
        })
            
        
    }
}

const store = createStore(todosReducer, applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(fetchData())