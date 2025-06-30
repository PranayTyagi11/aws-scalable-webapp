// Load environment variables
require('dotenv').config();

const express = require('express');
const mysql = require('mysql2/promise');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Use middleware
app.use(express.json());
app.use(morgan('dev'));

// Set up reusable DB pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// DB test route
app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    res.json({
      message: 'Connected to AWS RDS MySQL!',
      dbTime: rows[0].now,
    });
  } catch (error) {
    console.error('❌ Database query error:', error.message);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

