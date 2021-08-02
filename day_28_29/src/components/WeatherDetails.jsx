import React from "react";
import { useSelector } from "react-redux";

const WeatherDetails = () => {
  const { placeData } = useSelector((state) => state.weather);
  console.log(placeData);
  const icons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    </svg>,
  ];
  return (
    <div className="select-none mt-5 px-2 py-2 rounded lg:h-3/5 w-2/5 flex lg:flex-row shadow-md bg-white text-black dark:bg-gray-700 dark:text-gray-100 sm:flex-col sm:items-center sm:h-4/5">
      {placeData.current ? (
        <>
          <div className="w-1/2 flex flex-col pl-5 pt-6">
            <div className="w-full h-full flex flex-col items-center justify-evenly">
              <div className="w-full flex flex-col items-center">
                <h2 className="py-3 text-5xl text-center">
                  {placeData.location.name}
                </h2>
                <h2 className=" text-2xl text-center">
                  {placeData.location.region}
                </h2>
              </div>
              <div className="h-full mt-5 flex flex-col items-center justify-center">
                {placeData.current.is_day ? (
                  <div className="w-full flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="py-2  h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <p>Day</p>
                  </div>
                ) : (
                  <div className="w-full flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="py-2 h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                    <p>Night</p>
                  </div>
                )}
                <p>Wind Speed : {placeData.current.wind_kph} KM/h</p>
                <p>Humidity : {placeData.current.humidity} %</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-evenly">
            <div className="flex flex-col items-center justify-start w-full h-full">
              <img
                width="160"
                src={placeData.current.condition.icon}
                alt={placeData.current.condition.text}
                color="currentColor"
              />
              <p className="text-3xl">{placeData.current.condition.text}</p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h2 className="mt-3 py-3 text-5xl">
                {placeData.current.temp_c}°C
              </h2>
              <p>Feels like {placeData.current.feelslike_c}°C</p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-4xl shadow-2xl flex items-center justify-center h-full w-full">
          No Location Selected
        </p>
      )}
    </div>
  );
};

export default WeatherDetails;
