import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counteDecrement, counteIncrement, counteReset } from '../services/actions/CounterAction';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const IncreaseHandler= ()=>{
        dispatch(counteIncrement())
    }
    const decreaseHandler= ()=>{
        dispatch(counteDecrement())
    }
    const resetHandler= ()=>{
        dispatch(counteReset())
    }
    console.log(count);
    return (
        <div>
           <p>count:{count}</p> 
           <button onClick={IncreaseHandler}>Increase</button>
           <button onClick={decreaseHandler}>Decrease</button>
           <button onClick={resetHandler}>Reset</button>
        </div>
    );
};

export default Counter;