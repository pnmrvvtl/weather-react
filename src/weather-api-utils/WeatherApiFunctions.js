import axios from "axios";

const API_URL = "http://api.weatherapi.com/v1/forecast.json"
const API_KEY = "e2595ea2e8124b5489f121934221106"

const getForecast = async (city) => {
    return axios.get(`${API_URL}?key=${API_KEY}&q=${city}&aqi=no&alerts=no`)
}

export default getForecast;