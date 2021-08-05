import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WishListItem from "../components/WishListItem";
import { removeWishListItem } from "../store/slices/CartSlice";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //console.log(wishlist);
  const removeFromWishlist = (id) => {
    console.log("Rmov", id);
    dispatch(removeWishListItem({ id }));
  };

  return (
    <div className="w-full overflow-y-scroll scrollbar-hide mt-10 py-6 flex flex-col items-center">
      {wishlist.map(({ id, image, title, price }, inx) => (
        <WishListItem
          key={inx}
          id={id}
          image={image}
          title={title}
          price={price}
          removeFromWishlist={removeFromWishlist}
        />
      ))}
    </div>
  );
};

export default Wishlist;
