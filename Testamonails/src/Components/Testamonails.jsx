import { useState } from "react";
import "../style.css"

const Testamonails=()=>{
   
    const[current,setCurrent]=useState(0)

    

     const testi = [
       {
         quote: "This is the best product I've ever used!",
         author: "Jane Doe",
       },
       {
         quote: "I highly recommend this product to everyone!",
         author: "John Smith",
       },
       {
         quote: "This product has completely changed my life!",
         author: "Bob Johnson",
       },
     ];

     const HandlePrev=()=>{
        setCurrent((current+testi.length-1)%testi.length)
     }
     const HandleNext=()=>{
        setCurrent((current+1)%testi.length)

     }
    return (
      <div>
        <div className="testimonials">
          <div className="testimonials-quote">{testi[current].quote}</div>

          <div className="testimonials-author">{testi[current].author}</div>

          <div className="testimonials-nav">
            <button onClick={HandlePrev}>Prev</button>
            <button onClick={HandleNext}>Next</button>
          </div>
        </div>
      </div>
    );
}
export default Testamonails;