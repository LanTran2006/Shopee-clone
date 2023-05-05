import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcategories, getCategories, getProductsCategory, getstatusCategory } from '../store/Category';
import { CATEGORIES } from '../utils/type';
import List from '../components/List/List'
function CategorySearch(props) {
    const {category}=useParams()
    const dispatch=useDispatch()
    let result=useSelector(getProductsCategory)
    let status=useSelector(getstatusCategory)
    useEffect(()=>{
        dispatch(fetchcategories({type: CATEGORIES.Products,id: category}));
    },[category])
    return (
        <>
          <Title text={'see our '+category}/>
          <List status={status} products={result}/>
        </>
    );
}

export default CategorySearch;