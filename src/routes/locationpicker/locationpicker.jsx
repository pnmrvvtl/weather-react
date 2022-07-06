import React from 'react';
import {useDispatch} from 'react-redux'
import {fetchForecast} from '../../redux/locationSlice'
import {useNavigate} from "react-router-dom";

const LocationPicker = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const locationField = React.useRef(null);

    const handleClick = () => {
        dispatch(fetchForecast(locationField.current.value))
        navigate('/forecast');
    }

    return (
        <div>
            <label>ENTER YOUR CITY:</label>
            <input ref={locationField} id='city-name' type='text'/>
            <button onClick={handleClick}>GO</button>
        </div>
    );
};

export default LocationPicker;