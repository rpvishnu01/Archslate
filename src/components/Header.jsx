import React from "react";
import Archslate from "../Images/Archslate.png";
import Blue4 from "../Images/Blue4.png";
import { BsGlobe2, BsStars, BsEnvelope } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
    <div className=" w-full h-20 bg-white border-b-2 shadow-md fixed z-50">
      <div className="flex justify-between p-4 ">
        <div className="flex flex-row gap-3 justify-center items-center">
          <img src={Blue4} alt="" />
          <img src={Archslate} alt="" className="w-auto h-8" />
        </div>
        <div className="flex justify-center items-center gap-10 px-2">
          <div className="flex flex-col items-center">
            <BsStars className="w-8 h-6" />
            <span>Candidates</span>
          </div>
          <div className="flex flex-col items-center">
            <BsGlobe2 className="w-8 h-6" />
            <span>Companies</span>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineShoppingBag className="w-8 h-6" />
            <span>Jobs</span>
          </div>
          <div className="flex flex-col items-center">
            <BsEnvelope className="w-8 h-6" />
            <span>Notifications</span>
          </div>
          <div className="flex flex-col items-center">
            <FiUser className="w-8 h-6" />
            <span>User Name</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
