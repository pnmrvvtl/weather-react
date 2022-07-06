import React, {Fragment} from 'react';
import {Link, Outlet} from "react-router-dom";
import styles from './navigation.module.scss';

//todo make other design for current page button
const Navigation = () => {

    return (
        <Fragment>
            <div className={styles.nav}>
                <Link className={styles.nav__link} to="/">CURRENT WEATHER</Link>
                <Link className={styles.nav__link} to="/forecast">FORECAST</Link>
                <Link className={styles.nav__link} to="/astronomy-data">ASTRONOMY DATA</Link>
                <Link className={styles.nav__link} to="/location-picker">PICK LOCATION</Link>
                <Link className={styles.nav__link} to="/log-in">LOGIN</Link>
            </div>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Navigation;