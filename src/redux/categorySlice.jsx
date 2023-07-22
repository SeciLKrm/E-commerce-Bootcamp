import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      console.log(">>setcategories", action);
      state.categories = action.payload;
    },
  },
});
export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
