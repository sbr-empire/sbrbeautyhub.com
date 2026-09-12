import { create } from 'zustand';
import apiClient from '../config/api';

export const useBeautyStore = create((set, get) => ({
  products: [],
  salons: [],
  services: [],
  cart: [],
  bookings: [],
  loading: false,
  error: null,

  // ======================================================================
  // PRODUCTS
  // ======================================================================
  fetchProducts: async (filters = {}) => {
    set({ loading: true, error: null });
    try {
      const response = await apiClient.get('/api/db/products', { params: filters });
      set({ products: response.data.data || [], loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addProduct: async (productData) => {
    try {
      const response = await apiClient.post('/api/db/products', productData);
      set((state) => ({ products: [...state.products, response.data] }));
      return response.data;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  updateProduct: async (productId, updates) => {
    try {
      await apiClient.put(`/api/db/products/${productId}`, updates);
      set((state) => ({
        products: state.products.map((p) => (p.id === productId ? { ...p, ...updates } : p))
      }));
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  // ======================================================================
  // SALONS
  // ======================================================================
  fetchSalons: async (filters = {}) => {
    set({ loading: true, error: null });
    try {
      const response = await apiClient.get('/api/db/salons', { params: filters });
      set({ salons: response.data.data || [], loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  getSalonDetails: async (salonId) => {
    try {
      const response = await apiClient.get(`/api/db/salons/${salonId}`);
      return response.data;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  // ======================================================================
  // SERVICES
  // ======================================================================
  fetchServices: async (salonId) => {
    set({ loading: true, error: null });
    try {
      const response = await apiClient.get(`/api/db/services?salon=${salonId}`);
      set({ services: response.data.data || [], loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  bookService: async (bookingData) => {
    try {
      const response = await apiClient.post('/api/db/bookings', bookingData);
      set((state) => ({ bookings: [...state.bookings, response.data] }));
      return response.data;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  // ======================================================================
  // CART
  // ======================================================================
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId)
    }));
  },

  updateCartQuantity: (productId, quantity) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    }));
  },

  clearCart: () => set({ cart: [] }),

  getCartTotal: () => {
    const state = get();
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}));
