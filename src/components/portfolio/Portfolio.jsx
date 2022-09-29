import React from 'react'
import './Portfolio.css'
import TankWars from '../../Assets/TankWars.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>portifolio</h2>
      <div className='portfolio__container'>
        <article className='portofolio__item'>
            <div className='portfolio__item-image'>
              <img src={TankWars} alt='Tankwars game'></img>
            </div>
            <h3>This is a portolio item title</h3>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
        </article>

        <article className='portofolio__item'>
            <div className='portfolio__item-image'></div>
            <h3>This is a portolio item title</h3>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
        </article>

        <article className='portofolio__item'>
            <div className='portfolio__item-image'></div>
            <h3>This is a portolio item title</h3>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio