import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo_light from '../../img/logo-white.png';
import logo_dark from '../../img/logo.png';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = ({ theme }) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const navs = [
    { id: 1, link: 'home', path: '/home' },
    { id: 2, link: 'News', path: '/news' },
    { id: 3, link: 'Destination', path: '/destination' },
    { id: 4, link: 'Blog', path: '/blog' },
    { id: 5, link: 'Contact', path: '/contact' },
  ];

  const handleLogin = () => {
    navigate('/login');
  };
  const handleSignout = () => {
    signOut(auth)
  };
  return (
    <header className={theme}>
      <nav className='navbar container'>
        <div className='nav-logo'>
          <img src={theme == 'light' ? logo_light : logo_dark} alt='' />
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
                <li key={item.id}>
                  <CustomLink to={item.path}>{item.link}</CustomLink>
                </li>
              );
            })}
            {user ? (
              <button onClick={handleSignout} className='login-btn'>
                Sign out
              </button>
            ) : (
              <button onClick={handleLogin} className='login-btn'>
                Login
              </button>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
