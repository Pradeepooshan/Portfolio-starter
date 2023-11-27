import './Contact.css'
import React, { useContext, useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'

const ContactUs = () => { 
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };
  
    return (
        <div className='contact-form'>
            <div className="m-left">
                <div className="awesom">
                    <span style={{ color: darkMode ? 'white' : ''}}> Get in touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blue"
                        style={{ background: '#ABF1FF94' }}
                    ></div>
                </div>
            </div>

            <div className="c-right">
                <form action="" onSubmit={ {/*sendEmail*/} }>
                    <input type="text" name="user_name" className='user' placeholder='Name' id="Name" />
                    <input type="email" name="user_email" className='user' placeholder='Email' id="" />
                    <textarea name='message' className='user' placeholder='Message' />
                    <input type="submit" value='submit' className='button' name="" id="" />
                    <div
                        className='blur c-blur'
                        style={{ background: 'var(--purple)' }}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs