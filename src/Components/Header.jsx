import React,{useState} from 'react'
import {FaShoppingCart, FaHamburger} from 'react-icons/fa'
import {GiForkKnifeSpoon} from 'react-icons/gi'
const Header = () => {

  const [nav, setNav] = useState(false)

  return (
    <>
    {/* mobile and tablet view */}
    <div className="w-screen h-16 bg-[#120f23] text-[#f0ac14] flex items-center justify-evenly text-4xl md:h-20 md:text-5xl lg:hidden">
      <div className="">
        Plate<span>Mate</span>
      </div>
      <div className="">
        <FaShoppingCart/>
      </div>
      
      <div className="">
        <FaHamburger className='cursor-pointer' onClick={()=>{setNav(!nav)}} />
      </div>

      <div className={nav ? 'fixed top-0 left-0 w-screen h-screen bg-[#120f23] z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-[#120f23] z-10 duration-300' }>
        <GiForkKnifeSpoon
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-7 top-5 cursor-pointer md:right-20 md:top-7 '
        />
       <div className="pl-5 pt-3">
        Plate<span>Mate</span>
      </div>
      <div className='text-3xl text-center mt-5 '>
        <ul>
          <li className='mt-5 md:mt-10'>Home</li>
          <li className='mt-5 md:mt-10'>About</li>
          <li className='mt-5 md:mt-10'>Menu</li>
          <li className='mt-5 md:mt-10'>Offers</li>
          <li className='mt-5 md:mt-10'>Contact</li>
          <li className='mt-5 md:mt-10'>Cart</li>
          <li className='mt-5 md:mt-10'>Sign Up</li>
          <li className='mt-5 md:mt-10'>Log In</li>
        </ul>
      </div>
        </div>
    </div>

        {/* Desktop view */}
    <div className="hidden lg:flex h-16 bg-[#120f23] text-[#f0ac14] items-center justify-evenly">
      {/* heading  */}
        <div className="text-5xl ">
          <h1>PlateMate</h1>
        </div>
        {/* links */}
        <div className="text-2xl ">
          <ul className='flex space-x-10'>
            <li>Home</li>
            <li>Menu</li>
            <li>Offers</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* buttons */}
        <div className='space-x-3'>
            <button className='bg-[#f0ac14] text-[#120f23] px-3 py-1 rounded-full'>Cart</button>
            <button className='bg-[#f0ac14] text-[#120f23] px-3 py-1 rounded-full'>Log In</button>
            <button className='bg-[#f0ac14] text-[#120f23] px-3 py-1 rounded-full'>Sign Up</button>
        </div>
    </div>
  
    </>
  )
}

export default Header