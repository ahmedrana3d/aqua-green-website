import React from 'react'
import Navbar from '../Navbar'
import HomeSection1 from './HomeSection1'
import HomeSection2 from './HomeSection2'
import HomeSection4 from './HomeSection4'
import HomeSection3 from './HomeSection3'
import HomeSection5 from './HomeSection5'
const HomePage = () => {


const slider_Style = {
  transform: "translateX(-100%) ",

}






  const customTextOpacity = 1;
  const color = `rgba(33, 102, 183, ${customTextOpacity})`;

  return (
    <>
    
      <Navbar/>

      <div className=' relative h-screen w-screen flex justify-center items-start my-16'>

      <h1 className="whitespace-nowrap text-blue text-[14vw] s:text-[14.75vw] leading-[.85]  " style={{ '--tw-text-opacity': customTextOpacity, color, }} data-v-25c80be6="">
        <div style={{ position: 'relative', display: 'inline-block', opacity: 1, transform: 'translate(0px, 0px)' }}>A</div>
        <div style={{ position: 'relative', display: 'inline-block', opacity: 1, transform: 'translate(0px, 0px)' }}>q</div>
        <div style={{ position: 'relative', display: 'inline-block', opacity: 1, transform: 'translate(0px, 0px)' }}>u</div>
        <div style={{ position: 'relative', display: 'inline-block', opacity: 1, transform: 'translate(0px, 0px)' }}>a</div>
        <div style={{ position: 'relative', display: 'inline-block', opacity: 1, margin: "0 15px", letterSpacing : ".0075em" }}></div>
        
        <span className="inline-block" data-v-25c80be6="" style={{ transform: 'rotate(15deg)' }}>
          <div style={{ position: 'relative', display: 'inline-block', opacity: 1, transform: 'translate(0px, 0px)' }}>G</div>
        </span>
        <div style={{ position: 'relative', display: 'inline-block', opacity: 1, transform: 'translate(0px, 0px)' }}>r</div>
        <div style={{ position: 'relative', display: 'inline-block', opacity: 1, transform: 'translate(0px, 0px)' }}>e</div>
        <div style={{ position: 'relative', display: 'inline-block', opacity: 1, transform: 'translate(0px, 0px)' }}>e</div>
        <div style={{ position: 'relative', display: 'inline-block', opacity: 1, transform: 'translate(0px, 0px)' }}>n</div>
   
      </h1>
    
  </div>

      <HomeSection1 firstHeader={"01.Our Exquisite Solutions"} headerPara={"Discover The Pinnacle Of Facilities Management"} headerDesc={"We embrace the art of refined facilities management, where elegance and excellence converge to create an unrivalled experience."} subHead={"Integrated Facilities Services"} subHeadPara={"We offer a wide array of services under one roof. From office porters, concierge staff, cleaning to supply consumables, waste management and more."}/>

<HomeSection2 firstHeader={"02.Extravaganzas"} headerPara={"Realm of Fantastical Services"} subHead={"Magical Cleaning and Janitorial Services"} subHeadPara={"Our team of superheroes (disguised as ordinary cleaners) with enchanted dusters, spellbinding cleaning potions, super powered vacuum cleaners, magic mops and fairy dust will transform your office or commercial, residential building into a shining beacon of cleanliness and productivity."}/>

<div className=' bg-transparent' >

<section id='slider-section' style={slider_Style}>
<HomeSection3/>
</section>

</div>
<div className=' bg-[#ebf7f8]'>



<HomeSection4/>




<div className='w-screen h-[70vh] flex justify-center items-center md:px-28'>
  <div className='text-4xl md:text-7xl text-slate-800 font-bold font-serif text-center  leading-7 md:leading-[9rem]' >
    As your trusted partner, our goal is to enhance your professional image, provide a clean environment, and leave a lasting impression on your clients.
  </div>
</div>



<HomeSection5/>

</div>




    </>
  )
}

export default HomePage
