import React from 'react'
import Navbar from './Navbar'
import { useNavigate, useLocation } from 'react-router-dom'
import Card from './ItemCard'
import { plantList } from './ItemInfo'

export default function ItemPurchase() {
    const navigate = useNavigate()

    const handleClickToShop = () => {
        navigate('/shop')
        
    }

    const location = useLocation()


    return(
        <div>
            <Navbar />
            <button
                onClick={handleClickToShop}>Back</button>
            <br/> 
            <Card 
                key={plantList[location.state.id - 1].id}
                id={plantList[location.state.id - 1].id}
                src={`${process.env.PUBLIC_URL}${plantList[location.state.id - 1].url}`}
                alt={plantList[location.state.id - 1].alt}
                name={plantList[location.state.id - 1].name}
                price={plantList[location.state.id - 1].price}
            />
            <button>Add to Cart</button>

        </div>
    )
}
