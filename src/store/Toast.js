import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  active: false,
};
const ToastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setActive(state, action) {
      state.text = action.payload.text;
      state.active = action.payload.state;
    },
  },
});
export default ToastSlice.reducer;
export const getToastState = (state) => state.toast;
export const { setActive } = ToastSlice.actions;
