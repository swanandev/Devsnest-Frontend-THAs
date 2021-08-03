import React from "react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { currentProduct, isLoading } = useSelector((state) => state.product);
  if (isLoading) return <div></div>;
  const { id, title, description, price, image } = currentProduct;
  console.log(currentProduct, isLoading);
  return (
    <div className="w-9/12 mt-4 py-12 grid grid-cols-2 bg-white">
      <div className=" h-1/2 flex flex-col items-center justify-start bg-blue-500">
        <img src={image} alt="Loading" className="bg-blue-600 pt-4 h-full" />
      </div>
      <div className=" px-8 py-6">
        <p className="w-full text-2xl font-semibold truncate">{title}</p>
        <p className="w-full py-2 text-sm text-base ">{description}</p>
        <p className="w-full text-4xl py-4 font-semibold">Price : ₹{price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
