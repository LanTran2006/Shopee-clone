import { createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../utils/type";
import {Base_URL} from '../utils/apiURL'
import axios from "axios";


const initialState={
    results: [],
    status: STATUS.IDLE
}


const SearchSlice=createSlice({
    name: 'search',
    initialState,
    reducers: {
        getResult(state,action) {
          state.results=action.payload
        }
        ,setStatus(state,action) {
            state.status=action.payload
        }
    }
})
const {getResult,setStatus}=SearchSlice.actions

export function fetchResults(key) {
    return async (dispatch,state)=>{
        dispatch(setStatus(STATUS.loading))
        try {
            const respone= await axios.get(Base_URL+ '/products/search?q='+key);
            console.log(respone.data.products);
            dispatch(getResult(respone.data.products))
            dispatch(setStatus(STATUS.success))
        } catch (error) {
            dispatch(setStatus(STATUS.failed))
        }
    }
}
export default SearchSlice.reducer;
export const getSearchState=state=>state.search