import React from 'react'
import NewsCard from '../../components/NewsCard/NewsCard'
import './NewsArticle.scss'
const NewsArticle = ({newsArticle}) => {
  return (
    <article className="newscontent__article">
        <NewsCard newsData={newsArticle}/>
           
        <img className='newscontent__article-img' src={newsArticle.image} alt="" srcset="" />
    </article>
  )
}

export default NewsArticle