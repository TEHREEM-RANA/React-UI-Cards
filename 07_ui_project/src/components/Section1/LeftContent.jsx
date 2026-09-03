import React from 'react'
import {ArrowUpRight} from 'lucide-react'
const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between' >
        <div className='p-3'>
          <h3 className='text-4xl leading-[0.1.0.1] font-bold mb-5'>Prospective <br></br><spain className='bg-gray-200 px-2 py-0.5 rounded-full'>customer</spain><br></br> segmentation</h3>
          <p className=' text-lg font-small text-gray-600'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
        </div>
        <div >
           <ArrowUpRight size={70} /> 
        </div>
        </div>
  )
}

export default LeftContent