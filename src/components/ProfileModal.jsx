import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import { XIcon } from "@heroicons/react/outline";

const clientId = "846342644392-seh35r69e35ma2pu9i97pcn4c1j8qrc2.apps.googleusercontent.com";

const ProfileModal = ({
  showModal,
  closeModal,
  isLoggedIn,
  setIsLoggedIn,
  userProfile,
  setUserProfile,
  updateUserProfile,
}) => {
  const [formData, setFormData] = useState(userProfile || {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const profileData = {
      ...formData,
    };

    updateUserProfile(profileData);
    closeModal();
  };

  const handleLoginSuccess = (response) => {
    const profile = response.profileObj;
    const profileData = {
      firstName: profile.givenName,
      lastName: profile.familyName,
      email: profile.email,
      googleId: profile.googleId,
    };

    setUserProfile(profileData);
    setIsLoggedIn(true);
    setShowLoginOptions(false);
  };

  const handleLoginFailure = (response) => {
    console.error("Login failed:", response);
  };

  const handleLogoutSuccess = () => {
    setUserProfile(null);
    setIsLoggedIn(false);
  };

  return (
    showModal && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={closeModal} 
      >
        <div
          className="bg-white p-6 rounded-lg max-w-lg w-full relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
            onClick={closeModal}
          >
            <XIcon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            {isLoggedIn || !showLoginOptions ? "Create or Update Your Profile" : "Login to Your Account"}
          </h3>

          {showLoginOptions && !isLoggedIn ? (
            <div>
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                  <GoogleLoginButton onClick={renderProps.onClick} />
                )}
              />
              <TwitterLoginButton onClick={() => console.log("Twitter login clicked")} />
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
                onClick={() => console.log("Email login clicked")}
                className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Login
              </button>
              <p className="text-center mt-4 text-gray-700">or</p>
              <button
                onClick={() => setShowLoginOptions(false)}
                className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Create Account
              </button>
            </div>
          ) : (
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
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
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
          {isLoggedIn && (
            <div className="mt-4">
              <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={handleLogoutSuccess}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Logout
                  </button>
                )}
              />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default ProfileModal;
