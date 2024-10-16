import React from 'react'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
    <div className='nav'>
     <h1>BUTLER</h1>
    
      <ul className='nav-item'>
     
        <li className='nav-title'><a href='#home'> Home</a></li>
        <li className='nav-title'><a href='#about'> About</a></li>
        <li className='nav-title'><a href='#Login'> Login</a></li> 
        <li className='nav-title'><a href='#signup'> Signup</a></li>
    </ul>
   
    <div classname='nav-item'>
    <FontAwesomeIcon icon={faSearch} size="1x" />
    <input type="text" className="search-bar" placeholder="Search restaurants" />
    </div>
   
    <div className='nav-item' ><a href='#cart'> Cart</a></div>
    </div>
      </>
      
  )
}

export default Navbar
