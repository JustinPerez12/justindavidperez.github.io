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
              I am a senior in Computer Science at the University of Utah pursuing a BS degree. I am a well-rounded, passionate, and reliable individual with aspirations to become a full stack Software Engineer.
              With many successful projects, and over 1 year of work experience I believe that I am qualified for many jobs nationwide. All of my current experience has come together
              to make me well versed in many languages, architectures, and frameworks. I am excited and ready to pursue a career anywhere I go, and cannot wait to see what the future has in store.
            </p>
            <a href='#contact' className='btn btn-primary'>Get in Contact With Me</a>
          </div>
      </div>
    </section>
  )
}

export default About