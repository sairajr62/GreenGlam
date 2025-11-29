import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load variables from .env file
dotenv.config();

// 1. Initialize the App
const app = express();

// 2. Middleware (The Gatekeepers)
app.use(express.json()); // Allows server to accept JSON data (req.body)
app.use(cors()); // Allows your React frontend to talk to this backend

// 3. Database Connection Logic
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    process.exit(1); 
  }
};

// 4. Routes
// Example of how you will import routes later:
// import plantRoutes from './routes/plantRoutes.js';
// app.use('/api/plants', plantRoutes);

// Simple Test Route
app.get('/', (req, res) => {
  res.send('API is running... Plants are growing! 🌱');
});

// 5. Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

// 6. Start the Server
const PORT = process.env.PORT || 5000;

// Connect to DB first, then start listening
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});