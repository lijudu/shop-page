import React from 'react'
import Navbar from './Navbar'
import Card from './ItemCard' 
import { plantList } from './ItemInfo'

export default function Shop(){

    return(
        <div>
            <Navbar />
            <div className='text-blue-700'>This is the shop page</div>
            <Card
                src={`${process.env.PUBLIC_URL}${plantList[0].url}`}
                alt={plantList[0].alt}
                name={plantList[0].name}
                price={plantList[0].price}
            />
            <Card
                src={`${process.env.PUBLIC_URL}${plantList[1].url}`}
                alt={plantList[1].alt}
                name={plantList[1].name}
                price={plantList[1].price}
            />
            <Card
                src={`${process.env.PUBLIC_URL}${plantList[2].url}`}
                alt={plantList[2].alt}
                name={plantList[2].name}
                price={plantList[2].price}
            />
            <Card
                src={`${process.env.PUBLIC_URL}${plantList[3].url}`}
                alt={plantList[3].alt}
                name={plantList[3].name}
                price={plantList[3].price}
            />
            <Card
                src={`${process.env.PUBLIC_URL}${plantList[4].url}`}
                alt={plantList[4].alt}
                name={plantList[4].name}
                price={plantList[4].price}
            />
            <Card
                src={`${process.env.PUBLIC_URL}${plantList[5].url}`}
                alt={plantList[5].alt}
                name={plantList[5].name}
                price={plantList[5].price}
            />
            <Card
                src={`${process.env.PUBLIC_URL}${plantList[6].url}`}
                alt={plantList[6].alt}
                name={plantList[6].name}
                price={plantList[6].price}
            />
            <Card
                src={`${process.env.PUBLIC_URL}${plantList[7].url}`}
                alt={plantList[7].alt}
                name={plantList[7].name}
                price={plantList[7].price}
            />
            <Card
                src={`${process.env.PUBLIC_URL}${plantList[8].url}`}
                alt={plantList[8].alt}
                name={plantList[8].name}
                price={plantList[8].price}
            />            
        </div>
    )
}
