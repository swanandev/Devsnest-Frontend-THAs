const API_URL =
  "http://api.weatherapi.com/v1/current.json?key=8e6a7cfb5049423db6d92748210108&q=";

export const fetchWeatherData = (place) => {
  return fetch(API_URL + place)
    .then((res) => res.json())
    .then((data) => data);
};
