import React from "react";

const CartDrawer = () => {
  let isIteminCart = state.cartItems.some(
    (item) => item.id === action.payload.id
  );
  if (isIteminCart) {
      state.cartItems.find((item,inx) => )
  } else 


  let inx =state.cartItems.findIndex((item) => item.id === action.payload.id)
  return <div></div>;
};

export default CartDrawer;
