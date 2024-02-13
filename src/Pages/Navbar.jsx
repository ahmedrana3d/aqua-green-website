import React from 'react'

const Navbar = () => {
  return (
  <>
  
  <div className='relative  flex w-full justify-around md:justify-between md:px-16 md:mt-24  '>
<h1 className='text-xl md:text-4xl   font-medium  font-serif  text-black'>Aqua Green</h1>
<div className='flex  gap-5 md:gap-20'>
<div className=' font-light text-[#333333] text-xl md:text-3xl  cursor-pointer  bold-font' >About Us</div>
<div className=' font-light text-[#333333] text-xl md:text-3xl  cursor-pointer bold-font'>Partners</div>
</div>
  </div>
  
  
  </>
  )
}

export default Navbar
