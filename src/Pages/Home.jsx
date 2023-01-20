import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Hero from '../Components/Hero'
import OurLaurels from '../Components/OurLaurels'
import Footer from '../Components/Footer'
import TodaySpecial from '../Components/TodaySpecial'
const Home = () => {
  return (
    <div className='bg-[#0d0d0e] text-white'>
      <Header/>
      <hr />
      <Slider/>
      <hr />
      <Hero/>
      <hr />
      <TodaySpecial/>
      <hr />
      {/* <OurLaurels/> */}
    </div>
  )
}

export default Home
