import React from 'react';
import PlaceHolder from '/src/assets/PlaceHolder.png';
console.log('Hero working')

function Hero() {
    

  return (
    <>
    <section>
        <div className='heroPortrait'>
            <img src={PlaceHolder}/>
        </div>
        <div className='heroName'>
            <h3>Hi, my name is:</h3>
            <h1>Gabriel Hilyard</h1>
            <h1>Front-End Engineer</h1>
        </div>
        <div className='heroParagraph'>
            <p>For the past two years, I’ve been dedicated to learning what it 
                takes to become a front-end engineer. What began as a simple 
                interest has grown into both a passionate hobby and a promising 
                career path. While working full-time, I’ve completed the Meta 
                Front-End Developer course and built several projects along the
                way. I invite you to explore my portfolio to see my work and the 
                skills I’ve developed.</p>
        </div>
    </section>
    </>
  )
}

export default Hero;