
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

    // https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=659f0b4b809b49279bead0c1015c98d7`

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=659f0b4b809b49279bead0c1015c98d7`;

        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category])

    const myStyle = {
        display : "flex",
        justifyContent : "center",
        flexWrap : "wrap"
    }

    return (
        <div>
            <h2 className="text-center my-3">Latest <span className='bg-danger badge'>News</span></h2>
            <div className="container" style={myStyle}>
                {articles.map((news, idx) => {
                    return <NewsItem key={idx} title={news.title} desc={news.description} src={news.urlToImage} url={news.url} />
                })}
            </div>

        </div>
    )
}

export default NewsBoard
