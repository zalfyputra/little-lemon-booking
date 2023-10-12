import BookingHero from './BookingHero';
import BookingForm from './BookingForm';
import React, { useReducer, useEffect, useState } from 'react';
import { fetchAPI, submitAPI } from '../services/mockAPI';
import { useNavigate } from 'react-router-dom';

// Initial state for the reducer
const initialState = {
  availableTimes: [],
  error: null,
};

// Reducer to update the available times and error
function updateTimes(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, availableTimes: action.payload, error: null };
    case 'FETCH_ERROR':
      return { ...state, availableTimes: [], error: 'Error fetching times' };
    default:
      return state;
  }
}

function BookingPage() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // New state variable for the selected date
  const [state, dispatch] = useReducer(updateTimes, initialState);

  useEffect(() => {
    async function getAvailableTimes() {
      try {
        const times = await fetchAPI(date); // Fetch times for the selected date
        dispatch({ type: 'FETCH_SUCCESS', payload: times });
      } catch (error) {
        console.error(error);
        dispatch({ type: 'FETCH_ERROR' });
      }
    }

    getAvailableTimes();
  }, [date]); // Run this effect whenever the selected date changes

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const response = await submitAPI(formData);

    if (response) {
      navigate('/booking-confirmed');
    }
  };

  return (
    <main id="main">
      {state.error && <p>{state.error}</p>}
      <BookingHero />
      {/* Pass setDate down to BookingForm so it can update the selected date */}
      <BookingForm availableTimes={state.availableTimes} dispatch={dispatch} onSubmit={submitForm} onDateChange={setDate} />
    </main>
  );
}

export default BookingPage;