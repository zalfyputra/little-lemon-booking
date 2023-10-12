import { render, fireEvent, screen, waitFor, userEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';
import { fetchAPI } from './services/mockAPI';
import { act } from 'react-dom/test-utils';

jest.mock('./services/mockAPI');

describe('BookingPage', () => {
  test('fetches available times on mount', async () => {
    const mockTimes = ['10:00', '11:00', '12:00'];
    fetchAPI.mockResolvedValue(mockTimes);
        render(
      <Router>
        <BookingPage />
      </Router>
    );
    await waitFor(() => {
      mockTimes.forEach(time => {
        expect(screen.getByText(time)).toBeInTheDocument();
      });
    });
  });

  test('displays error if fetching times fails', async () => {
    fetchAPI.mockRejectedValue(new Error('Fetch failed'));
    render(
      <Router>
        <BookingPage />
      </Router>
    );
    await waitFor(() => {
      expect(screen.getByText(/Error fetching times/i)).toBeInTheDocument();
    });
  });
});

describe('BookingForm', () => {
  test('HTML5 validation attributes are applied correctly', () => {
    render(<BookingForm onSubmit={jest.fn()} availableTimes={['10:00', '11:00', '12:00']} />);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('Form validation displays error messages when fields are left empty', async () => {
      const mockOnSubmit = jest.fn();
      render(<BookingForm onSubmit={mockOnSubmit} availableTimes={['10:00', '11:00', '12:00']} />);
      // Submit the form without filling in any fields
      fireEvent.submit(screen.getByTestId('booking-form'));
      // Check that the error messages are displayed
      await waitFor(() => {
        expect(screen.getByText(/Please select a valid date/i)).toBeInTheDocument();
      });
      await waitFor(() => {
        expect(screen.getByText(/Please select a valid time/i)).toBeInTheDocument();
      });
      await waitFor(() => {
        expect(screen.getByText(/Please select an occasion/i)).toBeInTheDocument();
      });
      // Check that the onSubmit function wasn't called
      expect(mockOnSubmit).not.toHaveBeenCalled();
  });

});