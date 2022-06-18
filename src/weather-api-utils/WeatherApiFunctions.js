import axios from "axios";

const API_FORECAST_URL = "https://api.weatherapi.com/v1/forecast.json"
const API_CURRENT_URL = "https://api.weatherapi.com/v1/current.json"
const API_ASTRONOMY_URL = "https://api.weatherapi.com/v1/astronomy.json"

const API_KEY = "e2595ea2e8124b5489f121934221106"

export const getForecast = async (city) => {
    return await axios.get(`${API_FORECAST_URL}?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`);
}
export const getCurrent = async (city) => {
    return await axios.get(`${API_CURRENT_URL}?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`);
}
export const getAstronomy = async (city, date) => {
    return await axios.get(`${API_ASTRONOMY_URL}?key=${API_KEY}&q=${city}&dt=${date}`);
}