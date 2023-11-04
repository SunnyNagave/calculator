import "./CalculatorBody.css";
import {useSelector,useDispatch} from "react-redux";
import { actions } from "../../redux/reducers/calculatorReducer";

export default function CalculatorBody(){
    const dispatch = useDispatch();
    return(
        <>
        <div className="row justify-content-center">
                <div className="col-3 padbottom px-1">
                    {/* on click clear action from reducer will be executed */}
                    <button onClick={()=> dispatch(actions.clear())} className="btn btn-outline-danger stdsize">AC</button>
                </div>
                <div class="col-3 padbottom px-1">
                    {/* on click delete action from reducer will be executed */}
                    <button onClick={()=> dispatch(actions.delete())} className="btn btn-outline-danger stdsize">C</button>
                </div> 
                <div class="col-3 padbottom px-1">
                    {/* on click addOperator action with payload - % will be executed and similarly for other operations */}
                    <button onClick={()=> dispatch(actions.addOperator("%"))} className="btn btn-outline-warning stdsize">%</button>
                </div>
                <div class="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addOperator("/"))} className="btn btn-outline-warning stdsize">/</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-3 padbottom px-1">
                    {/* on click addNumber action with payload - 7 will be executed and similarly for other numbers */}
                    <button onClick={()=> dispatch(actions.addNumber("7"))} className="btn btn-outline-primary stdsize">7</button>
                </div>
                <div className="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addNumber("8"))} className="btn btn-outline-primary stdsize">8</button>
                </div>
                <div className="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addNumber("9"))} className="btn btn-outline-primary stdsize">9</button>
                </div>
                <div className="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addOperator("*"))} className="btn btn-outline-warning stdsize">*</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addNumber("4"))} className="btn btn-outline-primary stdsize">4</button>
                </div>
                <div className="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addNumber("5"))} className="btn btn-outline-primary stdsize">5</button>
                </div>
                <div className="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addNumber("6"))} className="btn btn-outline-primary stdsize">6</button>
                </div>
                <div className="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addOperator("-"))} className="btn btn-outline-warning stdsize">-</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addNumber("1"))} className="btn btn-outline-primary stdsize">1</button>
                </div>
                <div className="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addNumber("2"))} className="btn btn-outline-primary stdsize">2</button>
                </div>
                <div className="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addNumber("3"))} className="btn btn-outline-primary stdsize">3</button>
                </div>
                <div className="col-3 padbottom px-1">
                    <button onClick={()=> dispatch(actions.addOperator("+"))} className="btn btn-outline-warning stdsize">+</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 px-1">
                    <button onClick={()=> dispatch(actions.addNumber("0"))} className="btn btn-outline-primary stdsize">0</button>
                </div>
                <div className="col-3 px-1">
                    <button onClick={()=> dispatch(actions.addNumber("."))} className="btn btn-outline-primary stdsize">.</button>
                </div>
                <div className="col-3 px-1">
                    {/* on click equals action from reducer will be executed */}
                    <button onClick={()=> dispatch(actions.equals())} className="btn btn-outline-success stdsize">=</button>
                </div>
            </div>
        </>
    )
}
