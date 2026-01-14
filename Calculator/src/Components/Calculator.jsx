import { useState } from "react";
import "../Style.css"

const Calculator=()=>{
    const[input,setInput]=useState("");
    const HandleClear=()=>{
        setInput("")
    }

    const HandleCalculate=()=>{
        const result=eval(input);
        setInput(result)
    }
    const Display=(value)=>{
        setInput(input+value);

    }
    return (
      <div>
        <form className="calculator">
            <input className="value" type="text" value={input} />
          <button  type="button" onClick={()=>Display("7")}>7</button>
          <button type="button" onClick={()=>Display("8")}>8</button>
          <button type="button" onClick={()=>Display("9")}>9</button>
          <button type="button" onClick={()=>Display("/")}>/</button>

          <button type="button" onClick={()=>Display("4")}>4</button>
          <button type="button" onClick={()=>Display("5")}>5</button>
          <button type="button" onClick={()=>Display("6")}>6</button>
          <button type="button" onClick={()=>Display("*")}>*</button>

          <button type="button" onClick={()=>Display("1")}>1</button>
          <button type="button" onClick={()=>Display("2")}>2</button>
          <button type="button" onClick={()=>Display("3")}>3</button>
          <button type="button" onClick={()=>Display("+")}>+</button>
          <button type="button" onClick={()=>Display("0")}>0</button>
          <button type="button" onClick={()=>Display("-")}>-</button>

          <button type="button" onClick={HandleClear}>Clear</button>
          <button type="button" onClick={HandleCalculate}>Result</button>
        </form>
       
      </div>
    );
};
export default Calculator;