import React from 'react'
import {Bookmark} from 'lucide-react'
function Card(props) {
   console.log(props.company)
  return (
   <div className="card">
           <div className="top">
             <img src={props.Logo} alt={props.company} />
             <button>Save <Bookmark size={13} /></button>
           </div>
   
           <div className="center">
            <h3>{props.company} <span>{props.datePost}</span></h3>
            <h2>{props.post}</h2>
            <div className='tag'>
             <h4>{props.tag1}</h4>
             <h4>{props.tag2}</h4>
            </div>
           </div>
   
           <div class="bottom">
     <div class="price-box">
       <h2>{props.pay}</h2>
       <p>{props.location}</p>
     </div>
     <button>Apply Now</button>
   </div>
         </div>
  )
}

export default Card