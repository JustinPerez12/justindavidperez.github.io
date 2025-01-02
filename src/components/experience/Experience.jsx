import React from 'react'
import './Experience.css'
import Wavetronix from '../../Assets/wavetronix.png'
import CoxAuto from '../../Assets/Cox_Automotive_Logo.jpg'
import CampusCore from '../../Assets/campus_core.png'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Work Experience</h5>
      <h2>Experience</h2>
      <div className='experience__container'>
        <article className='experience__item'>
            <div className='experience__item-image'>
            </div>
            <h1>
                Software Engineer 1 at Cox Automotive
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
                      Built reporting ETL jobs leveraging Cloudwatch Events, ECS Fargate, Lambda, and more
                    </li>
                    <li className='list__item'>
                      Developed and maintained a graph database, levering NeptuneDB, storing thousands of interconnected entities, including security
                      vulnerabilities, software components, teams, and users, to streamline data accessibility and support security workflows
                    </li>

                    <li className='list__item'>
                      Designed and implemented tools that generate comprehensive security status reports for more than 7,500 software components.
                    </li>

                    <li className='list__item'>
                      Integrated security solutions with industry‑leading vendors, including Veracode, NoName, and Wiz.
                    </li>

                    <li className='list__item'>
                      Enhanced the overall security workflow, improving the user experience for software teams and optimizing security practices across the organization.
                    </li>
                </ul>
            </h3>
            <div className='experience__item-cta'>
              <a href='https://www.coxautoinc.com/' className='experience__item-cta btn' target='_blank' rel="noreferrer">Cox Automotive Inc Website</a>
            </div>
        </article>

        <article className='experience__item'>
        <div className='experience__item-image'>
        </div>
            <h1>
                Software Engineer at Campus Core
            </h1>
            <h2>
                November 2024 - Current
            </h2>
            <h3>
                <ul>
                    <li className='list__item'>
                      Built backend services on Azure, providing secure, scalable, and real‑time access to educational resources for up to 2,000 students
                    </li>
                    <li className='list__item'>
                      Conceptualized and developed a scalable educational platform for universities, enhancing student‑advisor communications using
                      React, React Native, Tailwind, Node.js, Azure, and MySQL
                    </li>
                </ul>
            </h3>
            <div className='experience__item-cta'>
              <a href='https://www.campus-core.com/' className='experience__item-cta btn' target='_blank' rel="noreferrer">Campus Core Website</a>
            </div>
        </article>

        <article className='experience__item'>
        <div className='experience__item-image'>
        </div>
            <h1>
                Software Intern at Wavetronix
            </h1>
            <h2>
                May 2022 - January 2023
            </h2>
            <h3>
                <ul>
                    <li className='list__item'>
                      Developed and maintained a C# application that simulated traffic patterns, allowing users to design intersections and optimize layouts for traffic engineers.
                    </li>
                    <li className='list__item'>
                      Created a C# application to process traffic simulation data, generating visual representations in graph form for easier data analysis
                      and interpretation.
                    </li>
                    <li className='list__item'>
                      Contributed to improving traffic design processes by making complex simulation data more accessible and understandable to engineers.
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