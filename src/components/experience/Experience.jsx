import React from 'react'
import './Experience.css'
import Wavetronix from '../../Assets/wavetronix.png'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Work Experience</h5>
      <h2>Experience</h2>
      <div className='experience__container'>
        <article className='experience__item'>
            <div className='experience__item-image'>
              <img src={Wavetronix} alt='Wavetronix Logo' ></img>
            </div>
            <h1>
                Software Engineering Intern at Wavetronix
            </h1>
            <h2>
                May 2022 - Current
            </h2>
            <h3>
                <ul>
                    <li className='list__item'>
                        Used C# and WPF to produce a desktop app that collects and displays data produced by Wavetronix sensors placed throughout the country.
                    </li>
                    <li className='list__item'>
                        Created a database using MySQL, and integrated it into the same desktop app as above. The desktop app can handle the retrieval and uploading of data to the database.
                    </li>
                    <li className='list__item'>
                        Used C# and WPF to help produce a simulator for road intersections.
                        Created a variety of tools on the frontend to help users interpret data and manage their workspace.
                    </li>
                </ul>
            </h3>
            <div className='experience__item-cta'>
              <a href='https://www.wavetronix.com/' className='experience__item-cta btn' target='_blank' rel="noreferrer">Wavetronix Website</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Experience