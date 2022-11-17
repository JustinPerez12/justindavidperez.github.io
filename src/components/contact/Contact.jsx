import React from 'react'
import './Contact.css'
import Picture from '../../Assets/wake_surfing.jpg'
import {MdMail} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='contact__container'>
        <div className='contact__me'>
          <img src={Picture} alt='Chilling' className='contact__me-image'></img>
        </div>

        <div className="contact__options">
          <article className='contact__option'>
            <MdMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>justinprz12@gmail.com</h5>
            <a href='mailto:justinprz12@gmail.com'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <MdMail className='contact__option-icon'/>
            <h4>Umail</h4>
            <h5>u1248103@umail.edu</h5>
            <a href='mailto:u1248103@umail.edu'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <AiFillPhone className='contact__option-icon'/>
            <h4>Phone Number</h4>
            <h5>770-778-0722</h5>
          </article>
          
        </div>
      </div>
    </section>
  )
}

export default Contact