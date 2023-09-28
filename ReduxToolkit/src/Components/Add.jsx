import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../Redux/Slice/slice';


export default function Add() {

    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const handleform =(e)=>{
        e.preventDefault();
        dispatch(
             AddTodo(input)
        )
        setInput('');
    }
  return (
    <>

    <form onSubmit={handleform}>
        <input type="text" placeholder='Enter the task' value={input} onChange={(e)=> setInput(e.target.value)} />
        <button type='submit'>Add</button>
    </form>
      
    </>
  )
}
