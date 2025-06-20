const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/tasks'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Only one cors import (this is fine)
app.use(cors({
  origin: ['http://localhost:3000', 'https://frontend-2qseyc1o1-karthikanaboina-5000s-projects.vercel.app'],
  credentials: true
}));

app.use(express.json());

// ✅ This maps all /api/tasks requests to routes/tasks.js
app.use('/api/tasks', taskRoutes);

// Optional root test route
app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
