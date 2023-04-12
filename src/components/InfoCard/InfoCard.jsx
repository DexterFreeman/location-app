import React from 'react'
import './InfoCard.scss'
const InfoCard = ({colour, title, frequency, isTextDark }) => {
  return (
    <div className='InfoCard'style={{backgroundColor: colour}}>
        <p className={ isTextDark ? "InfoCard__title" : "InfoCard__title white"}>{title}</p>
        <p className={ isTextDark ? "InfoCard__frequency" : "InfoCard__frequency white"}>{frequency}</p>
    </div>
  )
}

export default InfoCard