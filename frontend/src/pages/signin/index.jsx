import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../component/features/auth/authSlice";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../component/sidebar";

const SignIn = () => {
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      if (auth.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/kyc");
      }
    }
  }, [auth.isAuthenticated, auth.user, navigate]);

  const { loading, error, status } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData));

    try {
      const response = await fetch("http://localhost:4000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        setSuccess("Login successful");
        const token = data.token;
        localStorage.setItem("auth", token); // Store token in local storage
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { token, user: data.data },
        }); // Update auth state
        if (data.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dash");
        }
      } else {
        console.error("Login failed:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="w-[100%] flex">
        <Sidebar
          heading={`Welcome Back!`}
          sizeClass={`w-[62%] mx-auto absolute bottom-0 `}
        />
        <div className="w-[100%] flex items-center justify-center min-h-screen bg-white">
          <div className="bg-white p-8 rounded-lg w-full max-w-[85%]">
            <h2 className="text-3xl font-bold mb-6">Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-[70%] transform -translate-y-1/2 cursor-pointer"
                />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-[#2544D8] transition-all duration-700 text-white p-2 rounded mt-4 hover:bg-blue-600"
              >
                {status === "loading" ? "Signing in..." : "Sign In"}
              </button>
              <div className="mt-4">
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="mt-2">
                <p className="text-gray-700">
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="text-blue-600 hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {status === "succeeded" && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white text-[#2544D8] p-8 rounded-lg shadow-lg text-center">
                <img src="" alt="Blue_Tick_For_Validation" className="m-auto" />
                <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                <p className="mb-4 text-gray-700">Sign in Complete.</p>
                <Link to="/">
                  <button className="bg-[#2544D8] text-white p-2 px-9 rounded hover:bg-blue-600">
                    Start Shopping
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(SignIn);
