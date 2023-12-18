import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";
import ingredientReducer from "./reducer/ingredient";

const store = configureStore({
    reducer:{
        user : loginReducer,
        lists: ingredientReducer
    }
});

export default store