import React from 'react';
import {useSelector} from 'react-redux';
import CurrentDay from '../../components/current-day/current-day';
import styles from './forecast.module.scss'

const Forecast = () => {
    const forecast = useSelector(state => state.location.forecast)

    return (
        <div className={styles.container}>
            <CurrentDay weatherData={forecast}/>
            <div className={styles.div2}></div>
            <div className={styles.div3}></div>
            <div className={styles.div4}></div>
            <div className={styles.div5}></div>
            <div className={styles.div6}></div>
            <div className={styles.div7}></div>
        </div>
    );
};

export default Forecast;