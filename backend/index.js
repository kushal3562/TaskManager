const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/tasks'); 

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: ['http://localhost:3000', 'https://frontend-2qseyc1o1-karthikanaboina-5000s-projects.vercel.app']
}));

app.use(express.json());

app.use('/api/tasks', taskRoutes);



app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
