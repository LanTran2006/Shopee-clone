import React, { useEffect } from "react";
import "./List.scss";
import Loader from "../Loader/Loader";
import {useNavigate} from 'react-router-dom'
import { STATUS } from "../../utils/type";
function List({ status, products }) {
  const navigate=useNavigate()
  if (status===STATUS.success && !products.length) {
    return <h3>NOT FOUND</h3>
  }
  return (
    <section className="list">
      {status!==STATUS.loading ? (
        products.map((product) => (
          <div onClick={()=>navigate('/detail/'+product.id)} key={product.id} className="product">
            <img src={product.thumbnail} alt="" />
            <div className="details">
              <p className="brand">
                Brand: <b>{product.brand}</b>
              </p>
              <p className="name">{product.title}</p>
              <div className="price">
                <del>${product.price}</del>
                <span>
                  $
                  {(
                    (product.price * (100 - product.discountPercentage)) /
                    100
                  ).toFixed()}
                </span>
                <span className="percent">
                  ({product.discountPercentage}% Off)
                </span>
              </div>
            </div>
            <div className="category">
              <div className="inner">{product.category}</div>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default List;
