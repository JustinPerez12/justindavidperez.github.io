import React from 'react'
import './Portfolio.css'
import TankWars from '../../Assets/TankWars.jpg'
import TankWars1 from '../../Assets/TankWars.jpg'
import TankWars2 from '../../Assets/TankWars.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='portfolio__container'>
        <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={TankWars} alt='Tankwars game'></img>
            </div>
            <h3>This is my TankWars game, and it was made with a partner. We created a server and client to run this game using MVC architecture. 
              The server allowed for multiple clients to connect, and interact with eachother. This project was written in C# using Visual Studio.</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/JustinPerez12/TankWars' className='portfolio__item-cta btn' target='_blank'>Tank Wars Github</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
            <h3>Mock google spreadsheet</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/JustinPerez12/TankWars' className='portfolio__item-cta btn' target='_blank'>Tank Wars Github</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
            <h3>Not sure what this one will be</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/JustinPerez12/TankWars' className='portfolio__item-cta btn' target='_blank'>Tank Wars Github</a>
            </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio