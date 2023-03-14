import React from 'react'
import Navbar from './Navbar'
import Card from './ItemCard' 
import { plantList } from './ItemInfo'

export default function Shop(){

    const clicked = (e) => {
        e.preventDefault()
        alert(e.currentTarget.id)
    }
    return(
        <div>
            <div className='sticky top-0 bg-red-100'>
                <Navbar />
            </div>
            <div className='grid grid-cols-3 gap-y-10 justify-center'>
                {plantList.map((item) => {
                    return(
                            <Card 
                                onClick={clicked}
                                key={item.id}
                                id={item.id}
                                src={`${process.env.PUBLIC_URL}${item.url}`}
                                alt={item.alt}
                                name={item.name}
                                price={item.price}

                            />
                    )
                })}
            </div>
    
        </div>
    )
}
