import React from 'react'
import { useDispatch } from "react-redux";
import { reset } from '../store/counterSlice';


export default function CounterReset() {
  const dispatch = useDispatch();

  function clickHandler() {
      dispatch(reset());
  }
  
  return (
    <div>
      <div>
      <button onClick={() => clickHandler()}>reset</button>
    </div>
    </div>
  )
}
