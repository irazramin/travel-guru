import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AllPlaces.css';
import Places from './Place/Places';
const AllPlaces = () => {
  return (
    <div>
      <div className='place-details'>
        <div>
          <h2>Cox's bazar</h2>
          <p>
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <button className='booking-btn'>Booking <FontAwesomeIcon style={{marginLeft:'10px'}} icon={faArrowRight} /> </button>
        </div>
        <div className='places'>
            <Places />
        </div>
      </div>
    </div>
  );
}

export default AllPlaces