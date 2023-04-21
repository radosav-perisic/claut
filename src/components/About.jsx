import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            We've Earned the Trust of Developers Worldwide
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Our dedication to providing top-notch cloud management services has
            earned the trust of developers around the world. We take pride in
            our commitment to excellence and look forward to continuing to serve
            our customers with the highest level of professionalism and
            expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl shadow-black/20">
            <p className="text-6xl font-bold text-violet-800">100%</p>
            <p className="text-gray-500 font-medium mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl  shadow-black/20">
            <p className="text-6xl font-bold text-violet-800">24/7</p>
            <p className="text-gray-500 font-medium mt-2">Accessibility</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl shadow-black/20">
            <p className="text-6xl font-bold text-violet-800">100K</p>
            <p className="text-gray-500 font-medium mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
