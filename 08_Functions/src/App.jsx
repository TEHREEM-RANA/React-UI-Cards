import React from 'react'

const App = () => {

  // function buttonclick(){
    
  // }
  return (
    <div>App

      {/* <button onClick={buttonclick}>Change user </button> */}
      <button onClick={function(elem){
             console.log(elem.target.value);
             
      }}></button>
      <input type="text" placeholder='Enter Name' />
    </div>
  )
}

export default App