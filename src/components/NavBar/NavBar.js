import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      liClass: 'nav-links-li'
    };
  }

  iconChange = (query, icon) => {
    this.setState({
      [query]: icon
    });
  };

  render() {
    const { liClass } = this.state;

    return (
        <nav className='header-component-nav'>          
          <ul className='header-component-ul'>
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
    );
  }
}
