import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { RemoveTodo } from '../Redux/Slice/slice';



export default function Display() {

    const data= useSelector((state)=> state.todos)
    const dispatch = useDispatch();

  return (
    <>
     {
        data.map((value)=>{
            return(
                <div>
                    <li key={value.id}>{value.text}
                    <button onClick={()=> dispatch(RemoveTodo(value.id))}>Delete</button>
                    </li>
                </div>
            )
        })
     } 
    </>
  )
}
