import React from "react";
import './Sidebar.scss'
import { useDispatch } from "react-redux";
import { toggle } from "../../store/Sidebar";
import { CATEGORIES } from "../../utils/type";
import { useNavigate } from "react-router-dom";
function Sidebar({categories,active}) {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  return (
    <aside className={active ? 'active' : null}>
      <header>
        <h4>ALL CATEGORIES</h4>
        <i onClick={()=>dispatch(toggle(false))} className="fa-solid fa-xmark"></i>
      </header>
      <ul className="categories">
        {categories.map(item=><li onClick={()=>{navigate('/categories/'+item);dispatch(toggle(false))}} key={item}>{item}</li>)}
      </ul>
    </aside>
  );
}

export default Sidebar;
