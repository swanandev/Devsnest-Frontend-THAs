import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    wishlist: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeCartItem: (state, action) => {
      state.cartItems.filter((item) => item.id === action.payload.id);
    },
    addWishListItem: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    changeQuantity: (state, action) => {
      state.cartItems[action.payload.inx].qty += action.payload.qty;
    },
  },
});

export const { addCartItem, addWishListItem, removeCartItem } =
  CartSlice.actions;

export default CartSlice.reducer;
