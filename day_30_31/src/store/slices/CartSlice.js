import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    isDrawerVisible: false,
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeCartItem: (state, action) => {
      let newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = [...newItems];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    addWishListItem: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeWishListItem: (state, action) => {
      let newItems = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishlist = [...newItems];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    changeQuantity: (state, action) => {
      state.cartItems[action.payload.inx].quantity += action.payload.qty;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    toggleDrawer: (state) => {
      state.isDrawerVisible = !state.isDrawerVisible;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  addWishListItem,
  removeWishListItem,
  changeQuantity,
  toggleDrawer,
} = CartSlice.actions;

export default CartSlice.reducer;
