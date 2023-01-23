import React from 'react'
import p1 from '../Assests/MenuList/american/p1.webp'
import p2 from '../Assests/MenuList/burger/p1.jpg'
import p3 from '../Assests/MenuList/italian/p1.jpg'
import p4 from '../Assests/MenuList/chinese/p1.jpg'
import p5 from '../Assests/MenuList/northIndian/p1.jpg'
import p6 from '../Assests/MenuList/southIndian/p1.webp'
const QuickMenu = () => {
  return (
    <>
        <div className="">
            <p className='mt-5 md:pt-10 text-center text-3xl text-[#f0ac14] md:text-6xl'>
                Take a Look at Our Amazing Food
            </p>
            <div className="flex flex-wrap justify-center items-center w-full gap-4  md:gap-20 md:h-[480px] mt-5 mb-5">
                <img src={p1} alt="" className='w-44 h-44 border-2'/>
                <img src={p2} alt="" className='w-44 h-44 border-2'/>
                <img src={p3} alt="" className='w-44 h-44 border-2'/>
                <img src={p4} alt="" className='w-44 h-44 border-2'/>
                <img src={p5} alt="" className='w-44 h-44 border-2'/>
                <img src={p6} alt="" className='w-44 h-44 border-2'/>
            </div>
        </div>
    </>
  )
}

export default QuickMenu