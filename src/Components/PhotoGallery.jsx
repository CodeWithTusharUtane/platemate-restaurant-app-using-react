import React from 'react'
import gallery1 from '../Assests/gallery01.png'
import gallery2 from '../Assests/gallery02.png'
import gallery3 from '../Assests/gallery03.png'
import gallery4 from '../Assests/gallery04.png'
import drink from '../Assests/drinks.png'
import special from '../Assests/specialCategory.jpg'
import hero2 from '../Assests/hero2.png'
import hero3 from '../Assests/hero3.jpg'


const PhotoGallery = () => {
  return (
    <>
    <div className='mt-5'>
      {/* Heading */}
        <div className="text-center">
          <h2 className='text-[#f0ac14] text-4xl md:text-5xl lg:text-6xl '>Photo Gallery</h2>
        </div>
        {/* Photos */}
        <div className=' w-full  m-auto mt-5  grid grid-cols-3 lg:grid-cols-4'>
        <img src={gallery1} alt="" className='w-[200px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[300px] lg:h-[500px] m-auto my-5 border-2 hover:scale-105 transition duration-300 ease-in-out'/>
        <img src={gallery2} alt="" className='w-[200px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[300px] lg:h-[500px] m-auto my-5 border-2 hover:scale-105 transition duration-300 ease-in-out'/>
        <img src={gallery4} alt="" className='w-[200px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[300px] lg:h-[500px] m-auto my-5 border-2 hover:scale-105 transition duration-300 ease-in-out'/>
        <img src={drink} alt="" className='w-[200px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[300px] lg:h-[500px] m-auto my-5 border-2 hover:scale-105 transition duration-300 ease-in-out'/>
        <img src={gallery3} alt="" className='w-[200px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[300px] lg:h-[500px] m-auto my-5 border-2 hover:scale-105 transition duration-300 ease-in-out'/>
        <img src={special} alt="" className='w-[200px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[300px] lg:h-[500px] m-auto my-5 border-2 hover:scale-105 transition duration-300 ease-in-out'/>
        <img src={hero2} alt="" className='w-[200px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[300px] lg:h-[500px] m-auto my-5 border-2 hover:scale-105 transition duration-300 ease-in-out'/>
        <img src={hero3} alt="" className='w-[200px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[300px] lg:h-[500px] m-auto my-5 border-2 hover:scale-105 transition duration-300 ease-in-out'/>
        </div>

            
    </div>
    </>
  )
}

export default PhotoGallery


