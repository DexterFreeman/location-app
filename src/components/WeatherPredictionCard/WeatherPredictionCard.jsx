import React from 'react'
import './WeatherPredictionCard.scss'
const WeatherPredictionCard = ({forecastday}) => {
  return (
    <div className='WPCard'>
        <img className='WPCard__img' srcset={forecastday.day.condition.icon} alt="" />
        <div className="WPCard__container">
            <p className="WPCard__date">{forecastday.date}</p>
            <p className="WPCard__condition">{forecastday.day.condition.text}</p>
        </div>
       
    </div>
  )
}

export default WeatherPredictionCard