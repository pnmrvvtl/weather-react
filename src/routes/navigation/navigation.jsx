import React, {Fragment} from 'react';
import {Link, Outlet} from "react-router-dom";
import './navigation.scss';

//todo make other design for current page button
const Navigation = () => {

    return (
        <Fragment>
            <div className="nav">
                <div className="nav__container">
                    <Link className="nav__container__link" to="/">CURRENT WEATHER</Link>
                </div>
                <div className="nav__container">
                    <Link className="nav__container__link" to="/forecast">FORECAST</Link>
                </div>
                <div className="nav__container">
                    <Link className="nav__container__link" to="/astronomy-data">ASTRONOMY DATA</Link>
                </div>
                <div className="nav__container">
                    <Link className="nav__container__link" to="/location-picker">PICK LOCATION</Link>
                </div>
                <div className="nav__container">
                    <Link className="nav__container__link" to="/log-in">LOGIN</Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Navigation;