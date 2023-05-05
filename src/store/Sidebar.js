import { createSlice } from "@reduxjs/toolkit";

let initialState={
    active: false
};

const sidebarslice=createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggle(state,action) {
           state.active=action.payload;
        },
    }
})
export const {toggle}=sidebarslice.actions;
export const getActive=state=>state.sidebar.active;
export default sidebarslice.reducer;