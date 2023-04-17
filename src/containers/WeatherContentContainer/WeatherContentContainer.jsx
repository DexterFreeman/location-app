import React, { useEffect, useState } from 'react'
import './WeatherContentContainer.scss'
import LineGraph from '../../components/LineGraph/LineGraph';
import WeatherTomorrowCard from '../../components/WeatherTomorrowCard/WeatherTomorrowCard';
import Weathercard from '../../components/Weathercard/Weathercard';
import Windcard from '../../components/Windcard/Windcard';
import WeatherPredictionCard from '../../components/WeatherPredictionCard/WeatherPredictionCard';


const WeatherContentContainer = ({weather, temperatureData}) => {
  console.log(weather)
  console.log(temperatureData)
  const preditctionJSX = () => {
    let removeToday = [...weather.forecast.forecastday]
    removeToday.shift()
    return removeToday.map((day, index) => {
      return <WeatherPredictionCard  key={index} forecastday={day}/>
    })
  };
  
  return (
    <main className="weathercontent">
        <section className='weathercontent__weather'>
            {weather && <Weathercard weatherData={weather}/>}
          {weather && <Windcard weatherData={weather}/>}
        </section>
        <section className='weathercontent__prediction'>
          <h2 className="weathercontent__prediction-text">Weather Prediction</h2>
          <div className="weathercontent__prediction-container">
             {preditctionJSX()}
          </div>
          
        </section>
        <section className="weathercontent__temperature">
          <div className="weathercontent__temperature-container">
            <h1 className="weathercontent__temperature-today">How's the temperature today?</h1>
            <div className="weathercontent__linegraph">
                {temperatureData && <LineGraph temperatureData={temperatureData}/>}
            </div>
          </div>
          {weather && <WeatherTomorrowCard degrees={weather.forecast.forecastday[1].day.avgtemp_c} condition={weather.forecast.forecastday[1].day.condition.text}/>}
        </section>
      
        </main>
  )
}

export default WeatherContentContainer