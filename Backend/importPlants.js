import axios from "axios";
import mongoose from "mongoose";
import Plant from "./models/Plant.js";
import dotenv from "dotenv";

dotenv.config();

const API_KEY=process.env.API_KEY; // Make sure to set your API key in environment variables
const BASE_URL="https://perenual.com/api";

await mongoose.connect("mongodb://localhost:27017/plants-db");

async function importPlants() {
    let page = 1;

    while (true) {
        const response = await axios.get(`${BASE_URL}/species-list?key=${API_KEY}&page=${page}`);
    
        const items = response.data?.data;
        if(!items || items.length === 0)break;

        await Plant.insertMany(items);
        page++;
    }
    console.log("Import Completed");
    process.exit();
    
}
importPlants();