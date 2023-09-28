import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState= {
  todos: [ {id:1, text:"Hello World"}]
}


const UserSlice = createSlice({
    name:'userSlice', 
    initialState,
    reducers:{
        AddTodo:(state,action)=>{

            const todo = {
                id:nanoid(),
                text:action.payload
            }
            
            state.todos.push(todo)


        }
        ,
        RemoveTodo: (state,action)=>{
            state.todos = state.todos.filter((value)=> value.id!== action.payload)
        },
    }
})

export const {AddTodo, RemoveTodo} =UserSlice.actions;

export default UserSlice.reducer;

