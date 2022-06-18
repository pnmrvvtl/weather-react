import {createContext, useEffect, useState} from "react";
import {getAstronomy, getCurrent, getForecast} from "../../weather-api-utils/WeatherApiFunctions";

export const CityContext = createContext({
    city: '',
    setCity: () => {},
    forecast: '',
    astronomyData: '',
    currentWeather: ''
})

export  const CityProvider = ({children}) => {
    const [city, setCity] = useState('')
    const [forecast, setForecast] = useState({})
    const [astronomyData, setAstronomyData] = useState({})
    const [currentWeather, setCurrentWeather] = useState({})

    useEffect(() => {
        if(city) {
            getForecast(city).then( response =>setForecast(response.data));
            getCurrent(city).then( response =>setCurrentWeather(response.data));

            //todo user can chose date for astronomy data
            getAstronomy(city, '2022-06-18').then( response =>setAstronomyData(response.data));
        }
    }, [city])

    const value = {city, setCity, forecast, astronomyData, currentWeather}

    return <CityContext.Provider value={value}>{children}</CityContext.Provider>
}