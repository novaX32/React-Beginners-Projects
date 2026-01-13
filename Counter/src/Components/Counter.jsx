import { useState } from "react";
import "../styles.css";

const Counter=()=>{
    const[count,setCount]=useState(0);
    const Increase=()=>setCount(prev=>prev+1)
    const Decrease=()=>setCount(prev=>prev-1)
    return (
      <>
        <div className="container">
          <h1>Counter App</h1>
          <h1 className="number">{count}</h1>
        </div>

        <section className="btns-container">
          <button onClick={Increase} className="increase">
            +
          </button>
          <button onClick={Decrease} className="increase">
            -
          </button>
        </section>
      </>
    );
}
export default Counter;