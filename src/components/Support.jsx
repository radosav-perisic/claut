import React, { useState } from "react";
import support from "../assets/support-team.jpg";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

export const Support = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    message: "",
  });

  const handleContactClick = (title) => {
    setModalTitle(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ email: "", company: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, like sending data to a server
    alert(`Message Sent!\n\nTitle: ${modalTitle}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMessage: ${formData.message}`);
    closeModal();
  };

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
            or concerns you may have.
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
            <div className="bg-slate-100 pl-8 py-4 cursor-pointer" onClick={() => handleContactClick("Sales")}>
              <p className="flex items-center text-violet-700">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
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
            <div className="bg-slate-100 pl-8 py-4 cursor-pointer" onClick={() => handleContactClick("Technical Support")}>
              <p className="flex items-center text-violet-700">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
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
            <div className="bg-slate-100 pl-8 py-4 cursor-pointer" onClick={() => handleContactClick("Media Inquiries")}>
              <p className="flex items-center text-violet-700">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-[95%]">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{modalTitle}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                />
              </div>
              <div className="flex items-center justify-between">
                <div
                  type="button"
                  className="px-4 py-2 text-red-600 font-medium rounded"
                  onClick={closeModal}
                >
                  Cancel
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
