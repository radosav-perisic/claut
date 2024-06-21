import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";
import Shield from '../assets/shield.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-gray-200 drop-shadow-lg fixed">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="font-bold mr-4 text-5xl ">
            C<span className="text-violet-600">l</span>a
            <span className="text-violet-600">u</span>t
            <span className="text-violet-600">.</span>
          </h1>
          <ul className="hidden md:flex ">
            <li className="py-0.5 cursor-pointer px-4 text-[17px] mt-4  m-3 font-medium hover:text-violet-950 hover:rounded-lg hover:bg-violet-800/10 duration-100">
              <Link
                activeClass="active"
                to="home"
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="py-0.5 cursor-pointer px-4 text-[17px] mt-4  m-3 font-medium hover:text-violet-950 hover:rounded-lg hover:bg-violet-800/10 duration-100">
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                offset={-200}
                duration={400}
              >
                About
              </Link>
            </li>
            <li className="py-0.5 cursor-pointer px-4 text-[17px] mt-4  m-3 font-medium hover:text-violet-950 hover:rounded-lg hover:bg-violet-800/10 duration-100">
              <Link
                activeClass="active"
                to="support"
                smooth={true}
                offset={-80}
                duration={500}
              >
                Support
              </Link>
            </li>
            <li className="py-0.5 cursor-pointer px-4 text-[17px] mt-4  m-3 font-medium hover:text-violet-950 hover:rounded-lg hover:bg-violet-800/10 duration-100">
              <Link
                activeClass="active"
                to="platforms"
                smooth={true}
                offset={-100}
                duration={600}
              >
                Platforms
              </Link>
            </li>
            <li className="py-0.5 cursor-pointer px-4 text-[17px] mt-4  m-3 font-medium hover:text-violet-950 hover:rounded-lg hover:bg-violet-800/10 duration-100">
              <Link
                activeClass="active"
                to="pricing"
                smooth={true}
                offset={-50}
                duration={700}
              >
                Pricing
              </Link>
            </li>
          </ul>
          <img src={Shield} className="w-16 mx-auto" />
        </div>

        <div onClick={clickHandler} className="md:hidden  mr-4  ">
          {!nav ? <MenuIcon className="w-6" /> : <XIcon className="w-6" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-gray-200 w-full px-8"}>
        <li className="border-b-2 border-gray-300 w-full">
          <Link
            activeClass="active"
            onClick={clickHandler}
            to="home"
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-gray-300 w-full">
          <Link
            activeClass="active"
            onClick={clickHandler}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-gray-300 w-full">
          <Link
            activeClass="active"
            onClick={clickHandler}
            to="support"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-gray-300 w-full">
          <Link
            activeClass="active"
            onClick={clickHandler}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-gray-300 w-full">
          <Link
            activeClass="active"
            onClick={clickHandler}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Navbar;
