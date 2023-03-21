import React, { createContext, useState } from 'react'
import { plantList } from './ItemInfo'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i=1; i< plantList.length + 1; i++) {
        cart[i] = 0
    }
    return cart; 
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    const addToCart = (itemId, quantity) => {
        
        setCartItems((prev) => ({...prev, [itemId]: (quantity + prev[itemId]) }))
        // setCartTotal(Object.values(cartItems).reduce((a,b) => a + b, 0))
    };

    console.log(cartItems)

    const increaseCartItems = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }


    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }


    const contextValue = {cartItems, addToCart, removeFromCart, increaseCartItems}

    return(
        <ShopContext.Provider value ={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}