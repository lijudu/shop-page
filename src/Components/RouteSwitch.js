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
            <HashRouter basename={process.env.PUBLIC_URL}> 
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/shop' element={<Shop/>}/>
                    <Route exact path='/cart' element={<Cart/>}/>
                    <Route exact path='/item' element={<ItemPurchase/>}/>
                </Routes>
            </HashRouter>
        </ShopContextProvider>
    )
}
