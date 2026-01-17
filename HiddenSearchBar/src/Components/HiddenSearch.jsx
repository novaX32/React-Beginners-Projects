import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../Styles.css"


const HiddenSearch=()=>{
    const[show,setShow]=useState(false);
    const HandleClick=(e)=>{
        if(e.target.className==="container"){
            setShow(false)
        }

    }

    return (
      <>
       
        <div
          className="container"
          onClick={HandleClick}
          style={{ backgroundColor: "gray" }}
        >
          {show ? (
            <input type="text" placeholder="Enter Somthing" className="inp" />
          ) : (
            <FaSearch
              onClick={() => setShow(true)}
              className="search"
            ></FaSearch>
          )}
        </div>
      </>
    );
}
export default HiddenSearch;