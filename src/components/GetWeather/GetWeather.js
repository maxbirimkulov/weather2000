import React from 'react';
import axios from "axios";

const GetWeather = ({cityName, setWeather, setCityName}) => {

    const getWeather = () => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`)
            .then(({data}) => setWeather(data))
    };

    return (
        <>
            <input placeholder='Write city name' className='form__input' type="text"
                   onChange={(event) => setCityName(event.target.value)}/>
            <button className='form__btn' type='button' onClick={() => getWeather()}>Получить</button>
        </>
    );
};

export default GetWeather;