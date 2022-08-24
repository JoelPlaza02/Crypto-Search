import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {

  return (
      <>
        <div className='appHeader'>
           <div className='headingWrapper'>
           <FontAwesomeIcon icon={faCoins} className='coinIcon' />
               <h1 className='white'>Crypto</h1>
               <h1 className='blue'>Search</h1>
           </div>
        </div>
      </>
  );
}

export default Navbar;