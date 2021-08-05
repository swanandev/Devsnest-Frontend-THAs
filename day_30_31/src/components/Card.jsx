import React from "react";
import { Link } from "react-router-dom";
import loader from "../assets/loader.svg";

const Card = ({
  isLoading,
  id,
  title,
  description,
  image,
  price,
  isInWishlist,
  selectProduct,
  addToWishlist,
  removeFromWishlist,
}) => {
  if (isLoading)
    return (
      <div className="bg-white w-full h-full px-3 py-4 flex flex-col items-center justify-center animate-pulse">
        <div className="w-1/2 h-64 flex flex-col items-center justify-center">
          {/* <img src={demo} alt="" className="py-4 w-full opacity-0" /> */}
          <img src={loader} alt="" className="w-8 h-8 animate-spin" />
        </div>
        <div className="w-full">
          <p className="w-full text-base font-semibold truncate">Blah Blah</p>
          <p className="w-full py-2 text-sm truncate font-light">Blah Blah</p>
          <p className=" text-2xl font-semibold">Price : ₹Blah Blah</p>
        </div>
      </div>
    );
  return (
    <Link
      to={`/product/${id}`}
      onClick={() => selectProduct(id)}
      className="z-0 bg-white w-full h-full px-3 py-4 flex flex-col items-center justify-between transition duration-500 transform hover:shadow-xl"
    >
      <div className="w-full h-full flex flex-row align-center justify-between">
        <div className="w-1/4">
          <button
            className="w-8 h-8 flex flex-col items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              if (isInWishlist) removeFromWishlist(id);
              else addToWishlist({ id, title, description, image, price });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${
                isInWishlist
                  ? "stroke-current text-red-600"
                  : "stroke-current text-black  "
              }`}
              fill={isInWishlist ? "currentColor" : "none"}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center">
          <img src={image} alt="" className="py-4 w-full" />
        </div>
        <div className="w-1/4"></div>
      </div>
      <div className="w-full">
        <p className="w-full text-base font-semibold truncate">{title}</p>
        <p className="w-full py-2 text-sm truncate font-light">{description}</p>
        <p className=" text-2xl font-semibold">
          Price : ₹{(price * 70).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default Card;
