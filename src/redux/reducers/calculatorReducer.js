
import { createSlice } from "@reduxjs/toolkit"

// to setup intial state value
const initialState = {
    currEquation : "0",
    prevEquation : ""
}


const calculatorSlice = createSlice({
    name:"calculator",
    initialState:initialState,
    reducers:{
        // for pressing of "=" button
        equals:(state,action)=>{
            // this evaluates equation string
            const result = eval(state.currEquation);
            // this sets equation and result in the previous equation field
            state.prevEquation = state.currEquation.concat("=").concat(result);
            // this sets current equation field to 0
            state.currEquation = "0";
        },
        // for pressing of "AC" button, resets both state.
        clear:(state,action)=>{
            state.currEquation = "0";
            state.prevEquation = "";
        },
        // for pressing of number button which takes the number as payload and adds to current equation
        addNumber:(state,action)=>{
            // this is to remove first "0" from initialstate
            if(state.currEquation.length === 1 && state.currEquation === "0"){
                state.currEquation = action.payload;
            }else{
            state.currEquation = state.currEquation.concat(action.payload);
            }
        },
        // for pressing of operator button which takes the operator as payload and adds to current equation
        addOperator:(state,action)=>{
            const operators = ["+","-","*","/","%"];
            const lastIndex = state.currEquation.length-1;
            // if the current equation has operation at the last, it replaces that operation with new one.
            // eg. current eqn is "2+" and if you press "-" then the eqn will become "2-"
            if(operators.includes(state.currEquation[lastIndex])){
                let newEquation = state.currEquation.slice(0,lastIndex);
                state.currEquation = newEquation.concat(action.payload);
            }else{
                // if the current equation has number at last it simply concats the operation to current eqn.
                // eg. current eqn is "22+2" and you press "-", it will simply concat to give you "22+2-".
                state.currEquation = state.currEquation.concat(action.payload);
            } 
        },
        // for pressing the "C" button which will delete the last index of current equation
        // e.g. if your current eqn is "222" and you press "C", this will give "22".
        delete:(state,action)=>{
            if(state.currEquation.length >= 1){
                state.currEquation = state.currEquation.slice(0,state.currEquation.length-1);
            }
        }
    }
})

// exporting the required components to use it in program
export const calculatorReducer = calculatorSlice.reducer;

export const actions = calculatorSlice.actions;

export const calculatorSelector = (state) => state.calculatorReducer.currEquation;

