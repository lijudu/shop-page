import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar(props){
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
                    >Banana Shop</button>
                </li>
                <li className="flex-2">
                    <button 
                        className="py-5 px-10 mx-5  hover:text-blue-800 text-2xl" 
                        onClick={handleClickToShop}
                    >Shop</button>
                </li>
                <li className="flex-2 ">
                    <button 
                        className="py-5 px-10 mx-5 hover:text-blue-800 text-2xl"
                        onClick={handleClickToCart}
                    >Cart
                        <div>{props.total}</div>
                    </button>
                </li>

            </ul>
        </div>
    )
}
