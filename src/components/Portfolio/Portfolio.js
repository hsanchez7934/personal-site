import React, { Component } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import projectsArray from '../../projectsArray.js';
import ProjectCard from '../ProjectCard/ProjectCard.js';
import Footer from '../Footer/Footer.js';

export default class Portfolio extends Component {

  createProjectCards = () => (
    projectsArray.map( (project, index) =>
    <ProjectCard
      project={project} />
    )
  );

  render() {
    return(
      <section id='portfolio-container'>
        <header id='portfolio-header'>
          <NavBar/>
          <section id='portfolio-intro-box'>

            <h3 className='portfolio-intro-text fade-in one'>
              this world is but a canvas
              to our imagination...
            </h3>
            <p id='portfolio-title'>MY PORTFOLIO</p>
          </section>
        </header>
        <main id='portfolio-main'>
          <section id='portfolio-description-box'>
            <h3 id='pdb-title'>
              Front-End development is my specialty
            </h3>
            <p id='pdb-text'>
              Below you'll find a selection of some of the work
              that highlights my technical abilities as a front-end engineer,
              my ability to effectively work in a collaborative
              environment, and my ability to work autonomously. I devote myself
              to my projects and I enjoy every step of the build process.
            </p>
          </section>
          <section id='projects-box'>
            {
              this.createProjectCards()
            }
          </section>
        </main>
        <Footer />
      </section>
    )
  }
};
