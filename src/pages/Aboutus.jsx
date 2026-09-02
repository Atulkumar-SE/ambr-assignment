import React from 'react'
import aboutus from '../assets/aboutus.jpg'

const Aboutus = () => {
  return (
    <div className=' relative flex flex-col text-black items-center justify-center w-full h-[78vh] '>
      <img src={aboutus} alt="About Us" className='w-full h-full object-cover  ' />
      <div className='absolute top-1/3 left-1/5'>
      <h1 className=' text-[4rem] md:text-[7rem] font-bold mb-4'>About Us</h1>
    </div>
    </div>
  )
};

export default Aboutus;