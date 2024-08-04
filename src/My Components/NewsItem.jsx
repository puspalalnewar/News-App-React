import React from 'react'
import newslogo from'./newslogo.png'

const NewsItem = ({title, desc, url, src}) => {
    return (
        <div className=''>
            <div className="card bg-dark text-light mb-3 my-3 mx-3" style={{maxWidth : "345px"}}>
                <img src={src ? src : newslogo} style = {{height:"200px",width:""}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{desc ? desc.slice(0,90) : "Description NA"}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
