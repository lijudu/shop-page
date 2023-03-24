import React from 'react'

export default function Card(props) {

    return(
        <div className=''
            id={props.id}
            onClick={props.onClick}>
    
            <img
                className='object-cover h-96'
                src={props.src}
                alt={props.alt}></img>
            <div className='text-center'>
                <div className='text-2xl'>{props.name}</div>
                <div className=''>{props.price}</div>
            </div>
        </div>
    )
}