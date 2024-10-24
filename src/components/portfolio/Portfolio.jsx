import React from 'react'
import './Portfolio.css'
import HuddleUp from '../../Assets/huddle-up-logo.png'
import MockSpreadsheet from '../../Assets/mockgooglespreadsheet.PNG'
import LifeStyleApp from '../../Assets/LifeStyleApp.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='portfolio__container'>
        <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={HuddleUp} alt='Huddle Up Logo'></img>
            </div>
            <h3>
              Huddle Up is a team fantasy football web application developed at the University of Utah as my capstone project. 
              Huddle Up uses React for UI, Node.js for backend, Next.js for server-side rendering, Tailwind/Mantine for styling, GitLab for version control, and is written completely in TypeScript. 
              The application provides a comprehensive and user-friendly platform for managing and tracking fantasy football teams. 
              The combination of these technologies results in a fast and efficient platform that meets the needs of fantasy football players and teams.
            </h3>
            <div className='portfolio__item-cta'>
              <a href='https://capstone-cs.eng.utah.edu/fan-huddle' className='portfolio__item-cta btn' target='_blank' rel="noreferrer">Huddle Up Gitlab</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image '>
              <img src={MockSpreadsheet} alt='Mock Spread Sheet'></img>
            </div>
            <h3>
              Room Reserver is a personal project of mine that is used to reserve study rooms at the University of Utah Marriott Library every day. 
              I built the web scraper using Selenium Web Driver in JavaScript and it runs daily on an Amazon EC2 instance.
            </h3>
        </article>
      </div>
    </section>
  )
}

export default Portfolio