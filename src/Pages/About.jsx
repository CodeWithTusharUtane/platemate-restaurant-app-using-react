import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import logo from '../Assests/res-logo.png'
import chef1 from '../Assests/chef2.jpg'
import jinping from '../Assests/jinping.png'
const About = () => {
  return (
    <div className='bg-[#0d0d0e] text-white'>
      <Header/>
      <div>
        <div className='text-4xl text-center flex justify-center mt-7 mb-5 text-[#f0ac14] uppercase'>
          <img src={logo} alt="" className='w-10 h-10'/>
          platemate
          <img src={logo} alt="" className='w-10 h-10'/>
        </div>
        <div className='text-xl text-center capitalize mb-5 '>
          <h2 className='text-2xl mt-5 mb-10'>
            This is what you need to know about Platemate.
          </h2>
          <p>
          We serve authentic traditional and modern American, Italian, Chinese, Indian cuisine with an ambitious wide-ranging tapas-style menu.
          </p>
          <p>
          The menu allows you to sample a variety of different flavours and textures from the diverse regions of Mexico.
          </p>
          <p>
          We have the #1 patio in the city and it's heated.
          </p>
          <p>
          The team is dedicated to creating a totally fun atmosphere, with caring above and beyond service, to produce transportive dining.
          </p>
          <p>
          The team is dedicated to creating a totally fun atmosphere, with caring above and beyond service, to produce transportive dining.
          </p>
          <img src={chef1} alt="" className='mt-10 border-4 m-auto border-white md:w-[800px] md:h-[800px]'/>
          <img src={jinping} alt="" className='m-auto'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
