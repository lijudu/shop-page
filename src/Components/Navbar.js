import React from 'react'

export default function Navbar(){
    return(
        <div className='sticky top-0'>
            <ul className="flex">
                <li className="flex-1 mr-2">
                    <div className="text-center block py-2 px-4 hover:text-blue-800" >CatCatShop</div>
                </li>
                <li class="flex-1 mr-2">
                    <div className="text-center block py-2 px-4 text-blue-500 hover:text-blue-800">Shop</div>
                </li>
                <li class="flex-1 mr-2">
                    <div className="text-center block py-2 px-4 text-blue-500 hover:text-blue-800">Cart</div>
                </li>

            </ul>
        </div>
    )
}
