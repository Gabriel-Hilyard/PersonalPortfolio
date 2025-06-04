import React from 'react';
import './Skills.css';


console.log('ProjectSkills working')

function Skills() {


  return (
    <>
    <div className='projectSkill'>
      <h1>Skills</h1>
      <div className='skillCards'>
        <div className='skillCard'>
          <div className='inner'>
          <h2>React</h2>
          </div>
        </div>
        <div className='skillCard'>
        <div className='inner'>
          <h2>HTML</h2>
          </div>
        </div>
        <div className='skillCard'>
        <div className='inner'>
          <h2>CSS</h2>
          </div>
        </div>
        <div className='skillCard'>
        <div className='inner'>
          <h2>Bootstrap</h2>
          </div>
        </div>
        <div className='skillCard'>
        <div className='inner'>
          <h2>Javascript</h2>
          </div>
        </div>
        <div className='skillCard'>
        <div className='inner'>
          <h2>VCS / Github</h2>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Skills;