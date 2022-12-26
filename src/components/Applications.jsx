import React from "react";
import { BsArrowLeftShort, BsFillLightningChargeFill } from "react-icons/bs";
import img1 from "../Images/img1.png";
import { FiShare2, FiBookmark } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";




import { Link } from "react-router-dom";
import Details from "./Details";


const Applications = () => {
  return (
    <div className="mx-28">
      <div className="w-full p-10 ">
        <div className="flex items-center ">
          <BsArrowLeftShort className="font-bold h-10 w-10" />
          <p className="font-bold text-2xl"> Back to Home</p>
        </div>

        <div>
          <div className="bg-white  p-5 my-10 flex gap-5 justify-between ">
            {/* card items image sections */}
            <div className="">
              <img src={img1} alt="" className="h-56" />
            </div>

            {/*card items middle parts details sections */}
            <div className="pl-10">
              <div className="flex  gap-5  py-5">
                <div className="bg-lime-200 px-6 py-2 outline outline-2 outline-offset-2 rounded-3xl">
                  <span>Freelance</span>
                </div>
                <div className="bg-fuchsia-200 px-6 py-2 outline outline-2 outline-offset-2 rounded-3xl">
                  <span>On-Site</span>
                </div>
                <div className="bg-blue-400 px-6 py-2 outline outline-2 outline-offset-2 rounded-3xl">
                  <span>Long-Term</span>
                </div>
              </div>
              <div className="text-2xl font-bold">
                <h3>jj</h3>
              </div>
              <div className="flex gap-5">
                <div>
                  <span>jj</span>
                </div>
                <div>
                  <span>jj</span>
                </div>
                <div>
                  <span>/hour</span>
                </div>
              </div>
              <div className="py-3">
                <h3>Skills Requirements</h3>
              </div>
              <div className="flex gap-5">
                <div className="bg-black text-white px-6 py-2 outline outline-2 outline-offset-2 rounded-3xl">
                  <span>Rhino</span>
                </div>
                <div className="bg-black text-white px-6 py-2 outline outline-2 outline-offset-2 rounded-3xl">
                  <span>Bleabeam</span>
                </div>
                <div className="bg-black text-white px-6 py-2 outline outline-2 outline-offset-2 rounded-3xl">
                  <span>Sketchup</span>
                </div>
              </div>
            </div>

            {/*card items last parts details sections */}

            <div className="pl-10 flex flex-col justify-between">
              <div className="gap-5 flex justify-end">
                <div className=" text-3xl font-bold">
                  <FiShare2 />
                </div>
                <div className="text-3xl font-bold">
                  <FiBookmark />
                </div>
              </div>

              <div className="flex flex-col gap-6 justify-end items-end">
                <Link to="/apply">
                  <div>
                    <button className="bg-green-300 py-4 px-10 font-bold text-2xl ">
                      Status: Accepting Applications
                    </button>
                  </div>
                </Link>
                <Link to="/apply">
                  <div>
                    <button className=" bg-orange-600 py-4 px-10 rounded-full font-bold text-2xl  justify-center text-white">
                      Apply on Archslate
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


<div className="flex  justify-between mx-9">
      <div className="h-auto w-96 bg-white p-10 ">
        <div className="flex justify-center items-center pb-4 gap-3">
          <BsFillLightningChargeFill className="font-bold h-10 w-10" />
          <p className="font-bold text-2xl">Software Skills</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <div className="bg-black text-white px-6 py-2 outline outline-2 outline-offset-2 rounded-3xl">
            <span>Bleabeam</span>
          </div>
          <div className="bg-black text-white px-6 py-2 outline outline-2 outline-offset-2 rounded-3xl">
            <span>Bleabeam</span>
          </div>
          <div className="bg-black text-white px-6 py-2 outline outline-2 outline-offset-2 rounded-3xl">
            <span>Bleabeam</span>
          </div>
        </div>
      </div>

      
      <div className="h-auto w-96 bg-white p-10 ">
        <div className="flex justify-center items-center pb-4 gap-3">
          <AiOutlineStar className="font-bold h-10 w-10" />
          <p className="font-bold text-2xl">Experience</p>
          <h3>Associate 3+ years</h3>
        </div>

     
      </div>


      
      <div className="h-auto w-96 bg-white p-10 ">
        <div className="flex justify-center items-center pb-4 gap-3">
          <BiDollar className="font-bold h-10 w-10" />
          <p className="font-bold text-2xl">Rate</p>
          <span>$55-$65/hour</span>
        </div>

     
      </div>


      
      <div className="h-auto w-96 flex flex-col bg-white p-10 ">
        <div className="flex justify-center items-center pb-4 gap-3">
          <HiOutlineLocationMarker className="font-bold h-10 w-10" />
          <p className="font-bold text-2xl">Location</p>
    
        </div>

        <div className="flex flex-wrap justify-center gap-3">
            <p>Bozeman,MT USA</p>
          <div className="bg-rose-300 text-white px-6 py-2 outline outline-2 outline-offset-2 rounded-3xl">
            <button>On-site</button>
          </div>
        </div>
      </div>
       
      </div>



   

     <Details />
   

    </div>
  );
};

export default Applications;
