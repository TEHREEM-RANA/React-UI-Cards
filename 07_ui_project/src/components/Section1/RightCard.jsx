import React from 'react'
import {ArrowRight} from 'lucide-react'
const RightCard = (props) => {
  return (
    <div className='h-full  shrink-0 w-60 rounded-3xl relative overflow-hidden'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
      <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-semibold'>{props.id+1}</h2>
      <div>
        <p className='text-lx leading-normal text-white mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eligendi suscipit voluptas nemo modi sit repellendus necessitatibus sunt ipsam iste?</p>
      </div>
      <div className='flex justify-between'>
          <button style={{backgroundColor:props.color}} className=' text-white font-medium rounded-full px-8 py-2'>{props.tag}</button>
          <button className=' text-white font-medium rounded-full px-3 py-2'><ArrowRight /></button>
          </div>
    </div>
    
    </div>
  )
}

export default RightCard