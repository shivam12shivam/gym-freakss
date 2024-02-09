import React from 'react'
import { DietCard } from '../cards/DietCard'
import { useNavigate } from 'react-router-dom'
import { Fade } from 'react-swift-reveal';

function Diet() {
  let navigate=useNavigate();

  return (
    <Fade duration={2000}>
    <div className="bg-gradient-to-r from-indigo-200 to-indigo-700">
      <div className='p-4 my-4 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12'>
        <DietCard info={"CUTTING"} path={"/diet/cutting"} />
        <DietCard info={"BULKING"} path={"/diet/bulking"} />
      </div>
    </div>
    </Fade>
  )
}

export default Diet

{/* <div>
<div className="bg-[url('https://gfitnessonline.com/wp-content/uploads/2020/07/cutting-diet-cover-1024x536.png')] bg-opacity-40 bg-no-repeat bg-cover m-0 p-0 ">
  <div className='grid grid-cols-2 p-16 m-4 gap-12'>
    <div className='bg-black h-80 m-2 flex justify-center'>
      <button className=' text-white text-5xl w-full '>CUTTING</button>
    </div>
    <div className='bg-black h-80 m-2 flex justify-center' >
      <button className='text-white text-5xl w-full'>BULKING    </button>
    </div>
  </div>
</div>
</div> */}