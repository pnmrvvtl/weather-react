import React from 'react';
import styles from './current-day.module.scss';

const CurrentDay = ({weatherData}) => {
    return (
        <div className={styles.container}>
            CURRENT WEATHER
        </div>
    );
};

export default CurrentDay;