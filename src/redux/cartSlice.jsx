import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: null,
};
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCarts: (state, action) => {
      console.log(">>setcarts", action);
      state.carts = action.payload;
    },
    removeCarts: (state, action) => {
      state.carts = null;
    },
  },
});
export const { setCarts, removeCarts } = cartSlice.actions;
export default cartSlice.reducer;
