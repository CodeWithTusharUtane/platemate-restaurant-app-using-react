import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Menu1 from '../Components/menu1'
import SidebarSectionMenu from '../Components/SidebarSectionMenu'

const Menu = () => {
  return (
    <div className='bg-[#0d0d0e] text-white'>
      <Header/>
      <SidebarSectionMenu/>
      {/* <Menu1/> */}

      <Footer/>
      </div>
  )
}

export default Menu