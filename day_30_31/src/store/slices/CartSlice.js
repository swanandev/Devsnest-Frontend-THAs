import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    isDrawerVisible: false,
    cartItems: [],
    wishlist: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeCartItem: (state, action) => {
      let newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = [...newItems];
    },
    addWishListItem: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    changeQuantity: (state, action) => {
      state.cartItems[action.payload.inx].quantity += action.payload.qty;
    },
    toggleDrawer: (state) => {
      state.isDrawerVisible = !state.isDrawerVisible;
    },
  },
});

export const {
  addCartItem,
  addWishListItem,
  removeCartItem,
  changeQuantity,
  toggleDrawer,
} = CartSlice.actions;

export default CartSlice.reducer;
