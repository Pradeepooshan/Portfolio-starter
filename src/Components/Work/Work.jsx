import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'


const Work = () => {
    return (
        <div className='works'>
            <div className="awesom">
                <span className="">Work for All these</span>
                <span className="">Brands & Clients</span>
                <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et, <br /> corrupti quisquam facilis corporis maiores nemo non in itaque eaque, <br /> officiis quidem libero eos dolorum similique beatae necessitatibus eligendi sed.</span>
                <button className="button s-button">Hire Me</button>
                <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* Right */}

            <div className="m-right">
                <div className="m-mainCircle">
                    <div className="m-secCircle">
                        <img src={Upwork} alt="" />
                    </div>

                    <div className="m-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>

                    <div className="m-secCircle">
                        <img src={Amazon} alt="" />
                    </div>

                    <div className="m-secCircle">
                        <img src={Shopify} alt="" />
                    </div>

                    <div className="m-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>

                {/* Background Color */}

                <div className="m-backCircle blueCircle"></div>
                <div className="m-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Work