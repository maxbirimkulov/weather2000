import React, {useState} from 'react'
import './style.css'
import GetWeather from "./components/GetWeather/GetWeather";
import WeatherCurrentDate from "./components/WeatherCurrentDate/WeatherCurrentDate";
import axios from "axios";
import WeatherFiveDay from "./components/WeatherFiveDay/WeatherFiveDay";
import Vanta from "./components/vanta/Vanta";

function App() {

    const [weather, setWeather] = useState({});
    const [cityName, setCityName] = useState('');
    const [temp, setTemp] = useState('C');
    const [weatherFive, setWeatherFive] = useState({});
    const [day, setDay] = useState('one');
    const [date, setDate] = useState('');

    const getWeatherFive = () => {
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`)
            .then(({data})=> {
                setWeatherFive(data);
                setDate(data.list[0].dt_txt.slice(0,10))
            });
        setDay('five')

    };

    return (
        <div className="App">
            <Vanta/>
            {day === 'one' ?   <div className='form'>
                <h1 className='form__title'>Прогноз погоды!</h1>
                <GetWeather cityName={cityName} setWeather={setWeather} setCityName={setCityName}/>

                {JSON.stringify(weather) === '{}'
                    ? ''
                    : <>
                        <WeatherCurrentDate weather={weather} temp={temp} setTemp={setTemp}/>
                        <button className='fiveDay' type='button' onClick={getWeatherFive}>Получить погоду на 5 дней</button>
                    </>
                }


            </div> : <WeatherFiveDay date={date} setDate={setDate} weatherFive={weatherFive} weather={weather} setDay={setDay} temp={temp} setTemp={setTemp}/>}
        </div>
    );
}

export default App;

