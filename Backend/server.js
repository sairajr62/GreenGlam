import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Plant from "./models/Plant.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

await mongoose.connect("mongodb://localhost:27017/plants-db");

// HOME PAGE — returns ONLY 6 plants
app.get("/api/plant/home", async (req, res) => {
  const plants = await Plant.find().limit(6);
  res.json(plants);
});

// SHOP PAGE — PAGINATION

app.get("/api/plant/shop", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 20; 
  const skip = (page - 1) * limit;

  const plants = await Plant.find().skip(skip).limit(limit);

  res.json({
    page,
    limit,
    data: plants,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

