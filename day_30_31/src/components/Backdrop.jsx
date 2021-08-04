import React from "react";

const Backdrop = ({ visibility, closeCart }) => {
  return (
    <div
      onClick={closeCart}
      className={`w-full h-full absolute z-20 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm backdrop-opacity-80 ${
        visibility ? "" : "hidden"
      }`}
    ></div>
  );
};

export default Backdrop;
