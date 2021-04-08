import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className='card'>
            <p key={id}>{title}</p>
            <img alt={title} src={url}></img>
        </div>
    )
}
