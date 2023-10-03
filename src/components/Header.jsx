import React from 'react'
import Navbar from './Navbar'
import arrow from '../assets/svg/icon-arrow-down.svg'
import './header.css'

const Header = () => {
    return (
        <header className='sm:h-[650px] h-screen w-full'>
            <Navbar />
            <div className='sm:mt-12 w-full mt-32 flex flex-col items-center gap-14 '>
                <h1 className='sm:text-5xl sm:text-center text-white text-7xl tracking-widest'>
                    WE ARE CREATIVES
                </h1>
                <img
                    className='w-14' 
                    src={arrow} 
                    alt="icon-arrow" />
            </div>
        </header>
    )
}

export default Header