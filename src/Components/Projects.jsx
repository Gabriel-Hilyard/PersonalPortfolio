import React from 'react';
import './Projects.css';

const cards = [
  { front: 'Front 1', back: 'Back 1' },
  { front: 'Front 2', back: 'Back 2' },
  { front: 'Front 3', back: 'Back 3' },
  { front: 'Front 4', back: 'Back 4' },
  { front: 'Front 5', back: 'Back 5' },
  { front: 'Front 6', back: 'Back 6' },
];

function Projects() {


  return (
    <>
    <div className='projectsTitle'>
      <h1>Projects</h1>
    </div>
<div className="flip-card-grid">
      {cards.map((card, index) => (
        <div className="flip-card" key={index}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>{card.front}</h3>
            </div>
            <div className="flip-card-back">
              <p>{card.back}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Projects;