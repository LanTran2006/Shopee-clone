import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { CATEGORIES, PRODUCTS, STATUS } from "../utils/type";
import { Base_URL } from "../utils/apiURL";

let initialState = {
  status: STATUS.IDLE,
  categories: [],
  category_products: []
};
export const fetchcategories = createAsyncThunk("category/fetchcategories", async (req) => {
  let {type,id}=req;
  if (type===CATEGORIES.category) {
    const respone = await axios.get(Base_URL+'/products/categories');
    return {type: CATEGORIES.category ,result:  respone.data};
  } else {
    const respone = await axios.get(Base_URL+'/products/category/'+id);
    console.log(id,respone.data);
    return {type: CATEGORIES.Products ,result:  respone.data.products};
  }
});

const categoryslice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [fetchcategories.fulfilled]: (state, action) => {
      let {result,type}=action.payload
      state.status = STATUS.success;
      if (type===CATEGORIES.Products) state.category_products=result
      else state.categories=result
    },
    [fetchcategories.pending]: (state) => {
      state.status = STATUS.loading;
    },
    [fetchcategories.rejected]: (state) => {
      state.status = STATUS.failed;
    },
  },
});

export const getCategories = (state) => state.category.categories;
export const getProductsCategory= (state) => state.category.category_products;
export const getstatusCategory= (state) => state.category.status;
export default categoryslice.reducer;
