import React from 'react'
import logo from '../assets/svg/footer.svg'
import facebook from '../assets/svg/icon-facebook.svg'
import instagram from '../assets/svg/icon-instagram.svg'
import twitter from '../assets/svg/icon-twitter.svg'
import pinterest from '../assets/svg/icon-pinterest.svg'

const Footer = () => {
    return (
        <footer className='bg-green-300 w-full h-[300px] flex flex-col justify-center items-center'>
            <img 
                className='text-red-500'
                src={logo}
                alt="logo-icon" />
            <ul className='flex mt-8 mb-16'>
                <li className='mx-8 text-green-800 font-semibold'><a href="#">About</a></li>
                <li className='mx-8 text-green-800 font-semibold'><a href="#">Services</a></li>
                <li className='mx-8 text-green-800 font-semibold'><a href="#">Projects</a></li>
            </ul>
            <ul className='flex'>
                <li className='mx-3'><a href="#"><img src={facebook} alt="" /></a></li>
                <li className='mx-3'><a href="#"><img src={instagram} alt="" /></a></li>
                <li className='mx-3'><a href="#"><img src={twitter} alt="" /></a></li>
                <li className='mx-3'><a href="#"><img src={pinterest} alt="" /></a></li>
            </ul>
        </footer>
    )
}

export default Footer