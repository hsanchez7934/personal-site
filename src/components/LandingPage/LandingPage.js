import React, { Component } from 'react';
import './LandingPage.css';
import video from '../../assets/denverhero.mp4';
import photo from '../../assets/photo1.jpg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import linkedinIconHover from '../../assets/linkedin-icon-hover.svg';
import githubIcon from '../../assets/github-icon.svg';
import githubIconHover from '../../assets/github-icon-hover.svg';

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

            <h3 className='titles'>Skills</h3>
            <section id='skills-box'>

            </section>

          </section>
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
        </main>
      </div>
    );
  }
}
