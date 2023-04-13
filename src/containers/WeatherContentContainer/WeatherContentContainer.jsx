import React from 'react'
import './WeatherContentContainer.scss'
import LineGraph from '../../components/LineGraph/LineGraph';
import WeatherTomorrowCard from '../../components/WeatherTomorrowCard/WeatherTomorrowCard';
import Weathercard from '../../components/Weathercard/Weathercard';
import Windcard from '../../components/Windcard/Windcard';

const WeatherContentContainer = ({weather, temperatureData}) => {
  return (
    <main className="weathercontent">
        <section className='weathercontent__weather'>
            {weather && <Weathercard weatherData={weather}/>}
          {weather && <Windcard weatherData={weather}/>}
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