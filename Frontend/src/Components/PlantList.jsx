import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';


function PlantList (){
    const [plants, setPlants] = useState([]);

    useEffect(() =>{
        async function fetchPlants(){
            const res = await fetch("http://localhost:3000/api/plant/home");
            const data = await res.json();
            setPlants(data);
        }
        fetchPlants();
    },[]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>{plants.map(Plant =>(
        <Card key={Plant._id} Plant={Plant}/>
    ))}   
        </div>
  );
}

export default PlantList