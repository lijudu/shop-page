import React from 'react'

export default function CartCard(props) {

    return(
        <div className='flex py-3'
            id={props.id}>
            <img
                className='object-cover h-24 w-24'
                src={props.src}
                alt={props.alt}></img>
            <div className='px-7'>
                <div>{props.name}</div>
                <div className=''>{props.price}</div>
                <div className='flex'>
                    <button onClick={props.decrease}>-</button>
                    <div className='px-2'>{props.quantity}</div>
                    <button onClick={props.increase}>+</button>
                </div>
                {/* <div>{props.itemTotal}</div> */}
                <button
                className=' hover:border-white hover:text-white hover:bg-black' 
                onClick={props.delete}>Delete</button>
            </div>
        </div>
    )
}