import React, { useEffect, useState } from "react";
import "./Cart.scss";
import Quantity from "../Detail/Quantity";
import { useDispatch, useSelector } from "react-redux";
import { CaculateTotal, DeleteCart, getCartState,ResetCart} from "../../store/Cart";
import Confirm from "../../components/Confirm/Confirm";
import { useRef } from "react";
function Cart(props) {
  const {cart,totalPrice} = useSelector(getCartState);
  let [dialog,setDialog]=useState(false)
  let idproduct=useRef()
  const dispatch=useDispatch()
  const handle_delete=(id)=>{
       idproduct.current=id;
       setDialog(true)
  }
  useEffect(()=>{
   dispatch(CaculateTotal())
  },[cart])
  return (
    <section className="cart">
          {cart.length ?  <>
     <div className="heading">
        <h4>S.N</h4>
        <h4>Products</h4>
        <h4>Unit Price</h4>
        <h4>Quantity</h4>
        <h4>Total Price</h4>
        <h4>Actions</h4>
      </div>
      <div className="items">
        {cart.map((product, index) => (
          <div className="product">
            <p>{index + 1}</p>
            <p>{product.title}</p>
            <p>${(product.price * (100 - product.discountPercentage) / 100).toFixed()}</p>
            <Quantity quan={product.quantity} id={product.id} cart={cart} small={true} />
            <p className="total-price">${(product.price * (100 - product.discountPercentage) / 100*product.quantity).toFixed()}</p>
            <button onClick={()=>handle_delete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="paying">
        <button onClick={()=>dispatch(ResetCart())}>
          <i className="fa-solid fa-trash"></i> Clear Cart
        </button>
        <div className="checkout">
          <p>
            Total (4 items): <span>${totalPrice}</span>
          </p>
          <button>Check Out</button>
        </div>
      </div>
     {dialog ? <Confirm id={idproduct} dispatch={dispatch} setDialog={setDialog}/> : null}
     </> : <h2>your cart is empty</h2>}
    </section>
  );
}

export default Cart;
