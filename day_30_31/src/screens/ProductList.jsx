import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, toggleLoading } from "../store/slices/ProductSlice";
import { addWishListItem, removeWishListItem } from "../store/slices/CartSlice";

import Card from "../components/Card";

const ProductList = () => {
  const { product, cart } = useSelector((state) => state);
  const { productItems, isLoading } = product;
  const { wishlist } = cart;
  const dispatch = useDispatch();
  const selectProduct = (id) => {
    dispatch(toggleLoading());
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const isInWishList = (item) =>
    wishlist.some((wlItem) => wlItem.id === item.id);
  const addToWishlist = (item) => {
    dispatch(addWishListItem(item));
    dispatch(toggleLoading());
  };
  const removeFromWishlist = (id) => {
    dispatch(removeWishListItem({ id }));
    dispatch(toggleLoading());
  };
  return (
    <div className="w-screen h-full my-2 overflow-y-scroll px-4 py-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-4">
      {isLoading
        ? [...Array(16)].map((_, inx) => <Card key={inx} isLoading={true} />)
        : productItems.map((item) => {
            const { id, title, description, category, image, price } = item;
            return (
              <Card
                isLoading={isLoading}
                key={id}
                id={id}
                description={description}
                category={category}
                image={image}
                title={title}
                price={price}
                isInWishlist={isInWishList(item)}
                selectProduct={selectProduct}
                addToWishlist={addToWishlist}
                removeFromWishlist={removeFromWishlist}
              />
            );
          })}
    </div>
  );
};

export default ProductList;
