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
                <small>2+ Year Working in Industry</small>
              </article>

              <article className='about__card'>
                <GiFullFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>3 Completed Projects</small>
              </article>

            </div>
            <p>
              I discovered my passion for computer science during my first class at the University of Utah in 2019. Originally a computer engineering major, I quickly realized that computer science was my true calling. After graduating, I embarked on my professional journey at Cox Automotive, where I've thrived and grown ever since.
              In my current role as a Software Engineer I on the Product Security Engineering team, I develop and maintain enterprise-level security software used company-wide. I specialize in integrating with top security vendors like Veracode and Aqua, and in creating tools that deliver comprehensive security metrics for our software components.
              Every day, I am eager to expand my skills, from building infrastructure with Terraform in AWS to developing software using languages and frameworks like Go, C#, TypeScript, React, and so much more. I am passionate about learning and excited about what the future holds for my career in software.
            </p>
            <a href='#contact' className='btn btn-primary'>Get in Contact With Me</a>
          </div>
      </div>
    </section>
  )
}

export default About