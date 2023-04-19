import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-[#140e25] absolute mix-blend-overlay">
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">Find the perfect price for your research</h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure
            quod voluptate inventore fugit fuga perferendis exercitationem
            voluptatibus consequatur. Harum quisquam est labore, possimus
            dignissimos numquam quasi repudiandae earum iusto.
          </p>
        </div>
<div className="grid md:grid-cols-2">
        <div className=" bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="py-1 px-3 uppercase bg-violet-200 text-purple-900 rounded-2xl text-sm">Standard</span>
            <div>
                <p className="text-6xl flex py-4 font-bold">$38<span className="flex flex-col text-xl text-slate-500 justify-end">/mo</span></p>
            </div>
            <p className="text-2xl py-8 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="text-2xl relative">
                <p className="flex py-4 "><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p className="flex py-4 "><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p className="flex py-4 "><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p className="flex py-4 "><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p className="flex py-4 "><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <button className="w-full py-4 my-4 duration-300">Subscribe</button>
            </div>
        </div>
        <div className=" bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="py-1 px-3 uppercase bg-violet-200 text-purple-900 rounded-2xl text-sm">Premium</span>
            <div>
                <p className="text-6xl flex py-4 font-bold">$78<span className="flex flex-col text-xl text-slate-500 justify-end">/mo</span></p>
            </div>
            <p className="text-2xl py-8 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="text-2xl relative">
                <p className="flex py-4 "><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p className="flex py-4 "><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p className="flex py-4 "><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p className="flex py-4 "><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p className="flex py-4 "><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <button className="w-full py-4 my-4 duration-300">Subscribe</button>
            </div>
        </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Pricing;
