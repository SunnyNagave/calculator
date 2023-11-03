import { calculatorReducer } from "./reducers/calculatorReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        calculatorReducer
    }
})