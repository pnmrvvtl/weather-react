import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import LocationPicker from "./routes/locationpicker/locationpicker";
import AstronomyData from "./routes/astronomy-data/astronomy-data";
import Forecast from "./routes/forecast/forecast";
import Login from "./routes/log-in/login";
import CurrentWeather from "./routes/currentweather/currentweather";
import {useEffect} from "react";


function App() {

    const location = useLocation();
    useEffect(() => {
        document.querySelector("body").style.backgroundImage = `url("/snow/${Math.floor(Math.random() * 8)}.jpg")`;
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<CurrentWeather/>}></Route>
                <Route path="/astronomy-data" element={<AstronomyData/>}></Route>
                <Route path="/forecast" element={<Forecast/>}></Route>
                <Route path="/location-picker" element={<LocationPicker/>}></Route>
                <Route path="/log-in" element={<Login/>}></Route>
            </Route>
        </Routes>
    );
}

export default App;
