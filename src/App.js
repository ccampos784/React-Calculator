import React, {useState} from 'react';
import logo from './logo.svg';
import Screen from './components/Screen';
import Button from './components/Button';
import calculate from "./logic/calculate";
import './App.css';

function App() {
  const [calcState, setCalcState] = useState({
    total: null,
    next: null,
    operation: null
  });

  const handleClick = text => () => {
      setCalcState(calculate(calcState, text))
  }

  return (
    <div className="App">
        <div className="h-screen bg-black grid grid-cols-4">
          <Screen value={calcState.next || calcState.total || "0"}/>

          {/* Row 1 */}
          <Button text="AC" clickHandler={handleClick}/>
          <Button text="±"  clickHandler={handleClick}/>
          <Button text="%"  clickHandler={handleClick}/>
          <Button text="÷"  clickHandler={handleClick} color='orange'/>

          {/* Row 2 */}
          <Button text="7" clickHandler={handleClick}/>
          <Button text="8" clickHandler={handleClick}/>
          <Button text="9" clickHandler={handleClick}/>
          <Button text="X" clickHandler={handleClick} color='orange'/>      

          {/* Row 3 */}
          <Button text="4" clickHandler={handleClick}/>
          <Button text="5" clickHandler={handleClick}/>
          <Button text="6" clickHandler={handleClick}/>
          <Button text="−" clickHandler={handleClick} color='orange'/>

          <Button text="1" clickHandler={handleClick}/>
          <Button text="2" clickHandler={handleClick}/>
          <Button text="3" clickHandler={handleClick}/>
          <Button text="+" clickHandler={handleClick} color='orange'/>  

          <Button width="2" clickHandler={handleClick} text="0" />
          <Button text="." clickHandler={handleClick}/>
          <Button text="=" clickHandler={handleClick} color='orange'/>                                  
        </div>
    </div>
  );
}

export default App;
