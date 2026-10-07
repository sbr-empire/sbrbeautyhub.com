require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint (required by Cloud Run)
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'sbrbeautyhub' });
});

// API endpoints
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    products: []
  });
});

app.get('/api/categories', (req, res) => {
  res.json({
    success: true,
    categories: []
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal Server Error' 
      : err.message
  });
});

app.listen(PORT, () => {
  console.log(`✅ SBR Beauty Hub running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;