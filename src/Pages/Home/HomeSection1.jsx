import React from 'react'

const HomeSection1 = ({firstHeader , headerPara , headerDesc, subHead, subHeadPara, marginTop}) => {
  return (
<div className={`mt-[60vh]`}>

<div className=' md:ml-14 w-[50rem] flex flex-col gap-7 '>
    <div  className=' text-[#333333] first-letter:text-teal-600 text-2xl    font-semibold  font-serif '>{firstHeader}</div>
    <div className='  text-[#333333]  text-8xl heavy-font '>{headerPara}
</div>

<p className=' text-2xl  text-wgray-800  font-sans font-semibold '>
{headerDesc}
</p>

</div>


<div className=' flex w-full  items-end text-left flex-col mr-8'>
    <div className='w-[45rem] flex gap-6 flex-col '>

<div  className=' text-[#333333] first-letter:text-teal-600 text-3xl  '>1/3</div>
    <div className='  text-[#333333]  text-5xl heavy-font'>{subHead}
</div>

<p className='text-2xl  text-wgray-800  font-sans font-semibold '>
{subHeadPara}
</p>


<div class="horizontal-div">
      <div
        style={{
          width : "80%",
          display: "flex",
         flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div class="sub_hori"></div>
      </div>
      <div class="arrow_hori">
      <svg className=' w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="currentColor" d="m17.14 18-1.46-1.49 3.39-3.46H1v-2.1h18.07l-3.39-3.46L17.14 6 23 12l-5.86 6Z"></path></svg>
      </div>
    </div>

    </div>

 



</div>


</div>
  )
}

export default HomeSection1
