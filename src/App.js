import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Reservation from './components/BookingPage';
import Footer from './components/Footer';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <>
        <Helmet>
          <title>Little Lemon</title>
          <meta name="description" content="The Little Lemon website" />
          <meta property="og:title" content="Little Lemon" />
          <meta property="og:description" content="A restaurant" />
          <meta property="og:image" content="" />
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;