import React from 'react'
import logo from '../assets/logo.jpg'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false);
  return (
    <div className='p-2 relative z-10 shadow-lg bg-gray-100 fixed w-full Container' >
        <div className='grid grid-cols-3 gap-4 items-center'>
            <img src={logo} alt='' className=' w-12 rounded-full'/>
       
        <div >
            <ul className='hidden md:flex gap-8 text-center font-semibold'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Mission</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
                <li className='cursor-pointer'>Donations</li>
            </ul>
      </div>
      <div className='flex justify-end gap-4 p-3'>
        <button className='px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition'>Sign In</button>
        <button className='px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition'>Donate</button>
      </div>
      </div>
       </div>
  )
}

export default Navbar
