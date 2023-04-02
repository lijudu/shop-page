import React, { useContext }  from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from './Context'


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

    const { cartItems } = useContext(ShopContext)


    const getTotal = () => {
        if (Object.values(cartItems).reduce((a,b) => a + b, 0) !== 0) {
            return Object.values(cartItems).reduce((a,b) => a + b, 0)
        } else {
            return
        }
        // return Object.values(cartItems).reduce((a,b) => a + b, 0)
    }

    return(
        <div className=''>
            <ul className="md:flex">
                <li className="flex-1 flex flex-col justify-center md:items-start">
                    <button 
                        className="md:py-5 px-10 hover:text-yellow-300 text-5xl uppercase font-bold"
                        onClick={handleClickToHome}
                    >Banana Shop</button>
                </li>
                <li className="flex-2 flex flex-col justify-center items-center">
                    <button 
                        className="md:py-5 px-10 mx-5  hover:text-yellow-300 text-2xl uppercase" 
                        onClick={handleClickToShop}
                    >Shop</button>
                </li>
                <li className="flex-2 flex flex-col justify-center items-center">
                    <button 
                        className="md:py-5 px-10 mx-5 hover:text-yellow-300 text-2xl uppercase"
                        onClick={handleClickToCart}>Cart
                        <div className='text-sm'>{getTotal()}</div>
                    </button>
                </li>

            </ul>
        </div>
    )
}
