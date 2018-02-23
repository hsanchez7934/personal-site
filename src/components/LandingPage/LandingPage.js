import React, { Component } from 'react';
import './LandingPage.css';
import video from '../../assets/denverhero.mp4';
import photo from '../../assets/photo1.jpg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import linkedinIconHover from '../../assets/linkedin-icon-hover.svg';
import githubIcon from '../../assets/github-icon.svg';
import githubIconHover from '../../assets/github-icon-hover.svg';
import techStackArray from '../../techStack.js';


export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      linkedin: linkedinIcon,
      github: githubIcon,
      liClass: 'nav-links-li'
    };
  }

  iconChange = (query, icon) => {
    this.setState({
      [query]: icon
    });
  };

  backgroundImage = (url) => ({
    backgroundImage: 'url(' + url + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  })

  createSkillBoxes = (array) => (
    array.map( (skill, index) => {
      return (
        <article className='logo-box'>
          <div
            style={this.backgroundImage(skill.logo)}
            className='logo-container'>
          </div>
          <p className='skill-name'>{skill.name}</p>
        </article>
      )
    })
  );

  render() {
    const { linkedin, github, liClass, outOfFocus } = this.state;

    return (
      <div className='landing-page-container'>
        <nav id='landing-page-nav'>
          <ul id='nav-links'>
            <li
              className={liClass}
              onMouseEnter={
                () => this.iconChange('liClass', 'nav-links-li out-of-focus')
              }
              onMouseLeave={
                () => this.iconChange('liClass', 'nav-links-li')
              }>
              HOME
            </li>
            <li
              className={liClass}
              onMouseEnter={
                () => this.iconChange('liClass', 'nav-links-li out-of-focus')
              }
              onMouseLeave={
                () => this.iconChange('liClass', 'nav-links-li')
              }>
              PORTFOLIO
            </li>
            <li
              className={liClass}
              onMouseEnter={
                () => this.iconChange('liClass', 'nav-links-li out-of-focus')
              }
              onMouseLeave={
                () => this.iconChange('liClass', 'nav-links-li')
              }>
              RESUME
            </li>
            <li
              className={liClass}
              onMouseEnter={
                () => this.iconChange('liClass', 'nav-links-li out-of-focus')
              }
              onMouseLeave={
                () => this.iconChange('liClass', 'nav-links-li')
              }>
              CONTACT
            </li>
          </ul>
        </nav>
        <header className='landing-page-hero'>
          <video autoPlay muted loop>
            <source
              src={video}
              type='video/mp4' />
          </video>
          <h2 id='quote'>
            The desire to create is one of the
            deepest yearnings of the human soul
          </h2>
        </header>

        <main>
          <section id='image-container'>
            <img
              src={photo}
              alt='Photograph of me in the park.'
              id='profile-pic' />
          </section>
          <section id='intro-section'>
            <h2 id='name'>Hector A. Sanchez</h2>
            <h3 id='title'>Front-End Developer</h3>
          </section>
          <section id='about-me'>

            <h3 className='titles'>About Me</h3>
            <p className='titles-text'>
              My passion lies in designing applications that
              provide people with the best user experience possible.
              I'm driven by the need to create the opportunity for others
              to better their lives through the use of technology.

            </p>
          </section>

          <section id='skills'>
            <h3 id='skills-title'>Proficient with...</h3>
            <div id='skills-box'>
              {
                this.createSkillBoxes(techStackArray)
              }
            </div>
          </section>

          <section id='education'>
            <h3 id='education-title'>Education</h3>
            <div id='school-info-box'>
              <div id='school-info-box-left'>
                <h3 id='school-title'>
                  Turing School of Software & Design
                </h3>
                <p id='school-date'>
                  March 2017 - January 2018
                </p>
              </div>
              <div id='school-info-box-right'>
                <p id='achieved'>
                  Front-End Engineering
                </p>
                <p id='achieved-text'>
                  Trained in fundamental web technologies,
                  web development with JavaScript, professional
                  client-side development, and desktop and
                  mobile applications with web technologies.
                </p>
              </div>
            </div>
            <div id='school-link-box'>
              <button id='dat-button'>
                <a
                  id='school-url'
                  href="https://www.turing.io/alumni/hector-sanchez">
                  Visit Alumni Page
                </a>
              </button>
            </div>
          </section>

        </main>
        <footer id='landing-page-footer'>
          <ul id='footer-links'>
            <li className='footer-links-li'>HOME</li>
            <li className='footer-links-li'>PORTFOLIO</li>
            <li className='footer-links-li'>RESUME</li>
            <li className='footer-links-li'>CONTACT</li>
          </ul>
          <div id='footer-social-media'>
            <img
              src={linkedin}
              alt='LinkedIn icon.'
              className='social-media-icons'
              onMouseEnter={() => this.iconChange('linkedin', linkedinIconHover)}
              onMouseLeave={() => this.iconChange('linkedin', linkedinIcon)}
            />
            <img
              src={github}
              alt='GitHub icon.'
              className='social-media-icons'
              onMouseEnter={() => this.iconChange('github', githubIconHover)}
              onMouseLeave={() => this.iconChange('github', githubIcon)} />
          </div>
        </footer>
      </div>
    );
  }
}
