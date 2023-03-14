import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar(){
    const navigate = useNavigate()

    const handleClickToShop = () => {
        navigate('/shop')
    }

    const handleClickToHome = () => {
        navigate('/')
    }

    const handleClickToCart = () => {
        navigate('/cart')
    }

    return(
        <div className=''>
            <ul className="flex">
                <li className="flex-1">
                    <button 
                        className="py-5 px-10 hover:text-blue-800 text-2xl"
                        onClick={handleClickToHome}
                    >PlantShopShop</button>
                </li>
                <li class="flex-2">
                    <button 
                        className="py-5 px-10 mx-5  hover:text-blue-800 text-2xl" 
                        onClick={handleClickToShop}
                    >Shop</button>
                </li>
                <li class="flex-2 ">
                    <button 
                        className="py-5 px-10 mx-5 hover:text-blue-800 text-2xl"
                        onClick={handleClickToCart}
                    >Cart</button>
                </li>

            </ul>
        </div>
    )
}
