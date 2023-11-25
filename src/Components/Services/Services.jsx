import React from 'react'
import './Services.css'
import Card from '../Card/Card'

import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './pradeepooshan s s.pdf'

const Services = () => {
  return (
    <div className='services'>
      <div className="awesom">
        <span className="">My Awesome</span>
        <span className="">services</span>
        <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et, corrupti quisquam facilis corporis maiores nemo non in itaque eaque, officiis quidem libero eos dolorum similique beatae necessitatibus eligendi sed.</span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
      </div>

      <div className="cards" >
        <div className="" style={{ left: '14rem' }}>
          <Card
            emoji={Heartemoji}
            heading={'Design'}
            detail={'Bootstrap, Tailwind css'}
          />
        </div>

        <div className="" style={{ top: '12rem', left: '-4rem' }}>
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={'Html, Css, Javascript, React js, Next js,'}
          />
        </div>

        <div className="" style={{ top: '19rem', left: '12rem' }}>
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et, corrupti quisquam facilis corporis maiores'}
          />
        </div>



      </div>
    </div>
  )
}

export default Services