import React from 'react';
import logo from '../images/Logo.svg';
import Nav from './Nav';

function Header() {
  return (
    <header id="header" className='main-grid'>
      <img src={logo} alt="Little Lemon logo" width="250" id='logo' />
      <Nav />
    </header>
  );
}

export default Header;