import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ openCart }) => {
  return (
    <>
      <div className="h-12 md:h-14"></div>
      <nav className="h-12 md:h-14 w-screen z-10 fixed bg-white shadow-md px-4 md:px-8 flex flex-row items-center justify-between">
        <Link to="/">
          <p className="text-3xl md:text-4xl">OnlyStore</p>
        </Link>
        <div className="w-20 md:w-24 h-5 px-2 py-4 flex flex-row items-center justify-between">
          <Link to="/wishlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-current text-red-600 stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </Link>
          <button onClick={openCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
