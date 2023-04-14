import React, { useEffect, useState } from 'react'
import './NewsContentContainer.scss'
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
        {articleJSX}
    </main>
  )
}
export default NewsContentContainer