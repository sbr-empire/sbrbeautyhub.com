import apiClient from '../config/api';

export const bookingService = {
  // Get available slots
  getAvailableSlots: async (salonId, serviceId, date) => {
    try {
      const response = await apiClient.get('/api/db/bookings/slots', {
        params: { salonId, serviceId, date }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch slots: ${error.message}`);
    }
  },

  // Create booking
  createBooking: async (bookingData) => {
    try {
      const response = await apiClient.post('/api/db/bookings', bookingData);
      return response.data;
    } catch (error) {
      throw new Error(`Booking failed: ${error.message}`);
    }
  },

  // Get user bookings
  getUserBookings: async () => {
    try {
      const response = await apiClient.get('/api/db/bookings/user');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch bookings: ${error.message}`);
    }
  },

  // Cancel booking
  cancelBooking: async (bookingId, reason = '') => {
    try {
      const response = await apiClient.put(`/api/db/bookings/${bookingId}`, {
        status: 'cancelled',
        cancellationReason: reason
      });
      return response.data;
    } catch (error) {
      throw new Error(`Cancellation failed: ${error.message}`);
    }
  },

  // Reschedule booking
  rescheduleBooking: async (bookingId, newDateTime) => {
    try {
      const response = await apiClient.put(`/api/db/bookings/${bookingId}`, {
        status: 'rescheduled',
        dateTime: newDateTime
      });
      return response.data;
    } catch (error) {
      throw new Error(`Rescheduling failed: ${error.message}`);
    }
  },

  // Add review
  addReview: async (bookingId, review) => {
    try {
      const response = await apiClient.post(`/api/db/bookings/${bookingId}/review`, review);
      return response.data;
    } catch (error) {
      throw new Error(`Review submission failed: ${error.message}`);
    }
  }
};
