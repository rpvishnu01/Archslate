import React from "react";
import { BsSearch } from "react-icons/bs";
import Dropdown from "./Dropdown";
import InnerSearch from "./InnerSearch";

export default function Search() {
  return (
    <>
    <div className="mx-44 relative flex justify-center items-center">
      <BsSearch className="absolute my-3 mx-6 h-6 w-6 text-slate-600" />
      <input
        type="text"
        className=" bg-slate-300 flex-1 h-12 rounded-full pl-16 outline-none placeholder-gray-500  "
        placeholder="Search"
      />
      <div className=" flex justify-center items-center px-7">
        <h4 className="font-bold mr-5 text-lg">Sort By :</h4> <Dropdown />
      </div>
    
    </div>
    <InnerSearch/>
    </>
  );
}
