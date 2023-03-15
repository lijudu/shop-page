import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import ItemPurchase from './ItemPurchase'

export default function RouteSwitch(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/item' element={<ItemPurchase/>}/>
            </Routes>
        </BrowserRouter>
    )
}
