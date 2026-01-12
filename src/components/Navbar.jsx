import React from 'react'
import { NavLink } from 'react-router'
// import './Navbar.css'
// import { a } from 'react-router'

const Navbar = () => {

    const notActiveLink = "text-(--text) text-lg font-light px-2 py-1 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
    const activeLink = "text-white text-lg font-light bg-black px-2 py-1 rounded-lg"

    return (
        <div className='flex justify-between px-4 sm:px-8 backdrop-blur-lg fixed left-1/2 -translate-x-1/2 top-0 h-16 w-full max-w-500 transition-all duration-300 items-center z-10 bg-[#A9A09A]'>
            {/* <div> */}
                <h1 className='text-white text-xl font-light tracking-wider animate-bounce bg-black px-4 py-2 rounded-lg'>Storeo</h1>
            {/* </div> */}
            <div className='hidden md:flex gap-4 transition-all duration-300'>
                <NavLink to="/" className={({isActive}) => isActive ? activeLink : notActiveLink}>Home</NavLink>
                <NavLink to="/products" className={({isActive}) => isActive ? activeLink : notActiveLink}>Products</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? activeLink : notActiveLink}>About</NavLink>
            </div>

            <div className='flex md:hidden transition-all duration-300'>
                <button className='text-(--text)'>Menu</button>
            </div>
        </div>
    )
}

export default Navbar
