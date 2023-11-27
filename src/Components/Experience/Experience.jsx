import React, { useContext } from 'react'
import './Experience.css'
import { themeContext } from '../../Context'

const Experience = () => { 

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='experience'>
      <div className="achievements">
        <div className="circle" style={{ color: darkMode ? 'black' : ''}}>1</div>
        <span>Year</span>
        <span>Experience</span>
      </div>

      <div className="achievements">
        <div className="circle" style={{ color: darkMode ? 'black' : ''}}>3+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>

      <div className="achievements">
        <div className="circle" style={{ color: darkMode ? 'black' : ''}}>1</div>
        <span>company</span>
        <span>work</span>
      </div>
    </div>
  )
}

export default Experience