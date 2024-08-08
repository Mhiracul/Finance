import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../component/sidebar";

const ForgotPassword = () => {
  const initialFormData = {
    email: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch(
        "http://localhost:4000/api/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setSuccess("Password reset link sent to your email");
        setFormData(initialFormData);
      } else {
        setError(data.message || "Failed to send password reset link");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  return (
    <>
      <div className="w-[100%] flex">
        <Sidebar
          heading={`Reset Your Password`}
          sizeClass={`w-[67%] mx-auto absolute bottom-0`}
        />
        <div className="w-[100%] flex items-center justify-center min-h-screen bg-white">
          <div className="bg-white p-8 rounded-lg w-full max-w-[85%]">
            <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute right-2 top-[70%] transform -translate-y-1/2"
                />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && <p className="text-green-500 mb-4">{success}</p>}
              <button
                type="submit"
                className="w-full bg-[#ffb400] shadow-custom transition-all duration-700 text-black p-2 rounded mt-4 hover:bg-[#b78c27]"
              >
                Send Reset Link
              </button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/sign-in" className="text-blue-500">
                Remembered your password? Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
