import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {

  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z4il7yq', 'template_3oikuzp', form.current, 't0Lct_vY1gejvlq2x')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

     e.target.reset()
  };
  
  return  (
   
    <section id="contact">
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>

        <div className='contact_options'>

                <article className='contact_option'>
                <MdOutlineEmail className='contact_icon'/>
                  <h4>Email</h4>
                  <h5>aycodergymer21@gmail.com</h5>
                  <a href="mailto:aycodergymer21@gmail.com">send a message</a>
          </article>
          
             <article className='contact_option'>
                  <RiMessengerLine className='contact_icon'/>
                  <h4>Messenger</h4>
                  <h5>oniacttutorials</h5>
                  <a href="https://m.me/oniact.achiever">send a message</a>
          </article>
          

             <article className='contact_option'>
                  <BsWhatsapp className='contact_icon'/>
                  <h4>WhatsApp</h4>
                  <h5>+2349082193788</h5>
                  <a href="https://api.whatsapp.com/send?phone">send a message</a>
          </article>
          
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>

          <input type="text" name='name' placeholder="Your Full Name" className="inputClass" required />

          <input type="email" name="email" placeholder="Your valid email" className="inputClass" required />

          <textarea name='message' rows="5" placeholder="Your Message" className='textClass'></textarea>

          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
