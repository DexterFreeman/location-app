import React, { useEffect, useState } from 'react'
import './NewsContentContainer.scss'
import NewsCard from '../../components/NewsCard/NewsCard';
import NewsArticle from '../NewsArticle/NewsArticle';
const NewsContentContainer = ({newsData}) => {
    let [articleJSX, setArticleJSX] = useState(); 

    const getArticleJSX = () => {
        setArticleJSX(newsData.news.map((article) => {
            return <NewsArticle newsArticle={article}/>
        }))
        console.log(articleJSX)
    }
    useState(() => {
        getArticleJSX();
    }, [])

  return (
    <main className='newscontent'>
        <article className="newscontent__article">
            <NewsCard newsData={newsData.news[0]}/>
           
            <img className='newscontent__article-img' src={newsData.news[0].image} alt="" srcset="" />
        </article>
        {articleJSX}
    </main>
  )
}

export default NewsContentContainer