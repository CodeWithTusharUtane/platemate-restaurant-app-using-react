import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
const ErrorPage = () => {
  return (
    <div className='bg-[#0d0d0e] text-white'>
      <Header/>
      This is error page, you are on wrong url sir.
      <Footer/>
    </div>
  )
}

export default ErrorPage
