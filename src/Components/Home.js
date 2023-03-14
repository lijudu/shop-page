
import React from 'react'
import Navbar from './Navbar'

export default function Home() {
    return(
        <div className='bg-background-plants bg-cover h-screen bg-top'>
            <Navbar />
            <div 
                className='text-red-800'
                >This is the homepage</div>
        </div>
    )
}
