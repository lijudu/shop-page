import React from 'react'

export default function Card(props) {

    return(
        <div className=''>
            <img
                className='h-64'
                src={props.src}
                alt={props.alt}></img>
            <div>{props.name}</div>
            <div>{props.price}</div>
        </div>
    )
}