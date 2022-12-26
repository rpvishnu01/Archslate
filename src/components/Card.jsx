import React from "react";

import { FiShare2, FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Card({ img, name, subName, location, rate }) {
  return (
    <div>
      <div className="bg-white mx-40 p-5 my-10 flex gap-5 justify-between ">
        {/* card items image sections */}
        <div className="">
          <img src={img} alt="" className="h-56" />
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
            <h3>{name}</h3>
          </div>
          <div className="flex gap-5">
            <div>
              <span>{subName}</span>
            </div>
            <div>
              <span>{location}</span>
            </div>
            <div>
              <span>{rate}/hour</span>
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
          <div>
            <h4>Posted:08/24/2022</h4>
          </div>
          <Link to="/apply">
            <div>
              <button className="bg-orange-600 py-4 px-10 rounded-full">
                Apply
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
