import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List/List";
import { fetchResults, getSearchState } from "../store/Search";
function SearchResult(props) {
  const {key}=useParams()
  const dispatch=useDispatch()
  const {results,status}=useSelector(getSearchState)
   useEffect(()=>{
      dispatch(fetchResults(key))
   },[key])
  return (
    <>
      <Title text={"Results for " + key} />
      <List status={status} products={results} />
    </>
  );
}

export default SearchResult;
