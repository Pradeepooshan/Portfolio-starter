import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <BrowserRouter>
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">Pradeep</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul className="list">
                        <li className="li">Home</li>
                        <li className="li" to='/services'>Services</li>
                        <li className="li" to='/experience'>Experience</li>
                        <li className="li" to='/portfolio'>Portfolio</li>
                        <li className="li" to='/testimonials'>Testimonials</li>
                    </ul>
                </div>
                <div className="">
                    <button className="button n-button">Contact</button>
                </div>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default Navbar