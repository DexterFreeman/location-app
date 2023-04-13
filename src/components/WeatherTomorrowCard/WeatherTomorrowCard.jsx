import React from 'react'
import './WeatherTomorrowCard.scss'
const WeatherTomorrowCard = ({degrees, condition}) => {
  return (
    <div className='WTCard'>
        <p className="WTCard__title">Tomorrow</p>
        <h1 className='WTCard__degrees'>{`${degrees}°C`}</h1>
        <p className='WTCard__condition'>{condition}</p>
    </div>
  )
}

export default WeatherTomorrowCard