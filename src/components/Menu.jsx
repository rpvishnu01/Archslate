import React from 'react'

const Menu = () => {
  return (
    <div className='flex justify-center gap-36 h-10  pt-16 pb-20 w-full  bg-white'>
        {/* <button className='w-auto border-b-8 border-blue-200 inline-block p-8 bg-white text-black font-medium text-xs  uppercase  hover:border-blue-800 focus:border-blue-800  focus:outline-none focus:ring-0 active:border-blue-800  transition duration-150 ease-in-out'>Search Jobs</button> */}
      <div className='text-xl font-bold cursor-pointer'>Search Jobs</div>
      <div className='text-xl font-bold cursor-pointer'>Applied</div>
      <div className='text-xl font-bold cursor-pointer'>Saved Jobs</div>
      
    </div>
  )
}

export default Menu
