import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className='flex justify-between items-center p-4 shadow-md md:px-16 '>
      <div className='text-xl font-semibold'>Greenglam</div>
      <div className='flex justify-start w-32 sm:w-48 md:w-72 lg:w-96 mx-4'>
        <input type="text" placeholder='Search for plants' className='border border-gray-300 px-3 py-2 rounded-md w-full text-left '/>
      </div>
      <div>
        
        <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'>Login</button>
      </div>

     </div>
    </>
  )
}

export default Navbar