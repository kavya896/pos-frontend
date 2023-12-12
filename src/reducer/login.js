import {createReducer} from "@reduxjs/toolkit";
const initialState = {
    isAuthenticated:false
}

 const loginReducer = createReducer(initialState,{
    LoginRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    LoginSuccess:(state,action)=>{
        state.loading = false
        state.user= action.payload
        state.isAuthenticated = true
    },
    LoginFail:(state,action)=>{
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
    },
   

})



export default loginReducer