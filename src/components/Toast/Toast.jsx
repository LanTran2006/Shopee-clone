import React from "react";
import "./Toast.scss";


function Toast({text}) {
 
  return (
    <section className="Toast">
      <div className="box">
        <div>
        <i className="fa-solid fa-check"></i>
        </div>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default Toast;
