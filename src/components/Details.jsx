import { BsEnvelope } from "react-icons/bs";
import avatar from "../Images/avatar.png";
import { AiOutlineStar } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";


const Details = () => {
  return (
    <div className="flex mt-8 gap-8 justify-between">
      {/*left side start */}
      <div className="bg-white flex flex-col p-20 w-3/4 ">
        <div className="mb-4 mr-40">
          <h3 className="font-semibold text-3xl pb-7">About this role</h3>
          <p className="text-2xl">
            Short overview about job and the way that the candidate would fit
            into the company . Can also include extra instructions for the
            applications process if any exist.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-3xl py-6">Responsibilities</h4>
          <ul className="list-disc pl-10">
            <li className="text-2xl">specific day to day task</li>
            <li className="text-2xl">deliverables</li>
            <li className="text-2xl">work environment requirements</li>
            <li className="text-2xl">role with in current team</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-3xl py-6">Skills</h4>
          <ul className="list-disc pl-10">
            <li className="text-2xl">software skills</li>
            <li className="text-2xl">technical skills</li>
            <li className="text-2xl">soft skills</li>
            <li className="text-2xl">other</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-3xl py-6">Qualifications</h4>
          <span className="text-2xl">Required</span>
          <ul className="list-disc pl-10">
            <li className="text-2xl">education</li>
            <li className="text-2xl">license and certificates</li>
            <li className="text-2xl">experience needed</li>
          </ul>
          <span className="text-2xl">Bonus</span>
          <ul className="list-disc pl-10">
            <li className="text-2xl">education</li>
            <li className="text-2xl">license and certificates</li>
            <li className="text-2xl">experience needed</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-3xl py-6">Rate</h4>
          <ul className="list-disc pl-10">
            <li className="text-2xl">if available</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-3xl py-6">Time estimate</h4>
          <ul className="list-disc pl-10">
            <li className="text-2xl">if available</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-3xl py-6">Work Authorization</h4>
          <ul className="list-disc pl-10">
            <li className="text-2xl">tbd</li>
          </ul>
        </div>
        <div className="mr-40">
          <h4 className="font-semibold text-3xl py-6">About Company</h4>
          <p className="text-2xl">
            Description of company with any uniform info or disclaimers - equal
            hiring opportunity,etc
          </p>
        </div>
        <div className="flex justify-between mr-40 my-10 items-center text-white">
          <button className="bg-orange-500 h-14  rounded-full px-6 text-3xl">Apply on Archslate</button>
          
          <button className="bg-black h-14 flex items-center rounded-full px-6 text-3xl"><AiOutlineStar/> Save</button>

    
          <button className="bg-black h-14 flex justify-center items-center rounded-full px-6 text-3xl"><FiShare2/>Share & Refer</button>
        </div>
      </div>
      {/*left side end */}
      {/*right sid estart */}
      <div className="flex flex-col bg-white w-1/4 h-fit pb-10">
        <div className="m-10">
          <span className="font-bold justify-center text-3xl">Job Poster</span>
        </div>

        <div className="flex px-4 py-4 justify-around">
          <div>
            <img src={avatar} alt="" className="rounded-full w-20" />
          </div>
          <div className="flex flex-col text-3xl">
            <span>John Carlose</span>
            <span className="font-bold">Project Manager</span>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 bg-black text-white mx-20 rounded-full">
          <button className="flex gap-10 items-center justify-center h-4">
            <BsEnvelope className="text-3xl" />
            <div>
              <span className="text-3xl font-bold"> Message</span>
            </div>
          </button>
        </div>
      </div>
      {/*right sid estart */}
    </div>
  );
};

export default Details;
