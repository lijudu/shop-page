import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate, useLocation } from 'react-router-dom'
import Card from './ItemCard'
import { plantList } from './ItemInfo'
import { ShopContext } from './Context'

export default function ItemPurchase() {
    const navigate = useNavigate()

    const handleClickToShop = () => {
        navigate('/shop')
        
    }

    const { addToCart } = useContext(ShopContext)
    const location = useLocation()

    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(count => count + 1)
    };

    const decrease = () => {
        setCounter(count => count - 1)
    }


    return(
        <div>
            <Navbar 
              />
            <button
                onClick={handleClickToShop}>Back</button>
            <br/> 
            <Card
                key={plantList[location.state.id - 1].id}
                id={plantList[location.state.id - 1].id}
                src={`${process.env.PUBLIC_URL}${plantList[location.state.id - 1].url}`}
                alt={plantList[location.state.id - 1].alt}
                name={plantList[location.state.id - 1].name}
                price={'$'+plantList[location.state.id - 1].price}
            />
            <button onClick={decrease}>-</button>
            {counter}
            <button onClick={increase}>+</button>
            <br/>
            <button onClick={() => {
                addToCart(location.state.id, counter)
            }}>Add To Cart</button>
        </div>
    )
}
