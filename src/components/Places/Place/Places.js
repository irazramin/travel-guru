import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sajek from '../../../img/images/Sajek.png';
import Sreemongol from '../../../img/images/Sreemongol.png';
import Sundorbon from '../../../img/images/sundorbon.png';
import './Places.css';

function Places() {
    const [imgMove,setImgMove] = useState(0);
   const [count,setCount] = useState(0)
    const places = [
      { id: 1, placeName: 'Sajek', image: Sajek },
      { id: 2, placeName: 'Sreemongol', image: Sreemongol },
      { id: 3, placeName: 'Sundorbon', image: Sundorbon },
      { id: 4, placeName: 'Sundorbon', image: Sundorbon },
      { id: 5, placeName: 'Sundorbon', image: Sundorbon },
      { id: 6, placeName: 'Sundorbon', image: Sundorbon },
    ];

    const incrementSlide = () =>{
      setCount(count+1);
       console.log(count)
       if(count >= places.length-1){
            setImgMove(0);
            setCount(0)
       }else{
           
            setImgMove(imgMove + 300)
       }
    }
  return (
    <div className='places-container'>
      <div className='place-info'>
        {places.map((place) => {
          return (
            <div
              style={{ transform: `translateX(${-imgMove}px)` }}
              className='place active'
              key={place.id}
            >
              <div className=''>
                <img src={place.image} alt='' />
                <h4>{place.placeName}</h4>
              </div>
            </div>
          );
        })}
      </div>

      <div className='slider-btns'>
        <button> {<FontAwesomeIcon icon={faAngleLeft} size='2x' />} </button>
        <button onClick={incrementSlide}>
          {' '}
          {<FontAwesomeIcon icon={faAngleRight} size='2x' />}
        </button>
      </div>
    </div>
  );
}

export default Places