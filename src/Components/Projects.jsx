import React from 'react';
import './Projects.css';
import importThumb from '../assets/ImportMotorcycle.png';

const cards = [
  {
    front: {
      title: 'Import Motorcycle',
      thumbnail: 'none', //CIRCLE BACK TO FIGURE OUT DISPLAY ISSUES
    },
    back: {
      description: 'A site for a motorcycle shop built with React and hosted on Vercel.',
      link: 'https://import-motorycle-dev.vercel.app/',
    },
  },
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
          {typeof card.front === 'object' ? (
            <>
              <img
                src={card.front.thumbnail}
                alt={card.front.title}
                className="card-thumbnail"
              />
              <h3>{card.front.title}</h3>
            </>
          ) : (
            <h3>{card.front}</h3>
          )}
        </div>
        <div className="flip-card-back">
          {typeof card.back === 'object' ? (
            <>
              <p>{card.back.description}</p>
              <a
                href={card.back.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Visit Site
              </a>
            </>
          ) : (
            <p>{card.back}</p>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
    </>
  )
}

export default Projects;