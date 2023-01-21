import React from 'react'
import chef from '../Assests/chef.png'
import sign from '../Assests/sign.png'
import chef1 from '../Assests/chef-back.png'
const OurChefs = () => {
  return (
    <div className='mt-5 text-[#f0ac14] '>
      <h2 className='text-4xl text-center'>Our Chef's</h2>

      <div className='lg:flex justify-center lg:mt-5'>

        <img src={chef} alt="" className='mt-5 w-[28rem] m-auto lg:m-0'/>

        <div className='mb-5 lg:ml-16'>
        <div className='text-3xl text-white capitalize mt-5 text-center'>
          What we Believe in
        </div>

        <p className='text-white mt-5 w-[300px] text-center p-4 border-2 m-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quae. Explicabo repudiandae, omnis autem aliquid nulla maxime eos temporibus magnam atque provident nemo assumenda commodi. Nostrum fugit maxime hic! Aspernatur magnam nemo laudantium rerum quisquam delectus fugit nihil? Facere pariatur aut corporis officiis facilis nihil, in molestias quae recusandae. Voluptates, est. Velit minima a officia minus.
        </p>
        
        <div className='text-center w-full '>
          <img src={sign} alt="" className='mt-4 w-48 m-auto ' />
          <p className='text-2xl mt-3'>Chef & Founder</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default OurChefs