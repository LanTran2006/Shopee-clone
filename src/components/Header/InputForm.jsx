import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputForm({ categories }) {
  const [key,setKey]=useState('')
  const navigate=useNavigate()
  let handle_submit=()=>{
     navigate('/search/'+key)
     setKey('')
  }
  return (
    <section className="inputform">
      <form onSubmit={handle_submit}>
        <input value={key} onChange={e=>setKey(e.target.value)} placeholder="Search in this shop" type="text" />
        <div>
          <p>in This Shop</p>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <ul>
        {categories.slice(0,10).map((item,index) => (
          <li onClick={()=>navigate('/categories/'+item)} key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default InputForm;
