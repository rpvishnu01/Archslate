import React, { useState } from "react";
import Card from './Card'
import Options from "./Options";
import Search from "./Search";
import {cardDetails1,cardDetails2} from '../Details/cardDetails'
import Menu from "./Menu";

export default function Body1() {

  const [jobtype,setJobType]=useState(false)

  const handleJobtype =(e)=>{
    setJobType((e)=>!e)
   console.log(jobtype)
  }
  return (
<> 
  <Menu />
    <div className=" flex w-full h-auto bg-slate-100 text-center p-10  flex-col">
      
      <div className="pb-6">
        <p className="text-lg font-bold">What types of jobs intrest you?</p>
      </div>
      <div className="flex  justify-center gap-10  w-full px-5 pb-10">
        <span className="text-black text-2xl font-bold">Full time</span>
        <label className="inline-flex relative items-center cursor-pointer shadow	">
          <input type="checkbox" value={jobtype} class="sr-only peer" onClick={(e)=>handleJobtype(e.target.value)} />
          <div class="w-16 h-6 bg-black peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[12px] after:bg-orange-400 after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
        </label>
        <span className="text-black text-2xl font-bold">Freelance</span>
      </div>
      <Options />
      <Search/>
      {jobtype ? (
        cardDetails1.map((item,i)=>(
          <Card img={item.img} name={item.name} subName={item.subName} location={item.location} rate={item.rate} />
        ))
       ) : (
        cardDetails2.map((item,i)=>(
          <Card img={item.img} name={item.name} subName={item.subName} location={item.location} rate={item.rate} />
        ))
       )
      }

     

    </div>
    </>
  );
}
