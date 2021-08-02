import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import weatherReducer from "./slices/weatherSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
  },
});
