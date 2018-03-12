import React from 'react';
import './ProjectCard.css';

const backgroundImage = (url) => ({
  backgroundImage: 'url(' + url + ')',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
});

const createStackListItems = (array) => (
  array.map( (item, index) => {
    return <li className='project-stack-li'>
      {item}
    </li>
  })
);

const createLinkButtons = (link1, link2) => (
  <div className='projects-buttons-box'>
    <a
      href={link1}
      className='project-links'
      >GITHUB REPO</a>
    <a
      href={link2}
      className='project-links'
      >LIVE APP</a>
  </div>
);

const ProjectCard = ({ project }) => (
  <article className='project-card'>
    <div
      className='project-image'
      style={backgroundImage(project.image)}>
    </div>
    <div className='project-info-box'>
      <h3 className='project-title'>
        {project.name}
      </h3>
      <div className='project-description-box'>
        <div className='pdb-left'>
          <p className='project-description-title'>
            DESCRIPTIONs
          </p>
          <p className='project-description-text'>
            {project.description}
          </p>
        </div>
        <div className='pdb-right'>
          <p className='project-stack-title'>TECH STACK</p>
          <ul className='project-stack-ul'>
            {
              createStackListItems(project.stack)
            }
          </ul>
        </div>
      </div>
      {
        createLinkButtons(project.githubLink, project.liveAppLink)
      }
    </div>
  </article>
);

export default ProjectCard;
