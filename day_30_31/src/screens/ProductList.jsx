import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, toggleLoading } from "../store/slices/ProductSlice";

import Card from "../components/Card";

const ProductList = () => {
  const { product, cart } = useSelector((state) => state);
  const { productItems, isLoading } = product;
  const { wishlist } = cart;
  const dispatch = useDispatch();
  const selectProduct = (id) => {
    dispatch(toggleLoading());
  };
  console.log(wishlist);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="w-screen h-full overflow-y-scroll px-4 py-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-4">
      {isLoading
        ? [...Array(16)].map((el, inx) => <Card key={inx} isLoading={true} />)
        : productItems.map(
            ({ id, title, description, category, image, price }) => (
              <Card
                isLoading={isLoading}
                key={id}
                id={id}
                description={description}
                category={category}
                image={image}
                title={title}
                price={price}
                isInWishlist={false}
                selectProduct={selectProduct}
              />
            )
          )}
    </div>
  );
};

export default ProductList;
