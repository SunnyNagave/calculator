
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currEquation : "0",
    prevEquation : ""
}

const calculatorSlice = createSlice({
    name:"calculator",
    initialState:initialState,
    reducers:{
        equals:(state,action)=>{
            const result = eval(state.currEquation);
            state.prevEquation = state.currEquation.concat("=").concat(result);
            state.currEquation = "0";
        },
        clear:(state,action)=>{
            state.currEquation = "0";
            state.prevEquation = "";
        },
        addNumber:(state,action)=>{
            if(state.currEquation.length === 1 && state.currEquation === "0"){
                state.currEquation = action.payload;
            }else{
            state.currEquation = state.currEquation.concat(action.payload);
            }
        },
        addOperator:(state,action)=>{
            const operators = ["+","-","*","/","%"];
            const lastIndex = state.currEquation.length-1;
            
            if(operators.includes(state.currEquation[lastIndex])){
                let newEquation = state.currEquation.slice(0,lastIndex);
                state.currEquation = newEquation.concat(action.payload);
            }else{
                state.currEquation = state.currEquation.concat(action.payload);
            } 
        },
        delete:(state,action)=>{
            if(state.currEquation.length >= 1){
                state.currEquation = state.currEquation.slice(0,state.currEquation.length-1);
            }
        }
    }
})

export const calculatorReducer = calculatorSlice.reducer;

export const actions = calculatorSlice.actions;

export const calculatorSelector = (state) => state.calculatorReducer.currEquation;

