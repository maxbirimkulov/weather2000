import React from 'react';
import Top from "./Top";
import Middle from "./Middle";

const WeatherCurrentDate = ({weather, temp, setTemp}) => {

    const toDate = (date) => {
        return new Intl.DateTimeFormat('ru-Ru', {
            day:'2-digit',
            month:'long',
            year:'numeric',
            hour:'2-digit',
            minute:'2-digit',
            second:'2-digit'
        }).format(new Date(date))
    };

    return (
        <div className='weather'>
            <Top weather={weather}/>
            <Middle weather={weather} temp={temp} setTemp={setTemp}/>
            <p className='weather__time'>{toDate(Date.now())}</p>
        </div>
    );
};

export default WeatherCurrentDate;