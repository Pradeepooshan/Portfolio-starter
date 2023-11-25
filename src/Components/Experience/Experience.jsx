import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className='experience'>
      <div className="achievements">
        <div className="circle">1</div>
        <span>Year</span>
        <span>Experience</span>
      </div>

      <div className="achievements">
        <div className="circle">3+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>

      <div className="achievements">
        <div className="circle">1</div>
        <span>company</span>
        <span>work</span>
      </div>
    </div>
  )
}

export default Experience