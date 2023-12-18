import {createReducer} from "@reduxjs/toolkit";
const initialState = {
   
}

 const ingredientReducer = createReducer(initialState,{
    IngredientRequest:(state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    IngredientSuccess:(state,action)=>{
        state.loading = false
        state.lists= action.payload
        state.isAuthenticated = true
    },
    IngredientFail:(state,action)=>{
        state.loading = false
        state.usererror = action.payload
        state.isAuthenticated = false
    }
   

})



export default ingredientReducer