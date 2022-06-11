import { TODO_REQUEST, TODO_REQUEST_FAILURE, TODO_REQUEST_SUCCESS } from "../Constants/TodosConstants"
import axios from 'axios'

const TodoAction = ()=> async(dispatch)=>{
    dispatch({type:TODO_REQUEST})
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    dispatch({type:TODO_REQUEST_SUCCESS , payload: res.data})

    }
    catch(error) {
        dispatch({type:TODO_REQUEST_FAILURE, payload:error.message})

    }


}


export default TodoAction