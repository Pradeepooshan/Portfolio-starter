import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">Pradeep</div>
                <span className="toggle">Toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul className="list">
                        <li className="li">Home</li>
                        <li className="li">Services</li>
                        <li className="li">Experience</li>
                        <li className="li">Portfolio</li>
                        <li className="li">Testimonials</li>
                    </ul>
                </div>
                <div className="">
                    <button className="button n-button">Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar