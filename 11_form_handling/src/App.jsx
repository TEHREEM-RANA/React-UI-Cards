import React from 'react'

const App = () => {
  function submithandler(e){
 e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={submithandler}>
       <input type="text" placeholder='Enter' />
       <button>Submit</button>
      </form>
    </div>
  )
}

export default App