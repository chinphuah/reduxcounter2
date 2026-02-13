import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from "./counterSlice";
//import { connect } from 'react-redux';

export function Counter () {

    const count=useSelector((state) => state.counter.value)

    const dispatch = useDispatch()

    const handleIncrement = () =>{
        dispatch(increment());
    }
    console.log(count)
    return (
        <div>
            <h2>Hello{count}</h2>
            <div>{count}</div>
           
            <div>
                <button onClick={()=>handleIncrement()}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>


                <button onClick={()=>dispatch(incrementByAmount(10))}>increment by amount</button>

            </div>
        </div>

    )
}

export default Counter;
