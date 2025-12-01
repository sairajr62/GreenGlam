import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const PlantList = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() =>{
        const  fetchPlants = async () => {
            const res = await axios.get("http://localhost:3000/api/plant/home");
            // const data = await res.data.json();
            console.log(res);
            
            setPlants(res.data);
        }
        fetchPlants();
    },[]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>{plants.map(p =>(
        <Card plants={p} />
    ))}   
        </div>
  );
}

export default PlantList