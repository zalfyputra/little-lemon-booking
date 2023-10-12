import React from 'react';
import heroImage from '../images/hero-image.png';
import { Link } from 'react-router-dom';

function HomepageHero() {
  return (
    <section className="hero" id="homepageHero">
        <div className="main-grid">
            <div className="hero-content">
                <h1 className='display-title'>Little Lemon</h1>
                <h2 className='sub-title'>Chicago</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <Link to="/reservation" className='yellow-button'>Book a table</Link>
            </div>
            <img src={heroImage} alt="Food" className="right-image"/>
        </div>
    </section>
  );
}

export default HomepageHero;