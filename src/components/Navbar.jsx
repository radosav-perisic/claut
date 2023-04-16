import React, {useState} from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const clickHandler = () =>
     setNav(!nav)


  return (
    <div className="w-screen h-[80px] z-10 bg-gray-200 drop-shadow-lg fixed">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">Claut.</h1>
          <ul className="hidden md:flex ">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4 duration-300">
            Sign In
          </button>
          <button className="px-6 py-2 duration-300">Sign Up</button>
        </div>
        <div onClick={clickHandler} className="md:hidden  mr-4  ">
            {!nav ? <MenuIcon className="w-6" /> : <XIcon className="w-6" />}
          
        </div>
      </div>
      <ul className={!nav ? 'hidden' : "absolute bg-gray-200 w-full px-8"}>
        <li className="border-b-2 border-gray-300 w-full">Home</li>
        <li className="border-b-2 border-gray-300 w-full">About</li>
        <li className="border-b-2 border-gray-300 w-full">Support</li>
        <li className="border-b-2 border-gray-300 w-full">Platforms</li>
        <li className="border-b-2 border-gray-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
            <button className="bg-transparent text-violet-600 px-8 py-3 mb-4">Sign In</button>
            <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
