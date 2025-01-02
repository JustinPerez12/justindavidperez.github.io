import React from 'react'
import './Skills.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Skills in languages, frameworks, and architectures</h5>
      <h2>My Skills</h2>
      <div className='skills__container'>
        <div className='skills__frontend'>
          <h3>Frontend development</h3>
          <div className='skills__content'>
            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Proficient</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Proficient</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon' />
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Proficient</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Proficient</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <div>
              <h4>TypeScript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Proficient</small>
            </div>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <div>
              <h4>Mantine</h4>
              <small className='text-light'>Novice</small>
            </div>
            </article>

            

          </div>
        </div>

        <div className='skills__backend'>
        <h3>Backend development</h3>
          <div className='skills__content'>
            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <h4>Python</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <h4>C#</h4>
            <small className='text-light'>Proficient</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <h4>c++</h4>
            <small className='text-light'>Proficient</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <h4>c</h4>
            <small className='text-light'>Proficient</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <h4>Java</h4>
            <small className='text-light'>Proficient</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <h4>ASP Core</h4>
            <small className='text-light'>Proficient</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <h4>Docker</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <h4>Next.js</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <h4>AWS</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article>
            <BsFillBookmarkCheckFill className='skills__details-icon'/>
            <h4>Azure</h4>
            <small className='text-light'>Intermediate</small>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills