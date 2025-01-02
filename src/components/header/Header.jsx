import React from 'react'
import './Header.css'
import CTA from './CTA'
import ProfessionalPhoto from '../../Assets/professional_photo3.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <section id='header'>
      <header>
        <div className="header__contianer">
          <h5>Hello there, I'm</h5>
          <h1> Justin Perez</h1>
          <h5 className="text-light"> Fullstack Developer </h5>
          {/* CTA is the class that holds the download resume and contact buttons*/}
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={ProfessionalPhoto} alt="Professional"></img>
          </div>

          <a href='#contact' className='scroll__down'>Go To Bottom</a>
        </div>
      </header>
    </section>
    
  )
}

export default Header