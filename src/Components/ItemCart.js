import React from 'react'

export default function CartCard(props) {

    return(
        <div className='flex'
            id={props.id}>
            <img
                className='object-cover h-24 w-24'
                src={props.src}
                alt={props.alt}></img>
            <div className=''>
                <div>{props.name}</div>
                <div className='flex'>
                    <button onClick={props.decrease}>-</button>
                    <div>{props.quantity}</div>
                    <button onClick={props.increase}>+</button>
                </div>
            </div>
        </div>
    )
}