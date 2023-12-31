import React, { useContext } from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import { themeContext } from '../../Context'


const Intro = () => {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div
      className='intro'
    >
      <div className="i-left">
        <div className="i-name">
          <span className="" style={{ color: darkMode ? 'white' : '' }}>Hy! I Am</span>
          <span className="">Pradeepooshan</span>
          <span className="" style={{ color: darkMode ? 'white' : '' }}>Frontend Developer with high level of experience in web designing and development producting the Quality work</span>
        </div>

        <button className="button i-button">Hire me</button>

        <div className="i-icons">
          <a href="https://www.linkedin.com/in/pradeepooshan"><img src={LinkedIn} alt="" /></a>
          <a href="https://github.com/Pradeepooshan"><img src={Github} alt="" /></a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />

        <div className="" style={{ top: '-4%', left: '68%', color: 'black' }}>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
        </div>
        <div className="" style={{ top: '18rem', left: '0rem', color: 'black' }}>
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
        </div>

        {/* Blur div */}
        <div className="blur" style={{ background: 'rgb(233 210 255)' }}></div>
        <div className="blur" style={{
          background: "#C1F5FF",
          top: '17rem',
          width: '21rem',
          height: '11rem',
          left: '-9rem'
        }}></div>
      </div>
    </div>
  )
}

export default Intro