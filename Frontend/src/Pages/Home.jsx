import React, { useState,useEffect } from 'react'
import Card from '../Components/Card'

const Home = () => {
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
    <>
    <div className='relative w-full h-[500px] flex flex-col items-center justify-center bg-cover bg-center'
     style={{
        backgroundImage:'url("https://media.designcafe.com/wp-content/uploads/2020/06/24163644/Air-Purifying-Indoor-Plants-For-Your-Home.jpg")',
     }}>
        <div className='absolute inset-0 bg-black bg-opacity-40'></div>
        <div className='relative z-10 text-center px-4"'>
        <h1 className='text-4xl font-bold text-white mb-4 drop-shadow-md'>Welcome to Greenglam</h1>
        <p className='text-xl text-gray-100 font-medium drop-shadow-sm'>Your one-stop shop for all things plants!</p>
        <button className='bg-green-500 text-white rounded-md m-4 p-2'>Find Your Plant</button>
        </div>
        
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6'>
        {plants.map(Plant =>(
            <Card key={Plant._id} Plant={Plant}/>
        ))}
    </div>
    </>
  )
}

export default Home