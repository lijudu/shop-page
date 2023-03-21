/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import Navbar from './Navbar'
import CartCard from './ItemCart'
import { ShopContext } from './Context'
import { plantList } from './ItemInfo'


export default function Cart(){
    const { cartItems, increaseCartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)

    const totalAmount = getTotalCartAmount()

    return(
        <div>
            <Navbar/>
            <div className='grid justify-center'>
                {plantList.map((item)=>{
                    if (cartItems[item.id] !== 0) {
                        return(
                            <CartCard
                                key={item.id}
                                id={item.id}
                                src={`${process.env.PUBLIC_URL}${item.url}`}
                                alt={item.alt}
                                name={item.name}
                                price={'$'+item.price}
                                quantity={cartItems[item.id]}
                                decrease={()=>{removeFromCart(item.id)}}
                                increase={()=>{increaseCartItems(item.id)}}
                                itemTotal={'$'+(item.price * cartItems[item.id])}
                            />)
                    }
                })}
                <div className='text-center'>Subtotal: ${totalAmount}</div>
                <button>Continue Shopping</button>
                <button>Checkout</button>
            </div>
        </div>
    )
}
