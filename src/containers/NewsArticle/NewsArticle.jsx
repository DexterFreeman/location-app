import React from 'react'
import NewsCard from '../../components/NewsCard/NewsCard'
import './NewsArticle.scss'
const NewsArticle = ({newsArticle}) => {
  return (
    <article className="newsarticle">
        <NewsCard newsData={newsArticle}/>
        <img className='newsarticle__img' srcset={newsArticle.image} alt="" src="https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" />
    </article>
  )
}

export default NewsArticle