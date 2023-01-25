import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
const SignUp = () => {
  return (
    <div className='bg-[#0d0d0e] text-white'>
      <Header/>
      <div className="border-2">
        <h4 className='text-[#f0ac14] text-xl text-center mt-8 font-bold'>👍Create New Account Here👍</h4>
        <div className="text-center mt-10 ">
        <form action="" className='md:flex'>
          <input type="email" placeholder='Enter your Email' className='text-center p-2 text-2xl text-black'/>
          <input type="password" placeholder='Enter your Password' className='text-center p-2 text-2xl mt-10 text-black'/>
          <button className='mt-10 border-2 text-2xl px-10 py-3 mb-10'>Create New Account</button>
        </form>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default SignUp