import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import ItemPurchase from './ItemPurchase'
import { ShopContextProvider } from './Context'

export default function RouteSwitch(){
    return(
        <ShopContextProvider>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/item' element={<ItemPurchase/>}/>
                </Routes>
            </HashRouter>
        </ShopContextProvider>
    )
}
