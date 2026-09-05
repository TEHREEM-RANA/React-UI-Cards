// import React, { useState } from 'react'

// const App = () => {

//   const [a, setA] = useState(20);
//   const [Users, setUsers] = useState([12,34,15])
//   function ChangeNum(){
//     setA(40)
//     setUsers([11,22,10])
//   }
//   return (
//     <div>
//       <h1>Hello this is value of a {a}<br></br> {Users}</h1>
//       <button onClick={ChangeNum}>Enter</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

 const [num, setnum] = useState(0)

 function clickincrease(){
  setnum(num+1);
  // setnum(prev=>(prev+1))
    // setnum(prev=>(prev+1))
      // setnum(prev=>(prev+1))

 }
 function clickdec(){
  setnum(num-1);
 }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={clickincrease}>Increase</button>
      <button onClick={clickdec}>Decrease</button>
    </div>
  )
}

export default App