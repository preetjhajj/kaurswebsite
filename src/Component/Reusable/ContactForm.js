import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
        const form = useRef();
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_larzkln', 'template_dm5gyma', form.current, '-UtqfsGWyrnjobcND')
            .then((result) => {
              console.log(result.text);
              e.target.reset();
            }, (error) => {
              console.log(error.text);
            });
        };
    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="contactform">
                <div className='full'>
                    <div className='half'><input type="text" name="first_name" placeholder='First Name' /></div>
                    <div className='half'><input type="text" name="last_name" placeholder='Last Name' /></div>
                </div>
                <div className='full'>
                    <input type="email" name="user_email" placeholder='Email' />
                </div>
                <div className='full'>
                    <textarea name="message" placeholder='Message' />
                </div>
                <div className='default__btn'>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </>
    )
}

export default ContactForm