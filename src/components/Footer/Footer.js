import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import linkedinIconHover from '../../assets/linkedin-icon-hover.svg';
import githubIcon from '../../assets/github-icon.svg';
import githubIconHover from '../../assets/github-icon-hover.svg';

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      linkedin: linkedinIcon,
      github: githubIcon
    };
  }

  backgroundImage = (url) => ({
    backgroundImage: 'url(' + url + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  })

  iconChange = (query, icon) => {
    this.setState({
      [query]: icon
    });
  };

  render() {
    const { linkedin, github } = this.state;
    return (
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
    );
  }
};
