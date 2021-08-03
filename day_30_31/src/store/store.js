import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/ProductSlice";
import CartReducer from "./slices/CartSlice";

export default configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
  },
});
