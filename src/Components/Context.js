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
    };

    console.log(cartItems)

    const increaseCartItems = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }


    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

    const deleteItem = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: 0 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item  in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = plantList.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }


    const contextValue = {cartItems, addToCart, removeFromCart, increaseCartItems, getTotalCartAmount, deleteItem}

    return(
        <ShopContext.Provider value ={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}