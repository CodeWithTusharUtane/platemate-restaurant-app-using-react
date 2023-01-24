import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
const LogIn = () => {
  return (
    <div className='bg-[#0d0d0e] text-white'>
      <Header/>
      <div className='w-full h-[500px]'>
        <div className=' w-[80%] m-auto'>
          <p className='font-bold text-2xl mt-5 uppercase md:text-3xl xl:text-4xl'>✌️Login to PlateMate✌️</p>
          <form action="" className='text-center mt-5'>
            <input type="email" placeholder='Enter your Email' className=' w-[100%] h-10 text-center bg-[#0d0d0e] border-2 text-2xl'/>
            <input type="email" placeholder='Enter your Password' className=' w-[100%] h-10 text-center bg-[#0d0d0e] mt-5 border-2 text-2xl'/>
            <button className='border-2 mt-10 px-10 text-2xl'>Log In</button>
          </form>
        </div>
      </div>
      <Footer/>
      
      </div>
  )
}

export default LogIn