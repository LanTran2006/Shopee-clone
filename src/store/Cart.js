import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
};
let CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart(state, action) {
      const product = action.payload;
      let idx = state.cart.findIndex((item) => product.id === item.id);
      if (idx>=0) {
       state.cart[idx].quantity+=product.quantity
      } else {
        state.cart.push({ ...product});
      }
    },
    DeleteCart(state, action) {
      const id = action.payload;
      let idx = state.cart.findIndex((item) =>id === item.id);
      state.cart.splice(idx,1);
    },
    ResetCart(state) {
      state.cart = [];
    },
    ChangeQuantity(state, action) {
      const {id,quantity} = action.payload;
      let idx = state.cart.findIndex((item) =>id === item.id);
      state.cart[idx].quantity=quantity==='' ? 1 : quantity
    },
    CaculateTotal(state) {
        state.totalPrice=state.cart.reduce((acc,item)=>acc+Number((item.price*(100-item.discountPercentage)/100*item.quantity).toFixed()),0)
    }
  },
});
export default CartSlice.reducer
export const {AddToCart,DeleteCart,ChangeQuantity,CaculateTotal,ResetCart}=CartSlice.actions
export const getCartState=state=>state.cart