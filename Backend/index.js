import express from "express";
import mongoose from "mongoose";
import Plant from "./models/Plant";

const app=express();

await mongoose.connect("mongodb://localhost:27017/plants-db");

app.get("/api/plants", async (req,res)=>{
    const plants=await Plant.find({});
    res.json(plants);
});

app.listen(3000, ()=>console.log("Server running on port 3000"));
