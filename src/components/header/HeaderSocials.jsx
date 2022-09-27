import React from 'react'
import {TiSocialLinkedin} from 'react-icons/ti'
import {ImGithub} from 'react-icons/im'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/justindperez/' target="_blank"><TiSocialLinkedin/></a>
        <a href='https://github.com/JustinPerez12' target="_blank"><ImGithub/></a>
    </div>
  )
}

export default HeaderSocials