const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path'); // 

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Serve frontend files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// Routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection failed:', err));



app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
