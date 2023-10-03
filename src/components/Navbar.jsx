import React, { useState } from 'react'
import logo from '../assets/svg/logo.svg'
import ham from '../assets/svg/icon-hamburger.svg'
import './navbar.css'


const Navbar = () => {
    const [open,setOpen] = useState(false);
    return (
        <nav className='sm:px-5 relative w-full px-14 py-5 flex justify-between items-center'>
            <img
                className='p-4' 
                src={logo} 
                alt="logo-icon" />
            <ul className='sm:hidden flex items-center'>
                <li className='text-white mx-4 p-4'><a href="#">About</a></li>
                <li className='text-white mx-4 p-4'><a href="#">Services</a></li>
                <li className='text-white mx-4 p-4'><a href="#">Projects</a></li>
                <li className='text-black mx-4 py-4 px-7 bg-slate-50 opacity-50 rounded-[24px] hover:opacity-100' ><a href="#">CONTACT</a></li>
            </ul>

            
            <button className='sm:block hidden'>
                <img 
                onClick={() => setOpen(!open)}
                src={ham} 
                alt="icon-hamburger" />
            </button>
            <div id='triangle' className={`${open ? "block":"hidden"}` }></div>
            <ul className={`${open ? "block":"hidden"} absolute top-24 right-7 flex flex-col items-center bg-white px-20 py-4`}>
                <li className='text-slate-500 my-2 p-2 text-lg'><a href="#">About</a></li>
                <li className='text-slate-500 my-2 p-2 text-lg'><a href="#">Services</a></li>
                <li className='text-slate-500 my-2 p-2 text-lg'><a href="#">Projects</a></li>
                <li className='my-2 p-4 px-8 bg-yellow-300 rounded-full'><a href="#">CONTACT</a></li>
            </ul>
        </nav>
    )
}
export default Navbar