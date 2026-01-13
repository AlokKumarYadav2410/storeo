import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {

  const navigate = useNavigate();

  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  }

  const notActiveLink = "text-(--text) text-lg font-light px-4 py-1 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
  const activeLink = "text-white text-lg font-light bg-black px-4 py-1 rounded-lg"

  return (
    <div className='flex justify-between px-4 sm:px-8 backdrop-blur-lg fixed left-1/2 -translate-x-1/2 top-0 h-16 w-full max-w-500 transition-all duration-300 items-center z-10 bg-[#A9A09A]/80'>
      <h1 onClick={() => navigate('/')} className='text-white text-xl font-light tracking-wider animate-bounce bg-black px-4 py-2 rounded-lg cursor-pointer'>Storeo</h1>
      <div className='hidden md:flex gap-4 transition-all duration-300'>
        <NavLink to="/" className={({ isActive }) => isActive ? activeLink : notActiveLink}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? activeLink : notActiveLink}>Products</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? activeLink : notActiveLink}>About</NavLink>
      </div>

      <button onClick={handleMenuToggle} className="md:hidden">
        {!menuToggle ?
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-(--text)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-(--text)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        }
      </button>

      {/* <div
                className={`
          fixed top-0 left-0 w-full h-screen
          bg-[#A9A09A] backdrop-blur-3xl
          flex flex-col justify-center items-center gap-4
          transition-all duration-500 ease-in-out
          ${menuToggle ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
        `}
            >
                <button
                    onClick={() => setMenuToggle(false)}
                    className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-lg"
                >
                    Close
                </button>

                <NavLink to="/" onClick={() => setMenuToggle(false)} className={({ isActive }) => isActive ? activeLink : notActiveLink}>Home</NavLink>
                <NavLink to="/products" onClick={() => setMenuToggle(false)} className={({ isActive }) => isActive ? activeLink : notActiveLink}>Products</NavLink>
                <NavLink to="/about" onClick={() => setMenuToggle(false)} className={({ isActive }) => isActive ? activeLink : notActiveLink}>About</NavLink>
            </div> */}

      <AnimatePresence>
        {menuToggle && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut', type: 'spring', stiffness: 120, damping: 20 }}

            className="fixed top-14 left-0 w-full h-screen bg-[#A9A09A] backdrop-blur-3xl flex flex-col pt-50 px-10 text-center gap-4"
          >
            <NavLink to="/" onClick={() => setMenuToggle(false)} className={({ isActive }) => isActive ? activeLink : notActiveLink}>Home</NavLink>
            <NavLink to="/products" onClick={() => setMenuToggle(false)} className={({ isActive }) => isActive ? activeLink : notActiveLink}>Products</NavLink>
            <NavLink to="/about" onClick={() => setMenuToggle(false)} className={({ isActive }) => isActive ? activeLink : notActiveLink}>About</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
