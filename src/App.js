import './App.css';
import { useState } from 'react';
import * as math from 'mathjs';


function App() {
  
  const [displayValue, setDisplayValue] = useState("");
  const [input, setInput] =   useState("");
  const [result, setResult] = useState(0);
  
  function handleMath(event){
      setInput(event.target.value)
  }

  function handleButtonClick(value) {
    if (value === "AC") {
      setDisplayValue("");
      setResult(0);
    } else if (value === "=") {
      try {
        const result = math.evaluate(displayValue);
        setResult(result.toString());
        setDisplayValue("");
      } catch {
        setResult("Error");
        setDisplayValue("");
      }

    }else {
        if(value === "X"){
          setDisplayValue(displayValue + "*");
      }else {
          setDisplayValue(displayValue + value)
      }
    }
  }
  
  return (
    <>
      <div className='calculator'>
         {input}
      <div className='formularScreen' >
          <input value={displayValue} onChange={handleMath}/>
      </div>
      <div className='outPutScreen' >
        <p>{result}</p>
      </div>
      <div>
          
          <Numbers value="AC" handleButtonClick={handleButtonClick}  />
          <Numbers value="/"  handleButtonClick={handleButtonClick} />
          <Numbers value="X"  handleButtonClick={handleButtonClick}  />
          <Numbers value="7"  handleButtonClick={handleButtonClick} />
          <Numbers value="8"  handleButtonClick={handleButtonClick} />
          <Numbers value="9" className="square" handleButtonClick={handleButtonClick} />
          <Numbers value="-" className="square" handleButtonClick={handleButtonClick} />
          <Numbers value="4" className="square" handleButtonClick={handleButtonClick} />
          <Numbers value="5" className="square" handleButtonClick={handleButtonClick}  />
          <Numbers value="6" className="square" handleButtonClick={handleButtonClick}  />
          <Numbers value="+" className="square" handleButtonClick={handleButtonClick}/>
          <Numbers value="1" className="square" handleButtonClick={handleButtonClick} />
          <Numbers value="2" className="square" handleButtonClick={handleButtonClick}  />
          <Numbers value="3" className="square" handleButtonClick={handleButtonClick}  />
          <Numbers value="0" className="square" handleButtonClick={handleButtonClick}  />
          <Numbers value="." className="square" handleButtonClick={handleButtonClick}  />
          <Numbers value="=" className="square" handleButtonClick={handleButtonClick}  />
      </div>
     
    </div>
    <div className='author'>
          Design and Coded by <br />
          <a href='http://ibadulkarim.co/' >Ibrahim Abdulkarim</a>
          
      </div>
  </>
  );
}

function Numbers({value, handleButtonClick}){
  
 

  function handleClick(){
   
      handleButtonClick(value)
    
  }
  
  return (
    <button onClick={handleClick}>{value}</button>
  )
}

export default App;
