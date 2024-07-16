import React from 'react';
import './Navbar.css';
import Logo from '../../Assets/Zappy Logo.svg';
import arrow_icon from '../../Assets/intro-arrow.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src={Logo} alt="Zappy logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">Features</li>
        <li className="navbar-menu-item">Pricing</li>
        <li className="navbar-menu-item">Gallery</li>
        <li className="navbar-menu-item">Support</li>
      </ul>
      <div className="navbar-login-signup">
        <ul className="navbar-login-signup-list">
          <li>Login</li>
          <button>Signup <img src={arrow_icon} alt="arrow" className='button-image' /></button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
