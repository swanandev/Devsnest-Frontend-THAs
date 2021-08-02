import { useDispatch, useSelector } from "react-redux";
import WeatherDetails from "./components/WeatherDetails";
import WeatherSearch from "./components/WeatherSearch";
import { toggleTheme } from "./store/slices/themeSlice";

const App = () => {
  const { darkTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      className={`h-screen flex flex-col items-center w-full ${
        darkTheme ? "bg-gray-800 dark" : "bg-gray-200"
      }`}
    >
      <header
        className={`h-14 w-screen shadow-lg flex flex-row items-center justify-between bg-gray-100 text-black dark:bg-gray-700 text-gray-200`}
      >
        <h2 className="ml-8 text-2xl text-black dark:text-gray-200">
          Weather App
        </h2>
        <button
          className="mr-8 bg-blue-500 text-white py-2 px-4"
          onClick={() => dispatch(toggleTheme())}
        >
          {darkTheme ? "Light Theme" : "Dark Theme"}
        </button>
      </header>
      <div
        className={`mt-3 rounded-md flex flex-col items-center h-full w-full dark:bg-gray-800 `}
      >
        <WeatherSearch />
        <WeatherDetails />
      </div>
    </div>
  );
};

export default App;
