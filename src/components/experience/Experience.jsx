import React from 'react'
import './Experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
  const newLocal = 'experience_details-icon'
  return (
    <section id='experience'>
      <h5>These are going to be the skills that I have</h5>
      <h2>My Experience</h2>
      <div className='experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend development</h3>
          <div className='experience__content'>
            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon' />
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
        <h3>Backend development</h3>
          <div className='experience__content'>
            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon'/>
            <h4>MySQL</h4>
            <small className='text-light'>Experience</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon'/>
            <h4>Python</h4>
            <small className='text-light'>Experience</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon'/>
            <h4>C#</h4>
            <small className='text-light'>Experience</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon'/>
            <h4>c++</h4>
            <small className='text-light'>Experience</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon'/>
            <h4>c</h4>
            <small className='text-light'>Experience</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='experience__details-icon'/>
            <h4>HTML</h4>
            <small className='text-light'>Experience</small>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience