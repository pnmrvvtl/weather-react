import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const Forecast = () => {
    const forecast = useSelector(state => state.location.forecast)
    console.log(forecast);
    const [message, setMessage] = useState('message');


    useEffect(() => {
        let result = '';
        const recursDeep = (argForecast) => {
            for (let property in argForecast) {
                if (forecast.hasOwnProperty(property)) {
                    result += "\t" + property + " = " + forecast[property] + "\n";
                }
            }
        }
        recursDeep(result, forecast);
        setMessage(result);
    }, [forecast])

    return (
        <div className='forecast-container'>
            <pre>{message} </pre>
        </div>
    );
};

export default Forecast;