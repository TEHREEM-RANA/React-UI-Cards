import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const user =[
    {
      img:'https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=',
      intro:'',
      tag:'Satisfied',
      color:'green'
    },
    {
       img:'https://media.istockphoto.com/id/2093526842/photo/happy-businesswoman-working-on-digital-tablet-in-the-office-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=K4phfU4izED-PeU7uKimZJ9fT-t440GKYuiOJezuXIg=',
      intro:'',
      tag:'Underserved',
       color:'blue'
    },
    {
       img:'https://media.istockphoto.com/id/2194397231/photo/focused-professional-financial-it-specialist-latin-hispanic-business-lady-working.jpg?s=612x612&w=0&k=20&c=IK3fcON053uliiFIpOFibFpSBvKUdwOAlkR6DDSnZaY=',
      intro:'',
      tag:'Underbanked',
      color:'red'
    }
  ]
  return (
    <div>
      <Section1 user={user}/>
      <Section2 />
    </div>
  )
}

export default App