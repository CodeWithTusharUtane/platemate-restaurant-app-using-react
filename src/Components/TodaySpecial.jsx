import React from 'react'
import drinks from '../Assests/drinks.png'
const TodaySpecial = () => {
  return (
    <>
    <div className='mt-5 mb-5'>
        <h2 className='text-[#f0ac14] text-3xl text-center'>Today's Special</h2>


        <div className='flex justify-evenly'>
        <div className='hidden md:flex lg:flex mt-5 '>
          <div>
          <h4 className='text-3xl text-[#f0ac14] text-center'>
            Cocktail
          </h4>
            <ul className='text-white text-md mt-3'>
              <li className='mt-3'>Aperol Spritz</li>
              <li className='mt-3'>Dark 'N' Storm</li>
              <li className='mt-3'>Daiquiri</li>
              <li className='mt-3'>Old Fashioned</li>
              <li className='mt-3'>Negroni</li>
            </ul>
          </div>
        </div>
          <img src={drinks} alt="" className='w-44 '/>
        <div className='mt-5'>
          <h4 className='text-3xl text-[#f0ac14]  text-center'>Drinks</h4>
          <ul className='mt-3 '>
            <li className='mt-3'>Chapel's Hill Shiraz</li>
            <li className='mt-3'>Catena Malbee</li>
            <li className='mt-3'>Lavielillew Rose</li>
            <li className='mt-3'>Rhino Pale Ale</li>
            <li className='mt-3'>Irish Guiness</li>
          </ul>
        </div>
       
        
        </div>
    </div>
    </>
  )
}

export default TodaySpecial