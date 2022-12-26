import React from 'react'
import { BsLightningCharge } from "react-icons/bs";


export default function InnerSearch() {
  return (
    <div className='mt-10 flex justify-between mx-40'>
        <div className="flex justify-between p-3  gap-40">
        <div className='outline outline-2 text-lg outline-offset-2 px-6  py-2 rounded-3xl flex justify-center items-center' > <BsLightningCharge/><span className='font-bold'> On-Site</span></div>
        <div className='outline outline-2 text-lg outline-offset-2 px-6 py-2 rounded-3xl flex justify-center items-center' ><BsLightningCharge/><span className='font-bold'>Long-Term</span></div>
      </div>
        <div className='outline outline-2 text-lg font-bold text-gray-400 outline-offset-2 px-2 rounded-3xl flex justify-center items-center'><span>Clear All</span></div>
    </div>
  )
}
