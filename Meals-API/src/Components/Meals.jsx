import axios from "axios";
import "../Styles.css"
import { useEffect, useState } from "react";
const Meals=()=>{
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios
          .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
          .then((res) => setData(res.data.meals))
          .catch((err)=>console.log(err))
          
    },[]);
    const ItemsList = data.map(({ strMeal, strMealThumb, idMeal }) => (
      <section key={idMeal} className="card">
        <img src={strMealThumb} alt="" />
        <section className="content">
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </section>
      </section>
    ));
    return(
        <div className="items-container">
            {ItemsList}

        </div>
    )
}
export default Meals;