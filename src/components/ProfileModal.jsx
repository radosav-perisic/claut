import React, { useState, useEffect } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { XIcon } from "@heroicons/react/outline";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";
import { gapi } from "gapi-script";
import shield from '../assets/shield.png';

const clientId = "846342644392-seh35r69e35ma2pu9i97pcn4c1j8qrc2.apps.googleusercontent.com";

const ProfileModal = ({ showModal, closeModal, isLoggedIn, userProfile, updateUserProfile, logout }) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    company: "",
    address: "",
  });

  const [showLoginOptions, setShowLoginOptions] = useState(!isLoggedIn);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  useEffect(() => {
    if (userProfile) {
      setFormData({
        firstName: userProfile.firstName || "",
        lastName: userProfile.lastName || "",
        email: userProfile.email || "",
        phone: userProfile.phone || "",
        company: userProfile.company || "",
        address: userProfile.address || "",
        password: "", 
        confirmPassword: ""
      });
    }
  }, [userProfile]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleLoginSuccess = async (response) => {
    const profile = response.profileObj;
    const data = {
      firstName: profile.givenName,
      lastName: profile.familyName,
      email: profile.email,
      password: "", 
      confirmPassword: "", 
      phone: "",
      company: "",
      address: "",
    };

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/register`, data);
      updateUserProfile(data);
      closeModal();
    } catch (err) {
      console.error("Registration failed:", err.response ? err.response.data : err.message);
    }
  };

  const handleLoginFailure = (response) => {
    console.error("Google login failed:", response);
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    logout();
    closeModal();
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/profile`, formData); 
      updateUserProfile(formData); 
      closeModal();
    } catch (err) {
      console.error("Profile update failed:", err.response ? err.response.data : err.message);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
        email: formData.email,
        password: formData.password,
      });
      updateUserProfile(res.data.user);
      closeModal();
    } catch (err) {
      console.error("Login failed:", err.response ? err.response.data : err.message);
      alert("Login failed: " + (err.response ? err.response.data.message : err.message));
    }
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
        <div
          className="bg-white p-6 rounded-lg max-w-lg w-full relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Background Image */}
          <div
            style={{
              backgroundImage: `url(${shield})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.2, // Adjust the opacity here
              zIndex: -1, // Ensure the image stays behind the content
            }}
          />

          <div className="relative z-10"> {/* Ensures the form content is above the background image */}
            <div className="absolute top-3 right-3 text-gray-700 hover:text-gray-900" onClick={closeModal}>
              <XIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {isLoggedIn && !showLoginOptions ? "Edit Your Profile" : "Account Options"}
            </h3>

            {showLoginOptions && !isLoggedIn ? (
              <div>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login with Google"
                  onSuccess={handleLoginSuccess}
                  onFailure={handleLoginFailure}
                  cookiePolicy={"single_host_origin"}
                  render={(renderProps) => (
                    <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled} />
                  )}
                />
                <p className="text-center mt-4 text-gray-700">or</p>
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
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <button
                  onClick={handleLoginSubmit}
                  className="mt-4 w-full px-4 py-2 bg-purple-700 text-white hover:text-white rounded hover:bg-purple-600"
                >
                  Login
                </button>
                <p className="text-center mt-4 text-gray-700">or</p>
                <button
                  onClick={() => setShowLoginOptions(false)}
                  className="mt-4 w-full px-4 py-2 bg-purple-700 text-white hover:text-white rounded hover:bg-purple-600"
                >
                  Create Account
                </button>
              </div>
            ) : isLoggedIn && !showLogoutConfirmation && showLoginOptions ? (
              <div>
                <button
                  onClick={() => setShowLoginOptions(false)}
                  className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              showLogoutConfirmation && (
                <div className="text-center">
                  <p className="mb-4 text-gray-700">Are you sure you want to log out?</p>
                  <div className="flex justify-between">
                    <button
                      onClick={cancelLogout}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmLogout}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )
            )}

            {!showLoginOptions && (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
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
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                    Address (Optional)
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ProfileModal;
