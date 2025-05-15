import React from 'react';
import Snake from './Snake';
import github from '/src/assets/github.png';
import linkedin from '/src/assets/linkedin.png';
console.log('Footer working')

function Footer() {
    

  return (
    <>
    <footer>
      <div className='socialLinks'>
      <a href='https://github.com/Gabriel-Hilyard'
      target='_blank'> <img src={github}
      alt='github link'/> </a>

      <a href='https://github.com/Gabriel-Hilyard'
      target='_blank'> <img src={linkedin}
      alt='linkedin link'/> </a>
      </div>
      <div className='email'>
      <h3><a href="mailto:hilyarddev@yahoo.com">hilyarddev@yahoo.com</a></h3>
      </div>
    <a href='https://www.linkedin.com/in/gabriel-hilyard-87a583173'>Created by Gabriel Hilyard</a>
    </footer>

    <Snake />
    </>
  )
}

export default Footer;