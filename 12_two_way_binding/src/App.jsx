import React, { useState } from 'react' 

const App = () => {
 
  const [title, setTitle] = useState('')

  
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted by', title); 
    setTitle('') // Form submit hone ky baad input clear karny ky liye 
  }

 
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder='Enter your name' 
          value={title} 
          onChange={(e) => { 
            setTitle(e.target.value); 
          }} 
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App