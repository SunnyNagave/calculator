import { calculatorReducer } from "./reducers/calculatorReducer";
import { configureStore } from "@reduxjs/toolkit";

// Configuring redux store.
export const store = configureStore({
    reducer:{
        calculatorReducer
    }
})
