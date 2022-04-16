import React from 'react';
import DefaultLayout from '../Layout/DefaultLayout';
import Places from '../Places/AllPlaces';
import './Home.css';
const Home = () => {
  return (
    <DefaultLayout>
      <div className='home-container '>
        <div className='home-over'>
          <div className='container'>
            <Places />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Home