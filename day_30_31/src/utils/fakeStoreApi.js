export const fetchProductsFromAPI = async (productCount = 20) =>
  await fetch(`https://fakestoreapi.com/products?limit=${productCount}`).then(
    (res) => res.json()
  );

export const fetchProductFromAPI = async (
  productId = localStorage.getItem("currentProductId")
) =>
  productId
    ? await fetch(`https://fakestoreapi.com/products/${productId}`).then(
        (res) => res.json()
      )
    : null;
