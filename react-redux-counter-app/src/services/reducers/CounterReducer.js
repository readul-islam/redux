import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstants";

const intailCountstate = {
    count: 0,
}

 const CounterReducer=(state=intailCountstate, action)=>{

 switch(action.type){
    case INCREMENT:
        return{
            count: state.count + 1
        }
    case DECREMENT:
        return{
            count: state.count - 1
        }
    case RESET:
        return{
            count:  0
        }

    default:
        return state
 }

}
export default CounterReducer;