import React from 'react';
import './Navigation.css'

console.log('Nav working')

function Navigation() {
    

  return (
    <>
    <nav>
      <div className='navigation'>
      <ul>
        <li><a>Projects & Skills</a></li>
        <li><a href="mailto:hilyarddev@yahoo.com">Contact Me</a></li>
        <li><a>Socials</a></li>
      </ul>
      </div>
    </nav>
    </>
  )
}

export default Navigation;