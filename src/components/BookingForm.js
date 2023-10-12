import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes, dispatch, onSubmit, onDateChange }) {
    const [date, setDate] = useState('');
    const [dateError, setDateError] = useState(true);

    const [time, setTime] = useState('');
    const [timeError, setTimeError] = useState(true);

    const [guests, setGuests] = useState(1);
    const [guestsError, setGuestsError] = useState('');

    const [occasion, setOccasion] = useState('');
    const [occasionError, setOccasionError] = useState(true);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        // Run validation functions
        handleDateChange({ target: { value: date } });
        handleTimeChange({ target: { value: time } });
        handleGuestsChange({ target: { value: guests } });
        handleOccasionChange({ target: { value: occasion } });
        // Check if there are any errors
        if (!dateError && !timeError && !guestsError && !occasionError) {
            // If no errors, submit the form
            console.log(`Submitting reservation for ${date}, ${time}, ${guests}, ${occasion}`);
            navigate('/booking-confirmed');
        }
    }

    function handleDateChange(e) {
        const date = e.target.value;
        setDate(date);
        if (!date || date === 'dd/mm/yyyy') {
            setDateError('Please select a valid date');
        } else {
            setDateError('');
        }
    }

    function handleTimeChange(e) {
        const time = e.target.value;
        setTime(time);
        if (!time || time === 'select an available time') {
            setTimeError('Please select a valid time');
        } else {
            setTimeError('');
        }
    }

    function handleGuestsChange(e) {
        setGuests(e.target.value);
        if (!e.target.value) {
            setGuestsError('Number of guests is required');
        } else {
            setGuestsError('');
        }
    }

    function handleOccasionChange(e) {
        const occasion = e.target.value;
        setOccasion(occasion);
        if (!occasion || occasion === 'select an occasion') {
            setOccasionError('Please select an occasion');
        } else {
            setOccasionError('');
        }
    }

    return (
        <form onSubmit={handleSubmit} data-testid='booking-form'>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} aria-label="Choose Date" />
            {dateError && <div className="error">{dateError}</div>}

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleTimeChange} aria-label="Choose Time">
                <option value="">Select an available time</option>
                {availableTimes.map(time => (
                    <option key={time}>{time}</option>
                ))}
            </select>
            {timeError && <div className="error">{timeError}</div>}

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={handleGuestsChange}
                aria-label="Number of Guests"
            />
            {guestsError && <div className="error">{guestsError}</div>}

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange} aria-label="Occasion">
                <option value="">Select an occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {occasionError && <div className="error">{occasionError}</div>}

            <input type="submit" value="Make Your reservation" aria-label="Submit Reservation" disabled={!date && !time && !guests && !occasion} />
        </form>
    );
}

export default BookingForm;