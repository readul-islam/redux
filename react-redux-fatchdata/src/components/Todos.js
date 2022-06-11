import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import TodoAction from '../Services/Actions/TodoAction';


const Todos = () => {
    const {isLoading, todos, error} = useSelector(state => state);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(TodoAction())
    },[])
    return (
        <div>
            {isLoading && <p>Loading...</p> }
            {error && <p></p> }
            {isLoading && <h3>{error?.message}</h3> }
            <section>
        {todos && todos.map(todo => <h1 key={todo.id}>{todo.title}</h1> ) }

            </section>
        </div>
    );
};

export default Todos;