import CalculatorScreen from '../CalculatorScreen/CalculatorScreen'
import CalculatorBody from '../CalculatorBody/CalculatorBody'
import './CalculatorFrame.css'

export default function CalculatorFrame(){
    return(
        <>
            <div className="calbody">
                <CalculatorScreen/>
                <CalculatorBody/>
            </div>
        </>
    )
}