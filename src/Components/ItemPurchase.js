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
                onClick={handleClickToShop}
                className='px-10'>Back</button>
            <br/> 
            <div className='px-10 grid justify-center'>
                <Card
                    key={plantList[location.state.id - 1].id}
                    id={plantList[location.state.id - 1].id}
                    src={`${process.env.PUBLIC_URL}${plantList[location.state.id - 1].url}`}
                    alt={plantList[location.state.id - 1].alt}
                    name={plantList[location.state.id - 1].name}
                    price={'$'+plantList[location.state.id - 1].price}
                />
                <div className='flex justify-center py-2'>
                    <button onClick={decrease}>-</button>
                    <div className='px-4'>{counter}</div>
                    <button onClick={increase}>+</button>
                </div>
                <div className='flex justify-center py-2 border-2 border-black hover:border-white hover:text-white hover:bg-black'>
                    <button onClick={() => {
                        addToCart(location.state.id, counter)
                    }}>Add To Cart</button>
                </div>

            </div>

        </div>
    )
}
