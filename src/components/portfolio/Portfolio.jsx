import React from 'react'
import './Portfolio.css'
import TankWars from '../../Assets/TankWars.jpg'
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
              <img src={TankWars} alt='Tankwars game'></img>
            </div>
            <h3>This is my TankWars game, and it was made with a partner. We created a server and client to run this game using MVC architecture. 
              The server allowed for multiple clients to connect and interact with eachother. The game consisted of multiple tanks and an environment more complicated than the one above.
              The tanks were able to move around and fire projectiles at one another causing damage to the tank that was hit. This project was written in C# using Visual Studio.</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/JustinPerez12/TankWars' className='portfolio__item-cta btn' target='_blank' rel="noreferrer">Tank Wars Github</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image '>
              <img src={MockSpreadsheet} alt='Mock Spread Sheet'></img>
            </div>
            <h3>This project was a mock google spreadsheets project. For this project we created a server and client similar to the Tank Wars game, but this was written in C.
              Similar to the TankWars server, we allowed multiple clients to connect and interact with eachother. Clients could see other clients: positions, edits, deletes, and more
              all in real time. This was all written and designed by hand, produced in a team of 6.
            </h3>
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={LifeStyleApp} alt='LifeStyle App'></img>
            </div>
            <h3>This is a LifeStyle App that was created in Android Studio using Java. The app created has multiple features in it related to keeping a healthy lifestyle.
              It offers BMI calculator as well as a BMR calculator. It also calculates the number of calories you should intake depending on whether you want to lose, gain, or maintain your current weight.
              The LifeStyle App also has support for showing you nearby hikes in your area, as well as displaying the current weather for your area.
            </h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/dtdetwiller/lifestyle' className='portfolio__item-cta btn' target='_blank' rel="noreferrer">LifeStyle App Github</a>
            </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio