import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiSass,
  DiMongodb,
} from 'react-icons/di';

import '../styles/components/technologiesContainer.sass';

const technologies = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
  { id: 'node', name: 'Node.js', icon: <DiNodejsSmall /> },
  { id: 'mysql', name: 'MySQL', icon: <DiMysql /> },
  { id: 'react', name: 'React', icon: <DiReact /> },
  { id: 'sass', name: 'Sass', icon: <DiSass /> },
  { id: 'mongodb', name: 'MongoDb', icon: <DiMongodb /> },
];

function TechnologiesContainer() {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) => (
          <div className='technology-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
              <p>
                Exercitation ea elit deserunt aute voluptate ut id tempor
                laborum adipisicing id.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologiesContainer;
