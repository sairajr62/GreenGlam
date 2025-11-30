import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from "./index.js";
import Plant from './models/Plant.js';

// Load variables from .env file
dotenv.config();

// 1. Initialize the App
const app = express();

// 2. Middleware (The Gatekeepers)
app.use(express.json()); // Allows server to accept JSON data (req.body)
app.use(cors()); // Allows your React frontend to talk to this backend

await mongoose.connect("mongodb://localhost:27017/plants-db");

app.get("/api/plant", async (req,res)=>{
    const plants=await Plant.find({});
    res.json(plants);
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
});

