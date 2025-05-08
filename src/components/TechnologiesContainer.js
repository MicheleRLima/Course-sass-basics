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
  DiGithubBadge
} from 'react-icons/di';
import { RiVuejsFill } from 'react-icons/ri';

import '../styles/components/technologiesContainer.sass';

const technologies = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 />, text: 'Sólido conhecimento em HTML5, com experiência em criação de layouts responsivos e acessíveis.' },
  { id: 'css', name: 'CSS3', icon: <DiCss3 />, text: 'Experiência em CSS3, incluindo Flexbox e Grid, para estilização de páginas web.' },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge />, text: 'Conhecimento em JavaScript, com foco em desenvolvimento front-end e manipulação de DOM.' },
  { id: 'node', name: 'Node.js', icon: <DiNodejsSmall />, text: 'Experiência em Node.js, em desenvolvimento de APIs e aplicações back-end.' },
  { id: 'mysql', name: 'MySQL', icon: <DiMysql />, text: 'Conhecimento em MySQL, modelagem de dados e consultas SQL.' },
  { id: 'react', name: 'React', icon: <DiReact />, text: 'Experiência em React, com foco em desenvolvimento de interfaces de usuário dinâmicas e responsivas.' },
  { id: 'sass', name: 'Sass', icon: <DiSass />, text: 'Conhecimento em Sass, pré-processamento de CSS e organização de estilos.' },
  { id: 'mongodb', name: 'MongoDb', icon: <DiMongodb />, text: 'Conhecimento em MongoDB, modelagem de dados e consultas eficientes.' },
  { id: 'vue', name: 'Vue', icon: <RiVuejsFill />, text: 'Experiência em Vue, com foco em desenvolvimento de interfaces de usuário tabelas e dashboards.' },
  { id: 'github', name: 'GitHub', icon: <DiGithubBadge />, text: 'Experiência em GitHub, gerenciamento de repositórios e colaboração em projetos.' },
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
                {tech.text} 
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologiesContainer;
