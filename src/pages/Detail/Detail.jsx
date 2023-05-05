import React, { useEffect, useRef, useState } from "react";
import "./Detail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchproducts,
  getProductInfo,
  getstatusproducts,
} from "../../store/Products";
import Loader from "../../components/Loader/Loader";
import { PRODUCTS, STATUS } from "../../utils/type";
import Media from "./Media";
import {AddToCart} from '../../store/Cart'
import Quantity from "./Quantity";
import {setActive} from '../../store/Toast'

function Detail(props) {
  let { id } = useParams();
  let result = useSelector(getProductInfo);
  let status = useSelector(getstatusproducts);
  let dispatch = useDispatch();
  let [img, setimg] = useState(0);
  let { images, description, price, discountPercentage, rating, thumbnail } =result;
  let inp=useRef()
  images = images?.length < 5 ? [...images, thumbnail] : images;

  let now_price = (price * (100 - discountPercentage)) / 100;
  
  let handle_checkstar = (index, num) => {
    if (Math.floor(num) === num) {
      if (index <= num) return "fa-solid fa-star";
    } else {
      if (index < num) return "fa-solid fa-star";
      if (index === Math.ceil(num)) return "fa-solid fa-star-half-stroke";
    }
  };
  let handle_addtocart=()=>{
      dispatch(AddToCart({...result,quantity: Number( inp.current.value)}))
      dispatch(setActive({text: 'an item has been added to your shopping cart',state: true}))
      setTimeout(()=>{
        dispatch(setActive({text: 'nothing',state: false}))
      },2000)
  }
  useEffect(() => {
    dispatch(fetchproducts({ type: PRODUCTS.single, id }));
  }, [id]);

  return (
    <section className="products-details">
      {status === STATUS.loading ? (
        <Loader />
      ) : (
        <>
          <div className="left">
            <div className="gallery">
              {images ? <img src={images[img]} /> : null}
              {images
                ? images
                    .slice(1)
                    .map((item, index) => (
                      <img
                        key={index}
                        onClick={() => setimg(index + 1)}
                        src={item}
                      ></img>
                    ))
                : null}
            </div>
            <Media />
          </div>
          <div className="right">
            <h2>{description}</h2>
            <div className="rates">
              <div className="left">
                <div className="stars">
                  <span className="emphasize">{rating}</span>
                  {Array(5)
                    .fill(0)
                    .map((item, index) => (
                      <i key={index + 1} className={handle_checkstar(index + 1, rating)}></i>
                    ))}
                </div>
                <p className="ratings">
                  <span>2.4K</span>Ratings
                </p>
                <p className="sold">
                  <span>9.8K sold</span>{" "}
                  <i className="fa-regular fa-circle-question"></i>
                </p>
              </div>
              <div className="right">Report</div>
            </div>
            <div className="price">
              <del>${price}</del>
              <p>${now_price.toFixed()}</p>
              <div className="discount">{discountPercentage}% off</div>
            </div>
            <Quantity ref={inp} small={false}/>
            <div className="buttons">
              <button onClick={handle_addtocart} className="cart-btn">
                <i className="fa-solid fa-cart-plus"></i>
                Add To Cart
              </button>
              <button className="buy">Buy Now</button>
            </div>
            <div className="guarantee">
              <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/83e10a1f95cb083579c089448ef8dd3b.png" />
              <p>Shopee Guarantee</p>
              <span>Get the items you ordered or get your money back.</span>
            </div>
          </div>
        </>
      )}
      
    </section>
  );
}

export default Detail;
