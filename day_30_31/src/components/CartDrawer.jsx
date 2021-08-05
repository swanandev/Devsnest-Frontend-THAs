import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, removeCartItem } from "../store/slices/CartSlice";
import CartItem from "./CartItem";

const CartDrawer = ({ closeCart }) => {
  const { cartItems, isDrawerVisible } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // let inx = state.cartItems.findIndex((item) => item.id === action.payload.id);
  //console.log(cartItems);
  const updateQuantity = (offset, inx) => {
    if (cartItems[inx].quantity + offset < 1) return;
    dispatch(changeQuantity({ inx, qty: offset }));
  };
  const removeItem = (id) => {
    //console.log(cartItems, "Removing", id);
    dispatch(removeCartItem({ id }));
  };
  return (
    <div
      className={`h-full w-full md:w-1/3 absolute right-0 transition-all ease-in-out duration-700 transform ${
        isDrawerVisible
          ? "translate-x-0 opacity-100 z-30"
          : "translate-x-full opacity-90 scale-x-0 z-0"
      }`}
    >
      {/* <div className=""></div> */}
      <div className="w-full h-full bg-gray-200 divide-y divide-gray-800">
        <div className="w-full px-3 py-3 flex flex-row items-center justify-between bg-white">
          <p className="text-xl">Your Items</p>
          <button
            onClick={closeCart}
            className="transition duration-500 ease-in-out transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-current text-black hover:text-black  hover:stroke-current hover:stroke"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className="stroke-1 hover:stroke-3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="py-2 grid grid-cols-1 gap-2">
          {cartItems.map(({ id, image, title, price, quantity }, inx) => (
            <CartItem
              inx={inx}
              key={id}
              id={id}
              image={image}
              title={title}
              price={price}
              quantity={quantity}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
