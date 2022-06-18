import React, {useContext, useEffect, useState} from 'react';
import {CityContext} from "../../contexts/citycontext/citycontext";

const Forecast = () => {
    const { forecast } = useContext(CityContext);

    const [message, setMessage] = useState('message');


    useEffect(() => {
        let result = '';
        for (let property in forecast) {
            if (forecast.hasOwnProperty(property)) {
                result += "\t" + property + " = " + forecast[property] + "\n";
            }
        }
        setMessage(result);
    }, [])

    return (
        <div className='forecast-container'>
            <pre>{ message } </pre>
        </div>
    );
};

export default Forecast;