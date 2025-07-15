import React from 'react'
import { useLoaderData } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const JobDetails = () => {

  // const {id} = useParams()
  const jobDetails = useLoaderData();

  return (
    <div className='jobDetails'>
        {/* <h1>Id is: {id}</h1> */}
        <p><b>Job Title: </b>{jobDetails.title}</p>
        <p><b>Salary: </b>{jobDetails.salary}</p>
        <p><b>Job Location: </b>{jobDetails.location}</p>
        <p><b>Job Description: </b>hkashbcsvdkhbvkhbk webfkbwefwufy</p>
        <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const JobDetailsLoader = async({params}) =>{
  const {id} = params;
  const res=await fetch("http://localhost:5000/jobs/"+id);
  return res.json();
}