import React from 'react';

const Middle = ({weather,temp,setTemp}) => {
    return (
        <div className='weather__middle'>
            <img className='weather__img' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather logo"/>
            <span className='weather__temp'>{Math.trunc(temp === 'C' ? weather.main.temp - 273.15 : 1.8 * (weather.main.temp - 273) + 32)}</span>
            <div className='weather__switch'>
                                <span
                                    className={`weather__switch-item ${temp === 'C' ? 'active' : ''}`}
                                    onClick={()=> setTemp('C')}>°C</span>
                |
                <span
                    className={`weather__switch-item ${temp === 'F' ? 'active' : ''}  `}
                    onClick={()=> setTemp('F')}>°F</span>
            </div>
            <p className='weather__descr'>{weather.weather[0].description}</p>
        </div>
    );
};

export default Middle;