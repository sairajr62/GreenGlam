import React from 'react'

const Home = () => {
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
    <div className=''>Card 1</div>
    <div className=''>Card 2</div>
    </>
  )
}

export default Home