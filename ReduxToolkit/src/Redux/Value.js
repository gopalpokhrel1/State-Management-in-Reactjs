import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './Slice/slice'

const  store = configureStore({
    reducer : UserSlice
})

export default store;