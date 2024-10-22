import React from 'react'
import './Experience.css'
import Wavetronix from '../../Assets/wavetronix.png'
import CoxAuto from '../../Assets/Cox_Automotive_Logo.jpg'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Work Experience</h5>
      <h2>Experience</h2>
      <div className='experience__container'>
        <article className='experience__item'>
            <div className='experience__item-image'>
              <img src={CoxAuto} alt='Cox Auto Logo'></img>
            </div>
            <h1>
                Software Engineer 1 at Cox Automotive Inc
            </h1>
            <h2>
                June 2023 - Current
            </h2>
            <h3>
                <ul>
                    <li className='list__item'>
                      Developed and maintained enterprise‑level security software used by multiple software teams across the company.
                    </li>
                    <li className='list__item'>
                      Integrated security solutions with industry‑leading vendors, including Veracode and Aqua.
                    </li>
                    <li className='list__item'>
                      Designed and implemented tools that generate comprehensive security status reports for software components.
                    </li>

                    <li className='list__item'>
                      Streamlined integration with security tools by creating simplified upload processes and efficient defect retrieval methods.
                    </li>

                    <li className='list__item'>
                      Designed and implemented tools that generate comprehensive security status reports for software components.
                    </li>

                    <li className='list__item'>
                      Enhanced the overall security workflow, improving the user experience for software teams and optimizing security practices across the organization.
                    </li>
                </ul>
            </h3>
            <div className='experience__item-cta'>
              <a href='https://www.wavetronix.com/' className='experience__item-cta btn' target='_blank' rel="noreferrer">Wavetronix Website</a>
            </div>
        </article>

        <article className='experience__item'>
            <div className='experience__item-image'>
              <img src={Wavetronix} alt='Wavetronix Logo' ></img>
            </div>
            <h1>
                Software Engineering Intern at Wavetronix
            </h1>
            <h2>
                May 2022 - January 2023
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