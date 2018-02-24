import React, { Component } from 'react';
import './LandingPage.css';
import video from '../../assets/denverhero.mp4';
import photo from '../../assets/photo1.jpg';
import portfolioIcon from '../../assets/briefcase.svg';
import portfolioIconBlack from '../../assets/briefcase-black.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import linkedinIconHover from '../../assets/linkedin-icon-hover.svg';
import githubIcon from '../../assets/github-icon.svg';
import githubIconHover from '../../assets/github-icon-hover.svg';
import techStackArray from '../../techStack.js';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      linkedin: linkedinIcon,
      github: githubIcon,
      liClass: 'nav-links-li',
      briefcase: portfolioIconBlack
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
    const { linkedin, github, liClass, outOfFocus, briefcase } = this.state;

    return (
      <div className='landing-page-container'>
        <nav id='landing-page-nav'>

          <ul id='nav-links'>
            <Link
              to={'/'}
              className='router-nav-links'>
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
            </Link>
            <Link
              to={'portfolio'}
              className='router-nav-links'>
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
            </Link>
            <Link
              to={'contact'}
              className='router-nav-links'>
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
            </Link>
          </ul>
        </nav>
        <header className='landing-page-hero'>
          <video autoPlay muted loop>
            <source
              src={video}
              type='video/mp4' />
          </video>
          <p className='quote fade-in one'>
            the desire to create is one of the
            deepest yearnings of the human soul...
          </p>
          <h2 id='landing-page-title'>
            FRONT-END DEVELOPER
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
            <p id='title'>
              Snowboarder, avid reader, dog lover,
              music junkie, coding ninja extraordinaire
            </p>
          </section>
          <section id='about-me'>

            <h3 id='about-me-title'>Who I am</h3>
            <p id='titles-text1'>
              My passion lies in designing applications that
              provide people with the best user experience possible.
              I am driven by the need to create the opportunity for others
              to better their lives through the use of technology.
              I love what I do and I'm excited to see how
              I can add value to your company, team, or project
              with my technical skills, my empathetic nature towards
              others, my ability to relate with people at
              a professional level, and my keen problem solving abilities.
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
          <section id='link-to-portfolio'>
            <p id='ltp-text'>
              View my work as a Front-End developer
            </p>
            <div id='ltp-button-box'>
              <Link
                to={'/portfolio'}
                id='portfolio-button-link'
                onMouseEnter={ () => this.iconChange('briefcase', portfolioIcon)}
                onMouseLeave={() => this.iconChange('briefcase', portfolioIconBlack)}>
                <button
                  id='ltp-button'>
                  <img
                    src={briefcase}
                    alt='Portfolio button icon.'
                    id='portfolio-icon' />
                    PORTFOLIO
                </button>
              </Link>
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
                <a
                  id='school-url'
                  href="https://www.turing.io/alumni/hector-sanchez">
                  VISIT ALUMNI PAGE
                </a>
            </div>
          </section>

        </main>
        <footer id='landing-page-footer'>
          <ul id='footer-links'>
            <Link
              to={'/'}
              className='router-footer-nav-links'>
                  <li className='footer-links-li'>
                    HOME
                  </li>
            </Link>
            <Link
              to={'/portfolio'}
              className='router-footer-nav-links'>
              <li className='footer-links-li'>
                PORTFOLIO
              </li>
            </Link>
            <Link
              to={'/contact'}
              className='router-footer-nav-links'>
              <li className='footer-links-li'>
                CONTACT
              </li>
            </Link>
          </ul>
          <div id='footer-social-media'>
            <a
              href='https://www.linkedin.com/in/hector-a-sanchez/'
              style={this.backgroundImage(linkedin)}
              alt='LinkedIn icon.'
              className='social-media-icons swing'
              onMouseEnter={() => this.iconChange('linkedin', linkedinIconHover)}
              onMouseLeave={() => this.iconChange('linkedin', linkedinIcon)}>
            </a>
            <a
              href='https://github.com/hsanchez7934'
              style={this.backgroundImage(github)}
              className='social-media-icons swing'
              onMouseEnter={() => this.iconChange('github', githubIconHover)}
              onMouseLeave={() => this.iconChange('github', githubIcon)}>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
