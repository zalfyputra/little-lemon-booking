import React from 'react';
import heroImage from '../images/hero-image.png';

function BookingHero() {
  return (
    <section className="hero" id='reservation-hero'>
        <div className="main-grid">
            <div className="hero-content">
                <h1 className='display-title'>Book a table</h1>
                <h2 className='sub-title'>Complete the form below to book a table</h2>
            </div>
            <img src={heroImage} alt="Food" className="right-image"/>
        </div>
    </section>
  );
}

export default BookingHero;