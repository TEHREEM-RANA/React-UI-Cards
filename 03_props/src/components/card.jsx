import React from 'react'


const Card = (props) => {
  console.log(props)

  return (
    <div className="parent">
      <div className="card">
        <h1>{props.user}</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Placeat aperiam adipisci velit maxime cum eos ipsa dolor
          blanditiis quam unde, autem sint quos aut temporibus veniam
          quisquam. Dolores, consequatur illum!
        </p>

        <button>click</button>
      </div>
    </div>
  )
}

export default Card