import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import background from "../assets/security.png";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-gray-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 mt-1">
          <p className="text-2xl">
            Sequencing & Production with a Distinctive Approach
          </p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">Introducing Our Innovative Tech Brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4 duration-300 font-medium tracking-wide ">
            Get Started
          </button>
        </div>
        <div>
          <img className="w-full" src={background} alt="/" />
        </div>
        <div className="md:absolute static mt-20 py-8 flex-col md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gray-200 border-slate-300 border rounded-xl text-center shadow-xl">
          <p className="sm:text-2xl font-medium  text-lg mb-6">Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500 font-medium text-lg">
              <CloudUploadIcon className="h-6 text-violet-600" /> App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500 font-medium text-lg">
              <DatabaseIcon className="h-6 text-violet-600" /> Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500 font-medium text-lg">
              <PaperAirplaneIcon className="h-6 text-violet-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500 font-medium text-lg">
              <ServerIcon className="h-6 text-violet-600" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
