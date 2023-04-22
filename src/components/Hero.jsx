import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import { Link, Button } from "react-scroll";
import background from "../assets/security.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gray-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 lg:mt-1 mt-16">
          <p className="text-2xl font-medium">
          Elevate Your Cloud Experience with <span className="text-4xl font-bold">C<span className="text-violet-600">l</span>a
            <span className="text-violet-600">u</span>t
            <span className="text-violet-600">.</span></span>
          </p>
          <h1 className="py-3 text-5xl md:text-7xl font-extrabold ">
            Cloud Management
          </h1>
          <p className="text-2xl font-medium">
          The Smart Choice for Cloud Management & More
          </p>
          <Link
            activeClass="active"
            to="pricing"
            smooth={true}
            offset={-50}
            duration={700}
            className=" "
          >
            <button className="py-3 px-20 rounded-lg text-center my-4 duration-300 font-medium tracking-wide" >
              Get Started
            </button>
          </Link>
        </div>
        <div>
          <img className="w-full" src={background} alt="/" />
        </div>
        <div className="absolute lg:mt-20 lg:py-8 py-2 flex-col md:min-w-[760px] lg:bottom-[5%] bottom-[-25%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gray-200 border-slate-300 border rounded-xl text-center shadow-xl">
          <p className="sm:text-2xl font-medium  text-lg lg:mb-6 mb-1">
            Data Services
          </p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-1 lg:py-2 py-0.5 text-slate-500 font-medium text-lg">
              <CloudUploadIcon className="h-6 text-violet-600" /> App Security
            </p>
            <p className="flex px-1 lg:py-2 py-0.5 text-slate-500 font-medium text-lg">
              <DatabaseIcon className="h-6 text-violet-600" /> Dashboard Design
            </p>
            <p className="flex px-1 lg:py-2 py-0.5 text-slate-500 font-medium text-lg">
              <PaperAirplaneIcon className="h-6 text-violet-600" /> Cloud Data
            </p>
            <p className="flex px-1 lg:py-2 py-0.5 text-slate-500 font-medium text-lg">
              <ServerIcon className="h-6 text-violet-600" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
