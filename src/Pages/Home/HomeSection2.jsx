import React from 'react'

const HomeSection2 = ({firstHeader  , headerPara, subHead, subHeadPara }) => {
  return (
<div className={`mt-[90vh] mb-10`}>

<div className=' md:ml-14 w-[60rem] flex flex-col gap-7 '>
    <div  className=' text-slate-800 first-letter:text-teal-600 text-2xl  font-semibold font-serif '>{firstHeader}</div>
    <div className='  text-[#333333] first-letter:text-teal-600 text-8xl heavy-font'>{headerPara}
</div>



</div>


<div className=' flex w-full   items-end text-left flex-col'>
    <div className='w-[45rem] flex gap-6 flex-col mr-9'>

<div  className=' text-slate-800 first-letter:text-teal-600 text-2xl  font-semibold font-serif '>1/4</div>
    <div className='  text-[#333333] first-letter:text-teal-600 text-5xl heavy-font'>{subHead}
</div>

<p className=' text-2xl  text-gray-800  font-sans font-semibold'>
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
      <svg className=' w-7 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="currentColor" d="m17.14 18-1.46-1.49 3.39-3.46H1v-2.1h18.07l-3.39-3.46L17.14 6 23 12l-5.86 6Z"></path></svg>
      </div>
    </div>

    </div>

    

</div>


</div>
  )
}

export default HomeSection2
