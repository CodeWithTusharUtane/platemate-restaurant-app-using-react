import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import nooffer from '../Assests/nooffer.png'


const Offers = () => {
  return (
    <div className='bg-[#0d0d0e] text-white'>
      <Header/>
        <div className='text-6xl text-center mt-10 mb-10'>
          Sorry! No Offers Today!!😊
        </div>
      <Footer/>
      </div>
  )
}

export default Offers