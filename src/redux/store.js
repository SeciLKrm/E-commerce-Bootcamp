import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice"
import  authSlice  from "./authSlice";
import cartSlice from "./cartSlice";
export default configureStore({
    reducer :{
    categoryState: categorySlice,
    authState : authSlice,
    cartState : cartSlice,
}
})