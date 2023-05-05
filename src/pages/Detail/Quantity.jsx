import React,{useEffect, useRef, useState} from 'react';
import './Quantity.scss'
import {useDispatch} from 'react-redux'
import { CaculateTotal, ChangeQuantity } from '../../store/Cart';


const Quantity = React.forwardRef(({small,cart,id,quan},ref)=>{
    let [quantity,setQuantity]=useState(quan || 1)
    let former_value = useRef();
    let dispatch=useDispatch()
    let handle_quantity = (e) => {
        let inp = e.target.value;
        let converted_value=Number(inp)
        if ((!isNaN(converted_value) || inp === "") && inp!=='0') {
          setQuantity(inp === "" ? "" : inp);
          if (inp !== "") former_value.current = converted_value;
        } 
      };
      let handle_checkquantity = () => {
        if (quantity === "") setQuantity(former_value.current);
      };
    useEffect(()=>{
      if (cart) {
        dispatch(ChangeQuantity({id,quantity}))
      }
    },[quantity])

    return (
        <div className={small ? 'small quantity' : 'quantity'}>
             {!small ? <p>Quantity : </p> : null}
              <div className="quantity-control">
                <button
                  onClick={() =>
                    setQuantity(quantity === 1 ? quantity : quantity - 1)
                  }
                  className="minus"
                >
                  -
                </button>
                <input
                  ref={ref}
                  value={quantity}
                  onChange={handle_quantity}
                  onBlur={handle_checkquantity}
                  type="text"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="plus"
                >
                  +
                </button>
              </div>
            </div>
    );
})

export default Quantity;