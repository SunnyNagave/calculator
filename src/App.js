import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CalculatorFrame from './components/CalculatorFrame/CalculatorFrame';



function App() {
  return (
    <>
      <Provider store={store}>
          <h1>Calculator</h1>
          <CalculatorFrame/>
          <div className="table"></div>
      </Provider>
    </>
  );
}

export default App;
