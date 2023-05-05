import React,{useEffect} from "react";
import {
  fetchproducts,
  getproducts,
  getstatusproducts,
} from "../store/Products";
import Slider from '../components/Slider/Slider'
import List from '../components/List/List'
import Title from '../components/Title/Title'
import { getCategories } from "../store/Category";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCTS } from "../utils/type";

function Home(props) {
  const products = useSelector(getproducts);
  const categories = useSelector(getCategories);
  const status = useSelector(getstatusproducts);
  const dispatch = useDispatch();
  let category1 =
    products.length && categories.length
      ? products.filter((item) => item.category === categories[0])
      : [];
  let category2 =
    products.length && categories.length
      ? products.filter((item) => item.category === categories[1])
      : [];
  let category3 =
    products.length && categories.length
      ? products.filter((item) => item.category === categories[2])
      : [];
    
  useEffect(() => {
    dispatch(fetchproducts({type: PRODUCTS.all}));
  }, []);
  return (
    <>
      <Slider timer={2} />
      <Title text={"see our product"} />
      <List products={products.slice(0,30)} status={status} />

      <Title text={categories[0]} />
      <List products={category1} status={status} />

      <Title text={categories[1]} />
      <List products={category2} status={status} />
      
      <Title text={categories[2]} />
      <List products={category3} status={status} />
    </>
  );
}

export default Home;
