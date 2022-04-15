import React from 'react';
import Places from '../Places/Places';
import './Home.css';
const Home = () => {
  return (
    <div className='home-container '>
      <div className='home-over'>
        <div className="container">
        <Places />
        </div>
      </div>
    </div>
  );
}

export default Home