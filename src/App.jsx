import React from 'react'

import Card from './component/Card'
import Arra from './component/Arra'


function App() {
  // const arr= [1,2,4,5,3];
  //  const arr=[{user:'tehreem'},{user:'tehreem'},{user:'Arif'}];

  const jobs = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    name: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Islamabad, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$62/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Remote, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    name: "NVIDIA",
    datePosted: "10 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hour",
    location: "Islamabad, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    name: "IBM",
    datePosted: "3 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hour",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    name: "Oracle",
    datePosted: "6 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    name: "Tesla",
    datePosted: "10 weeks ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Remote, Pakistan"
  }
];
  return (
    <div className='parent'>
      {/* <Arra name='Tehreem' />
      <Arra name={arr[0]} /> */}
      {/* {arr.map(function(elem){

        // return elem
        return <h1>{elem}</h1>
      })} */}
      {/* arr.map(function(elem){
        console.log(elem)
      }) */}
   
   {jobs.map(function(elem,idx){
        
    return  <div key={idx}>
    <Card  company={elem.name} datePost={elem.datePosted} Logo={elem.brandLogo} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />

    </div>
   })}

    </div>
  )
}

export default App