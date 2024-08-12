import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Support } from "./components/Support";
import Notify from "./components/Notify";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ProfileModal from "./components/ProfileModal";
import { gapi } from "gapi-script";

const clientId = "846342644392-seh35r69e35ma2pu9i97pcn4c1j8qrc2.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [currentPlan, setCurrentPlan] = useState("");

  const openProfileModal = () => setShowProfileModal(true);
  const closeProfileModal = () => setShowProfileModal(false);

  const openRequestModal = (plan) => {
    setCurrentPlan(plan);
    setShowRequestModal(true);
  };
  const closeRequestModal = () => setShowRequestModal(false);

  const updateUserProfile = (profileData) => {
    setUserProfile(profileData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserProfile(null);
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        openProfileModal={openProfileModal}
        logout={logout}
      />
      <Hero />
      <About />
      <Support />
      <Notify />
      <Pricing
        isLoggedIn={isLoggedIn}
        openProfileModal={openProfileModal}
        openRequestModal={openRequestModal}
      />
      <Footer />

      <ProfileModal
        showModal={showProfileModal}
        closeModal={closeProfileModal}
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        updateUserProfile={updateUserProfile}
        setIsLoggedIn={setIsLoggedIn}
        setUserProfile={setUserProfile}
      />

      {showRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Send Subscription Request
            </h3>
            <p className="text-lg text-slate-700 mb-4">
              You are about to request to subscribe to the {currentPlan} plan.
              Please confirm by sending us a message.
            </p>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your message here..."
              rows="4"
            />
            <div className="flex items-center justify-between mt-4">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={closeRequestModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                onClick={closeRequestModal}
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
