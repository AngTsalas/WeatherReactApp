import axios from "axios";

export const callApi = query => {
  const apiKey = "d322a0ea33db86a59fba252de160bac6";
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${apiKey}&units=metric`
  );
};

export const normalize = string =>
  string[0].toUpperCase() + string.substring(1);
