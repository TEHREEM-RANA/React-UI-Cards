import React from 'react'
import NavBar from './NavBar'
import Page1Content from './Page1Content'
const Section1 = (props) => {
  console.log(props.user)
  return (
    <div className='h-screen w-full '>
       <NavBar />
       <Page1Content user={props.user}/>
    </div>
  )
}

export default Section1