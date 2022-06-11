import { TODO_REQUEST, TODO_REQUEST_FAILURE, TODO_REQUEST_SUCCESS } from "../Constants/TodosConstants"

const intailTodoState = {
    todos: [],
    isLoading: false,
    error:null
}
const TodoReducer = (state=intailTodoState, action) =>{
 switch(action.type){
  case TODO_REQUEST:
    return{
        ...state,
        isLoading: true,

    }
  case TODO_REQUEST_SUCCESS:
    return{
        ...state,
        todos:action.payload,
        isLoading: false

    }
  case TODO_REQUEST_FAILURE:
    return{
        ...state,
        isLoading: false,
        error: action.payload

    }



default:
    return state

 }
}
export default TodoReducer