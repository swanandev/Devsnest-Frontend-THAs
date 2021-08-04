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
      dispatch(changeQuantity({ inx, qty: 1 }));
    } else dispatch(addCartItem({ ...currentProduct, quantity }));
    dispatch(toggleDrawer());
  };
  return (
    <div className="w-9/12 h-full my-6 py-12 grid grid-cols-2 bg-white">
      <div className=" h-full flex flex-col items-center justify-start">
        <img src={image} alt="Loading" className="pt-4 w-1/2 shadow-md" />
      </div>
      <div className=" px-8 py-6">
        <p className="w-full text-2xl font-semibold truncate">{title}</p>
        <p className="w-full py-2 text-sm text-base ">{description}</p>
        <p className="w-full text-4xl py-4 font-semibold">Price : ₹{price}</p>
        <div className="w-36 flex flex-row items-center justify-evenly px-1">
          <button
            onClick={() => handleClick(1)}
            className="bg-gray-200 px-3 py-4 hover:bg-gray-400 border border-black"
          >
            +
          </button>
          <p className="px-6 py-4 bg-gray-200 border border-black">
            {quantity}
          </p>
          <button
            onClick={() => handleClick(-1)}
            className="bg-gray-200 px-3 py-4 hover:bg-gray-400 border border-black"
          >
            -
          </button>
        </div>
        <button
          onClick={addToCart}
          className="bg-blue-600 text-gray-100 mx-1 my-6 px-3 py-3 text-xl hover:bg-blue-700 shadow"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
