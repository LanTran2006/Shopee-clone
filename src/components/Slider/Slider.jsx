import React, { useEffect, useState } from "react";
import { banners } from "../../utils/data";
import './Slider.scss'
function Slider({timer}) {
  let [currentpage, setCurrentpage] = useState(0);
  const handle_next = () => {
    setCurrentpage(currentpage === banners.length-1 ? 0 : currentpage+1);
  };
  const handle_prev = () => {
    setCurrentpage(currentpage === 0 ? banners.length-1 : currentpage-1);
  };
  useEffect(()=>{
    let interval;
    if (timer) {
       interval=setInterval(()=>{
         handle_next()
       },timer*1000)
    }
    return ()=>clearInterval(interval)
  })
  return (
    <section className="slider">
      {banners.map((image) => (
        <img
          style={{ transform: `translateX(-${currentpage*100}%)` }}
          key={image}
          src={image}
        ></img>
      ))}
      <div className="dots">
        {banners.map((dot, index) => (
          <span
            className={currentpage === index ? "active" : null}
            onClick={() => setCurrentpage(index)}
            key={dot}
          ></span>
        ))}
      </div>
      <div onClick={handle_prev} className="left controls">
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div onClick={handle_next} className="right controls">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </section>
  );
}

export default Slider;
