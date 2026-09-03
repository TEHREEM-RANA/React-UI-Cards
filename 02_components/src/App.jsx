import React from 'react'
import card from './component/card'
import navbar from './component/navbar';

const App = () => {
  const age='20';
  return (
   <div>
     <p> i am {age} years old</p>
     {card()}
     {navbar()}
   </div>
       




  )

}

export default App