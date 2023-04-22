import React from "react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-[#140e25] absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            Find the perfect price for your research
          </h3>
          <p className="text-3xl">
            Our pricing plans are designed to fit the needs of researchers of
            all sizes. Choose from our flexible monthly or annual plans, or
            contact us to discuss a custom plan that fits your specific research
            needs. With our transparent pricing and no hidden fees, you can
            trust that you're getting the perfect price for your research.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className=" bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="py-1 px-3 uppercase bg-violet-200 text-purple-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-6xl flex py-4 font-bold">
                $38
                <span className="flex flex-col text-xl text-slate-500 justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
            Affordable cloud management services
            </p>
            <div className="text-2xl relative">
              <p className="flex py-4 ">
                <CheckIcon className="w-8 text-green-800 mr-5" />
                Basic features included
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-8 text-yellow-500 mr-5" />
                Limited number of API calls
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-8 text-yellow-500 mr-5" />
                Email support only
              </p>
              <p className="flex py-4 ">
                <XIcon className="w-8 text-red-800 mr-5" />
                No data encryption
              </p>
              <p className="flex py-4 ">
                <XIcon className="w-8 text-red-800 mr-5" />
                No custom branding
              </p>
              <button className="w-full py-4 my-4 duration-300">
                Subscribe
              </button>
            </div>
          </div>
          <div className=" bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="py-1 px-3 uppercase bg-violet-200 text-purple-900 rounded-2xl text-sm">
              Premium
            </span>
            <div>
              <p className="text-6xl flex py-4 font-bold">
                $78
                <span className="flex flex-col text-xl text-slate-500 justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
            Comprehensive cloud management services
            </p>
            <div className="text-2xl relative">
              <p className="flex py-4 text-xl">
                <CheckIcon className="w-8 text-green-800 mr-5" />
                Advanced features included
              </p>
              <p className="flex py-4 text-xl">
                <CheckIcon className="w-8 text-green-800 mr-5" />
                Unlimited API calls
              </p>
              <p className="flex py-4 text-xl">
                <CheckIcon className="w-8 text-green-800 mr-5" />
                24/7 multi-language support
              </p>
              <p className="flex py-4 text-xl">
                <CheckIcon className="w-8 text-green-800 mr-5" />
                Data encryption included
              </p>
              <p className="flex py-4 text-xl">
                <CheckIcon className="w-8 text-green-800 mr-5" />
                Custom branding available
              </p>
              <button className="w-full py-4 my-4 duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
