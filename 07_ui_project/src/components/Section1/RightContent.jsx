import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 flex-nowrap gap-10 p-4 flex overflow-auto' >
        {props.user.map(function(elem,idx){

          return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
        })}
        </div>
    
  )
}

export default RightContent