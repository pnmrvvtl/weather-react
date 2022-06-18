import React, {useContext, useState} from 'react';
import {CityContext} from "../../contexts/citycontext/citycontext";
import {useNavigate} from "react-router-dom";

const LocationPicker = () => {
    const { setCity } = useContext(CityContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setCity(document.querySelector('#city-name').value)
        navigate('/forecast');
    }

    return (
        <div>
            <label>ENTER YOUR CITY:</label>
            <input id='city-name' type='text'/>
            <button onClick={handleClick}>GO</button>
        </div>
    );
};

export default LocationPicker;