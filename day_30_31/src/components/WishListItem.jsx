import React from "react";

const WishListItem = ({ id, image, title, price, removeFromWishlist }) => {
  return (
    <div className="m-2 px-2 py-2  md:w-1/3 flex flex-row items-center justify-between divide-x divide-black bg-white shadow">
      <div className="w-1/3 px-3 flex flex-col items-center">
        <img src={image} alt="" className="py-4 w-2/3" />
      </div>
      <div className="w-2/3 h-full px-3 flex flex-col">
        <p className="w-full py-4 text-xl font-semibold">{title}</p>
        <button
          onClick={() => removeFromWishlist(id)}
          className="w-6 transition duration-150 ease-in-out transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current text-black"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <p className="text-xl py-2 font-semibold">₹{price}</p>
      </div>
    </div>
  );
};

export default WishListItem;
