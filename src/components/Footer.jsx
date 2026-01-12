import React from 'react'
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className='w-full bg-[#A9A09A] border-t border-black/20 p-4 backdrop-blur-lg flex flex-col gap-2 justify-center items-center'>
      <h2 className='text-sm sm:text-md font-light'>Made with ❤️ by Alok</h2>
      <div className='flex gap-4'>
        <Link to={"https://github.com/AlokKumarYadav2410"} target='_blank'>
          <FaGithub className='hover:scale-95 cursor-pointer transition-all duration-300 sm:text-xl' />
        </Link>
        <Link to={"https://www.linkedin.com/in/alokkumaryadav2410/"} target='_blank'>
          <FaLinkedin className='hover:scale-95 cursor-pointer transition-all duration-300 sm:text-xl' />
        </Link>
        <Link to={"https://x.com/@AlokDevJourney"} target='_blank'>
          <FaSquareXTwitter className='hover:scale-95 cursor-pointer transition-all duration-300 sm:text-xl' />
        </Link>
      </div>
      <p className='text-xs sm:text-sm font-light'>© 2026 Storeo. All rights reserved.</p>
    </div>
  )
}

export default Footer
