import React from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-300 drop-shadow-lg fixed">
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
      </div>
      <MenuIcon className='w-6'/>
    </div>
  );
};

export default Navbar;