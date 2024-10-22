import React from 'react'
import './About.css'
import BiltmoreFront from '../../Assets/biltmore_front.jpg'
import {FaBuilding} from 'react-icons/fa'
import {GiFullFolder} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>All About Me</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={BiltmoreFront} alt='Me at the Biltmore'/>
          </div>
        </div>
        <div className='about__content'>
            <div className='about__cards'>

              <article className='about__card'>
                <FaBuilding className='about__icon'/>
                <h5>Working Experience</h5>
                <small>1+ Year Working in Industry</small>
              </article>

              <article className='about__card'>
                <GiFullFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>3 Completed Projects</small>
              </article>

            </div>
            <p>
              I am a Software Engineer 1 at Cox Automotive. I work on the Product Security Engineering team. 
            </p>
            <a href='#contact' className='btn btn-primary'>Get in Contact With Me</a>
          </div>
      </div>
    </section>
  )
}

export default About