import './CalculatorScreen.css';
import {useSelector} from "react-redux";

export default function CalculatorScreen(){
    // for importing the value of both the fields
    const currEquation = useSelector((state)=> state.calculatorReducer.currEquation);
    const prevEquation = useSelector((state)=> state.calculatorReducer.prevEquation);
    return(
        <>
            <div className="row justify-content-center px-1">
                <div className="col-12 preRes">
		            <div className="text-field">
			            {prevEquation}
		            </div>
		        </div>
            </div>
            <div className="row justify-content-center px-1">
                <div className="col-12 curRes">
		            <div className="text-field">
			            {currEquation}
		            </div>
		        </div>
            </div>
        </>
    )
}
