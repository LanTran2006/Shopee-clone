import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./store/Category";
import SiderbarReducer from "./store/Sidebar";
import SearchReducer from './store/Search';
import CartReducer from './store/Cart';
import ToastReducer from './store/Toast'
import { Provider } from "react-redux";
import ProductsReducer from "./store/Products";
import { BrowserRouter as Router } from "react-router-dom";
const store = configureStore({
  reducer: {
    category: CategoryReducer,
    sidebar: SiderbarReducer,
    product: ProductsReducer,
    search: SearchReducer,
    cart: CartReducer,
    toast: ToastReducer
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
