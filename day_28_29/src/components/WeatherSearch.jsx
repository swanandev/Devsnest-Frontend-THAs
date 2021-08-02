import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, updatePlace } from "../store/slices/weatherSlice";

const WeatherSearch = () => {
  const { darkTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [place, setPlace] = useState("");
  const handleChange = (e) => setPlace(e.target.value);
  const handleClick = () => {
    dispatch(updatePlace(place));
    dispatch(fetchWeather(place));
  };
  return (
    <div
      className={`w-1/5 mt-5 flex flex-row items-center justify-evenly text-black`}
    >
      <input
        className={
          "m-1 px-3 py-2 rounded-md bg-white text-black dark:bg-gray-700 dark:text-gray-100"
        }
        type="text"
        placeholder="Enter City Name..."
        onChange={handleChange}
      />
      <button
        className={`m-1 text-gray-100 py-2 px-4 rounded bg-blue-500 hover:bg-blue-700`}
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default WeatherSearch;
