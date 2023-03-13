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
        <div className='sticky top-0'>
            <ul className="flex">
                <li className="flex-1 mr-2">
                    <button 
                        className="text-center block py-2 px-4 hover:text-blue-800"
                        onClick={handleClickToHome}
                    >CatCatShop</button>
                </li>
                <li class="flex-1 mr-2">
                    <button 
                        className="text-center block py-2 px-4 text-blue-500 hover:text-blue-800" 
                        onClick={handleClickToShop}
                    >Shop</button>
                </li>
                <li class="flex-1 mr-2">
                    <button 
                        className="text-center block py-2 px-4 text-blue-500 hover:text-blue-800"
                        onClick={handleClickToCart}
                    >Cart</button>
                </li>

            </ul>
        </div>
    )
}
