import React from "react";
import support from "../assets/support-team.jpg";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

export const Support = () => {
  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-zinc-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={support}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-slate-300 uppercase text-center">Support</h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            We have the right team
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-col-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-zinc-600 text-xl">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum."
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
             <p className="flex items-center text-violet-700"> Contact Us <ArrowSmRightIcon className="w-5 ml-2" /> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
