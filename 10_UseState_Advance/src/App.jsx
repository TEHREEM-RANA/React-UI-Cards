import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({user:'Tehreem', age:20})
  function chnnam(){
     const newNum ={...num}
     newNum.user='Rana'
     newNum.age=12
     setnum(newNum)
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={chnnam}>click</button>
    </div>
  )
}

export default App