import React from 'react'
import { useEffect, useState } from 'react';
import './HomePage.scss'
import Weathercard from '../../components/Weathercard/Weathercard';
import Windcard from '../../components/Windcard/Windcard';
import LineGraph from '../../components/LineGraph/LineGraph';
import WeatherTomorrowCard from '../../components/WeatherTomorrowCard/WeatherTomorrowCard';
const HomePage = () => {
    let [weather, setWeather] = useState(); 
    let [temperatureData, setTemperatureData] = useState(); 

    console.log(weather)

    const getTemperatureData = (data) => {
      setTemperatureData(data.filter((obj) => {
        if(obj.time.split(" ")[1] === '07:00' || obj.time.split(" ")[1] === '12:00' || obj.time.split(" ")[1] === '18:00' || obj.time.split(" ")[1] === '21:00'  ){
          return obj
        }
      }))

    }

    const fetchData = (lat, long) => {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=37eae624565d4429a98224757231104&q=${lat},${long}&days=3&aqi=no`)
      .then((response) => response.json())
      .then((data) => { setWeather(data) 
        getTemperatureData(data.forecast.forecastday[0].hour)
      })
      
    }
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
        fetchData(position.coords.latitude, position.coords.longitude);
      });
    }, [])
  
    return (
      <div className="homepage">
        <header className="homepage__header">
          <h1>Location app :)</h1>
          <button>Weather</button>
          <button>News</button>
      
        </header>
    
        <section className='homepage__weather'>
            {weather && <Weathercard weatherData={weather}/>}
          {weather && <Windcard weatherData={weather}/>}
        </section>
        <section className="homepage__temperature">
          <div className="homepage__temperature-container">
            <h1 className="homepage__temperature-today">How's the temperature today?</h1>
            <div className="homepage__linegraph">
                {temperatureData && <LineGraph temperatureData={temperatureData}/>}
            </div>
          </div>
          <WeatherTomorrowCard degrees={weather.forecast.forecastday[1].day.avgtemp_c} condition={weather.forecast.forecastday[1].day.condition.text}/>
        </section>
       
       
      </div>
    );
}


export default HomePage