import React from "react";

function ConfirmedBooking() {
  return (
    <main id="main" style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#4CAF50' }}>Booking Confirmed!</h1>
        <p>Thank you for your booking. We're looking forward to your visit.</p>
        <p>Please check your email for further details.</p>
      </div>
    </main>
  );
}

export default ConfirmedBooking;