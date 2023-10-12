import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="nav">
      <div onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={isOpen ? 'open' : 'closed'}>
        <div className={isOpen ? 'close-icon' : 'hide'}>
            <span onClick={() => setIsOpen(!isOpen)}>X</span>
        </div>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link className='disabled-link' to="#" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link className='disabled-link' to="#" onClick={() => setIsOpen(false)}>Menu</Link></li>
          <li><Link className='disabled-link' to="#" onClick={() => setIsOpen(false)}>Order</Link></li>
          <li><Link to="/reservation" onClick={() => setIsOpen(false)}>Reservation</Link></li>
          <li><Link className='disabled-link' to="#" onClick={() => setIsOpen(false)}>Login</Link></li>
        </ul>

    </nav>
  );
}

export default Nav;