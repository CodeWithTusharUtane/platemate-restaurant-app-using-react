import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Hero from '../Components/Hero'
import OurLaurels from '../Components/OurLaurels'
import Footer from '../Components/Footer'
import TodaySpecial from '../Components/TodaySpecial'
import OurChefs from '../Components/OurChefs'
import PhotoGallery from '../Components/PhotoGallery'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-[#0d0d0e] text-white w-full'>
      <Header/>
      <hr />
      <Slider/>
      <hr />
      <Hero/>
      <hr />
      <TodaySpecial/>
      <hr />
      <OurLaurels/>
      <hr />
      <OurChefs/>
      <hr />
      <PhotoGallery/>
      <hr />
      <Footer/>
    </div>
  )
}

export default Home
