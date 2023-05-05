import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS,PRODUCTS } from "../utils/type";
import { Base_URL } from "../utils/apiURL";

let initialState = {
  status: STATUS.IDLE,
  products: [],
  info_product: {},
};
export const fetchproducts = createAsyncThunk(
  "product/fetchproducts",
  async (req) => {
    const {type,id}=req
    if (type === PRODUCTS.all) {
      const respone = await axios.get(Base_URL + "/products?limit=90");
      return { result: respone.data.products, type: PRODUCTS.all };
    } else if (type === PRODUCTS.single) {
      const respone = await axios.get(Base_URL + `/products/${id}`);
      return { result: respone.data, type: PRODUCTS.single };
    }
  }
);

const productsslice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [fetchproducts.fulfilled]: (state, action) => {
      state.status = STATUS.success;
      const { type, result } = action.payload;

      if (type === PRODUCTS.all) state.products = result;
      else state.info_product = result;
    },
    [fetchproducts.pending]: (state) => {
      state.status = STATUS.loading;
    },
    [fetchproducts.rejected]: (state) => {
      state.status = STATUS.failed;
    },
  },
});

export const getproducts = (state) => state.product.products;
export const getProductInfo = (state) => state.product.info_product;
export const getstatusproducts = (state) => state.product.status;
export default productsslice.reducer;
