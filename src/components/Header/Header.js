import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './Header.css';
const Header = () => {
    const navs = [
      { id: 1, link: 'home', path: '/home' },
      { id: 2, link: 'News', path: '/news' },
      { id: 3, link: 'Destination', path: '/destination' },
      { id: 4, link: 'Blog', path: '/blog' },
      { id: 1, link: 'Contact', path: '/contact' },
    ];
  return (
    <header>
      <nav className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='' />
        </div>
        <div>
          <input
            type='text'
            className='nav-search'
            placeholder='Search your Destination...'
          />
        </div>
        <div className='nav-items'>
          <ul>
            {navs.map((item) => {
              return (
                <li>
                  <Link to={item.path}>{item.link}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header