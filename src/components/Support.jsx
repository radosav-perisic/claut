import React from "react";
import support from "../assets/support-team.jpg";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

export const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-zinc-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={support}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            We have the right team
          </h3>
          <p className="text-center font-medium text-lg">
            Our support team is comprised of knowledgeable and dedicated
            professionals who are committed to providing exceptional service to
            our customers. With years of experience and a deep understanding of
            our platform, they are well-equipped to help you with any questions
            or concerns you may have
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-zinc-600 text-xl">
                Interested in learning more about how our platform can benefit
                your organization? Our sales team is here to provide you with
                all the information you need to make an informed decision. Get
                in touch with us today to schedule a consultation.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-violet-700">
                {" "}
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />{" "}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-zinc-600 text-xl pb-6">
                Our technical support team is available 24/7 to help you with
                any issues you might encounter while using our platform. Contact
                us through our support center, and we'll work together to solve
                the problem quickly.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-violet-700">
                {" "}
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />{" "}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-zinc-600 text-xl pb-20">
                Need to get in touch with us for a media-related inquiry? Our
                team is always here to assist you. Just fill out the contact
                form and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-violet-700">
                {" "}
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
