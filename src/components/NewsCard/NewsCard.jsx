import React from 'react'
import './NewsCard.scss'
const NewsCard = ({newsData}) => {
  return (
    <div className="newscard">
        <h1 className="newscard__title">{newsData.title}</h1>
        <p className="newscard__text">{newsData.text}</p>
        <p className="newscard__author">{newsData.author}</p>
    </div>
  )
}

export default NewsCard