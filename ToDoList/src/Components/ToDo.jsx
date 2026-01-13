import { useState } from "react";
import "../Styles.css"

const ToDo=()=>{
    const[inpTask,setInpTask]=useState("")
    const[task,setTask]=useState([]);
    const AddTask=()=>{
        if(inpTask.trim()){
            setTask([...task,inpTask])
        }
        setInpTask("")
    };
    const RemoveTask=(id)=>{
        setTask(task.filter((_,i)=>i!=id));
    }

    return (
    
       
        <div className="container">
            <h1>Todo List</h1>
          <input
            type="text"
            value={inpTask}
            onChange={(e) => setInpTask(e.target.value)}
            className="inp"
          />
          <button onClick={AddTask} className="inpBtn">
            ADD
          </button>
          <ul>
            {task.map((item, id) => (
              <li key={id} className="todo">
                <span>{item}</span>
                <button onClick={() => RemoveTask(id)} className="todoBtn">
                  DELETE
                </button>
              </li>
            ))}
          </ul>
        </div>
      
    );
}
export default ToDo;