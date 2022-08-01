import { useState } from "react";
import "./calculator.scss";


const Calculator = () => {
  const [data, setdata] = useState("");

  const opr  = ['*','/','-','+']

  const value = (event) => {
    if (opr.includes(data.slice(-1))){
      if (opr.includes(event.target.value)){
        setdata(data.replace(data.slice(-1), event.target.value))
      }
      else{
        setdata(data + event.target.value)
      }
    }
    else if (!opr.includes(data.slice(-1)) || data === ''){
      setdata(data + event.target.value)
    }
  }

  const delete_last = () =>{
    setdata(data.slice(0,-1))
  }

  const addition = () => {
    setdata(eval(data))
  }

  return (
    <>
      <div className="calculator">
        <div className="container">
          <span>{data}</span>
          <button onClick={event => setdata(event.target.value)} className="clear" value={''}>AC</button>
          <button onClick={delete_last} value={'C'}>C</button>
          <button onClick={value} value={'/'}>/</button>
          <button onClick={value} value={'7'}>7</button>
          <button onClick={value} value={'8'}>8</button>
          <button onClick={value} value={'9'}>9</button>
          <button className="multiply" onClick={value} value={'*'}>x</button>
          <button onClick={value} value={'4'}>4</button>
          <button onClick={value} value={'5'}>5</button>
          <button onClick={value} value={'6'}>6</button>
          <button onClick={value} value={'-'}>-</button>
          <button onClick={value} value={'1'}>1</button>
          <button onClick={value} value={'2'}>2</button>
          <button onClick={value} value={'3'}>3</button>
          <button onClick={value} value={'+'}>+</button>
          <button onClick={value} value={'0'} className="zero">0</button>
          <button onClick={value} value={'.'}>.</button>
          <button onClick={addition}>=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
