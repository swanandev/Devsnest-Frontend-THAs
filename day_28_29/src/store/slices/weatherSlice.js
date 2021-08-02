//

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from "../../utils/fetchWeather";

export const fetchWeather = createAsyncThunk(
  "weather",
  async (place, thunkAPI) => {
    const data = await fetchWeatherData(place);
    return data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    place: "",
    placeData: {},
  },
  reducers: {
    updatePlace: (state, action) => {
      state.place = action.payload;
    },
  },
  extraReducers: {
    [fetchWeather.fulfilled]: (state, action) => {
      state.placeData = action.payload;
    },
  },
});

export const { updatePlace } = weatherSlice.actions;
export default weatherSlice.reducer;
