import React from 'react';
import Snake from './Snake';
import github from '/src/assets/github.png';
import linkedin from '/src/assets/linkedin.png';
import './Footer.css';

console.log('Footer working')

function Footer() {
    

  return (
    <>
    <footer>

      
      <div className='socialLinks'>
      <a href='https://github.com/Gabriel-Hilyard'
      target='_blank'> 
      <img src={github}
      alt='github link'
      style={{height: '200px'}}/> </a>

      <a href='https://github.com/Gabriel-Hilyard'
      target='_blank'> 
      <img src={linkedin}
      alt='linkedin link'
      style={{height: '200px'}}/> </a>

      <div className='email'>
      <h3><a href="mailto:hilyarddev@yahoo.com">hilyarddev@yahoo.com</a></h3>
      </div>

    </div>



      <Snake />
    
      </footer>

      <div className='createdBy'>
      <a href='https://www.linkedin.com/in/gabriel-hilyard-87a583173'
      target='_blank'>Created by Gabriel Hilyard</a>
      </div>


    </>
  )
}

export default Footer;