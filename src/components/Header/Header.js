import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
  const navigate = useNavigate()
    const navs = [
      { id: 1, link: 'home', path: '/home' },
      { id: 2, link: 'News', path: '/news' },
      { id: 3, link: 'Destination', path: '/destination' },
      { id: 4, link: 'Blog', path: '/blog' },
      { id: 1, link: 'Contact', path: '/contact' },
    ];

    const handleLogin = () =>{
        navigate('/login');
    }
  return (
    <header>
      <nav className='navbar container'>
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
                    <CustomLink to={item.path}>
                      {item.link}
                    </CustomLink>
                </li>

              );
            })}
            <button onClick={handleLogin} className='login-btn'>Login</button>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header