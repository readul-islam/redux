import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstants"

export const counteIncrement =()=>{
    return{
        type: INCREMENT
    }
}
export const counteDecrement =()=>{
    return{
        type: DECREMENT
    }
}
export const counteReset =()=>{
    return{
        type: RESET
    }
}