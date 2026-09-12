import apiClient from '../config/api';

export const stripeService = {
  // Create payment intent
  createPaymentIntent: async (amount, currency = 'usd', metadata = {}) => {
    try {
      const response = await apiClient.post('/api/payments/create-intent', {
        amount: Math.round(amount * 100), // Convert to cents
        currency,
        metadata
      });
      return response.data;
    } catch (error) {
      throw new Error(`Payment initialization failed: ${error.message}`);
    }
  },

  // Confirm payment
  confirmPayment: async (paymentIntentId, paymentMethodId) => {
    try {
      const response = await apiClient.post('/api/payments/confirm', {
        paymentIntentId,
        paymentMethodId
      });
      return response.data;
    } catch (error) {
      throw new Error(`Payment confirmation failed: ${error.message}`);
    }
  },

  // Get payment history
  getPaymentHistory: async () => {
    try {
      const response = await apiClient.get('/api/payments/history');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch payment history: ${error.message}`);
    }
  },

  // Refund payment
  refundPayment: async (paymentIntentId, amount = null) => {
    try {
      const response = await apiClient.post('/api/payments/refund', {
        paymentIntentId,
        amount
      });
      return response.data;
    } catch (error) {
      throw new Error(`Refund failed: ${error.message}`);
    }
  }
};
