import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import {
  addCartItem,
  changeQuantity,
  toggleDrawer,
} from "../store/slices/CartSlice";
import { fetchProduct } from "../store/slices/ProductSlice";

const ProductDetails = () => {
  const { product, cart } = useSelector((state) => state);
  const { currentProduct, isLoading } = product;
  const { cartItems } = cart;
  const params = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  //console.log(cartItems);
  useEffect(() => {
    dispatch(fetchProduct(parseInt(params["id"])));
  }, [dispatch, params]);
  if (isLoading) return <div></div>;
  if (!isLoading && !currentProduct) return <Redirect to="/" />;
  const { id, title, description, price, image } = currentProduct;
  const handleClick = (offset) => {
    if (quantity + offset < 1) return;
    setQuantity(quantity + offset);
  };

  const addToCart = () => {
    let isIteminCart = cartItems.some((item) => item.id === id);
    if (isIteminCart) {
      let inx = cartItems.findIndex((item, inx) => item.id === id);
      dispatch(changeQuantity({ inx, qty: quantity }));
    } else dispatch(addCartItem({ ...currentProduct, quantity }));
    dispatch(toggleDrawer());
  };
  return (
    <div className="w-11/12 md:w-9/12 h-full mt-8 sm:mt-12 mb-3 shadow-md md:my-6 grid grid-cols-1 md:grid-cols-2 bg-white">
      <div className=" h-full flex flex-col items-center justify">
        <div className="w-1/2 my-4 md:mt-10 flex flex-col items-center justify-center">
          <img src={image} alt="Loading" className="pt-4 w-full shadow-md" />
        </div>
      </div>
      <div className="px-4 md:px-8 pt-2 md:mt-16">
        <p className="w-full text-xl md:text-2xl font-semibold truncate">
          {title}
        </p>
        <p className="w-full py-2 text-xs md:text-sm text-base">
          {description}
        </p>
        <p className="w-full text-2xl py-2 md:py-4 md:text-4xl font-semibold">
          Price : ₹{(price * 70).toFixed(2)}
        </p>
        <div className="w-28 md:w-36 flex flex-row items-center justify-evenly px-1">
          <button
            onClick={() => handleClick(1)}
            className="bg-gray-200 px-2 md:px-3 py-2 md:py-4 hover:bg-gray-400 border border-black"
          >
            +
          </button>
          <p className="px-4 md:px-6 py-2 md:py-4 bg-gray-200 border border-black">
            {quantity}
          </p>
          <button
            onClick={() => handleClick(-1)}
            className="bg-gray-200 px-2 md:px-3 py-2 md:py-4 hover:bg-gray-400 border border-black"
          >
            -
          </button>
        </div>
        <button
          onClick={addToCart}
          className="bg-blue-600 text-gray-100 mx-1 px-3 my-4 py-2 text-xl hover:bg-blue-800 shadow"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
