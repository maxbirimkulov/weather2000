import React from 'react';
import Middle from "../WeatherCurrentDate/Middle";

const WeatherFiveDay = ({date,setDate, weatherFive,weather,setDay,temp,setTemp}) => {

    return (
        <section className='five-day'>
            {JSON.stringify(weatherFive) === '{}'
                ? ''
                : <>
                    <h2>{weather.name}</h2>
                    <Middle weather={weather} temp={temp} setTemp={setTemp}/>
                    <button className='back' type='button' onClick={()=> setDay('one')}>Back</button>
                    <div className='buttons'>
                        { weatherFive.list.map((item)=> item.dt_txt.slice(0,10)).filter((item,idx,array)=> array.indexOf(item) === idx).map((item,idx)=>{
                            return (
                                <button className='day-btn' key={item} type='button'  onClick={()=> setDate(item)}>{item}</button>
                            )
                        })}
                    </div>
                    <div className='weather__row'>
                        {weatherFive.list.filter(item => item.dt_txt.includes(date)).map((item)=>{
                            return (
                                <div className='weather__card' key={item.dt_txt}>
                                    <span className='weather__card-time'>{item.dt_txt.slice(10)}</span>
                                    <div className='weather__card-temp'>
                                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather logo"/>
                                        <span className='weather__card-cel'> {Math.trunc(item.main.temp - 273.15)} °C</span>
                                    </div>
                                    <span className='weather__card-descr'>{item.weather[0].description}</span>
                                </div>
                            )
                        })}
                    </div>
                </>
            }


        </section>
    );
};

export default WeatherFiveDay;