import React, { useContext } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from '../../img/swiggy.png'
import Ecommerce from '../../img/specification.png'
import Hoc from '../../img/portfolio.png'
import MusicApp from '../../img/calculator.png'
import 'swiper/css'
import { themeContext } from '../../Context'


const Portfolio = () => { 
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className='portfolio'>
            <span style={{ color: darkMode ? 'white' : ''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* Slider */}

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Hoc} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio