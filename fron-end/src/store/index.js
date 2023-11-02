import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth"


const store = configureStore({
    // tao gian hang
    reducer:{
        auth: AuthReducer

    }
})


export default store