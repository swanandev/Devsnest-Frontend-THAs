import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchProductFromAPI,
  fetchProductsFromAPI,
} from "../../utils/fakeStoreApi";

export const fetchProducts = createAsyncThunk(
  "fetch/products",
  async (_, thunkAPI) => await fetchProductsFromAPI()
);

export const fetchProduct = createAsyncThunk(
  "fetch/product",
  async (productId, thunkAPI) => await fetchProductFromAPI(productId)
);

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: true,
    currentProduct: null,
    productItems: [],
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    loadProducts: (state, action) => {},
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.productItems = action.payload;
      state.isLoading = false;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.currentProduct = action.payload;
      state.isLoading = false;
    },
  },
});

export const { toggleLoading, loadProducts, setCurrentProduct } =
  ProductSlice.actions;

export default ProductSlice.reducer;
