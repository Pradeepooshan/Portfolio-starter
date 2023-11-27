import React, { useContext } from 'react'
import './Testimonial.css'
import { Swiper } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from "swiper/modules"
import 'swiper/css/pagination';
import 'swiper/css'
import { SwiperSlide } from 'swiper/react'
import { themeContext } from '../../Context'


const Testimonial = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const clients = [
        {
            img: profilePic1,
            review: `I've honed my skills in Html, Css, Javascript and React js to create stunning and hightly functional web applications`
        },
        {
            img: profilePic2,
            review: 'My passion for creating user-friendly and responsive interfaces and with strong foundation and thrist for ongoing learning'
        },
        {
            img: profilePic3,
            review: 'As a dedicated front end developer with ne year of experience'
        },
    ]
    return (
        <div className='t-wrapper'>
            <div className="t-heading">
                <span>Professional</span>
                <span>Summary</span>
                <span></span>
                <div
                    className="blur t-blur1"
                    style={{ background: "var(--purple)" }}
                ></div>
                <div
                    className="blur t-blur2"
                    style={{ background: "var(--skyblue)" }}
                ></div>
            </div>

            {/* slider */}

            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                {/* <img src={client.img} alt="" /> */}
                                <span style={{ color: darkMode ? 'white' : '' }}>{client.review}</span>
                            </div>

                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonial