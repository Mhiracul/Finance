import { toast } from "react-toastify";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { apiBaseUrl } from "../config";
import { useNavigate } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { loginRedux } from "../redux/userSlice";
import PropTypes from "prop-types";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");
    if (storedEmail && storedPassword) {
      setFormData({
        email: storedEmail,
        password: storedPassword,
      });
      setRememberMe(true);
    }
  }, []);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setButtonClicked(true);

    const { email, password } = formData;

    if (email && password) {
      try {
        const response = await fetch(`${apiBaseUrl}/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const dataRes = await response.json();
        toast(dataRes.message);

        if (dataRes.alert) {
          localStorage.setItem("token", dataRes.token);
          dispatch(loginRedux(dataRes));

          if (rememberMe) {
            localStorage.setItem("rememberedEmail", email);
            localStorage.setItem("rememberedPassword", password);
          } else {
            localStorage.removeItem("rememberedEmail");
            localStorage.removeItem("rememberedPassword");
          }

          setTimeout(async () => {
            // Fetch the role using the GET /login route
            const token = localStorage.getItem("token");
            const loginResponse = await fetch(`${apiBaseUrl}/login`, {
              method: "GET",
              headers: {
                "auth-token": token,
              },
            });

            const loginData = await loginResponse.json();

            if (loginData.role === "admin") {
              navigate("/dashboards");
            } else {
              navigate("/account/dashboard");
            }
          }, 1000);
        } else {
          if (dataRes.message === "Your account has been suspended") {
            navigate("/error", {
              state: {
                message: "Your account has been suspended.",
              },
            });
          } else {
            toast.error(dataRes.message);
            setFormData({ email: "", password: "" });
          }
        }
      } catch (error) {
        console.error("Failed to login:", error);
        toast.error("Failed to login");
        setFormData({ email: "", password: "" });
      }
    } else {
      alert("Please enter required fields");
    }

    setIsLoading(false);
    setButtonClicked(false);
  };
  return (
    <div>
      <Navbar />
      <div className="flex bg-black flex-col md:flex-row justify-center items-center py-10">
        <div className="md:basis-1/2 self-stretch order-2 md:order-1 md:mb-5">
          <SignInForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleShowPassword={handleShowPassword}
            showPassword={showPassword}
            rememberMe={rememberMe}
            handleCheckboxChange={handleCheckboxChange}
            isLoading={isLoading}
            buttonClicked={buttonClicked}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const SignInForm = ({
  formData,
  handleChange,
  handleSubmit,
  handleShowPassword,
  showPassword,
  rememberMe,
  handleCheckboxChange,
  isLoading,
  buttonClicked,
}) => (
  <form
    onSubmit={handleSubmit}
    className="form w-full md:w-full px-4 md:px-12 py-8"
  >
    <div className="my-6 text-center">
      <h3 className="inline-block font-semibold text-3xl text-slate-50 my-1">
        Sign In
      </h3>
    </div>

    <div className="grid grid-cols-12 gap-3 md:gap-4">
      <FormInput
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email address"
      />
      <PasswordInput
        name="password"
        value={formData.password}
        onChange={handleChange}
        showPassword={showPassword}
        handleShowPassword={handleShowPassword}
      />
      <div className="col-span-12">
        <div className="flex items-center justify-between">
          <Checkbox
            id="remember-checkbox"
            checked={rememberMe}
            onChange={handleCheckboxChange}
            label="Remember me"
          />
          <p className="text-sm font-medium text-gray-400 my-2 tracking-tight">
            <a className="text-rose-500" href="/u/forgot">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
      <SubmitButton
        isLoading={isLoading}
        buttonClicked={buttonClicked}
        text="Sign In"
      />
      <div className="col-span-12">
        <p className="text-sm font-medium text-gray-200">
          Don{"'"}t Have An Account?{" "}
          <a className="text-rose-500" href="/u/signup">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  </form>
);

const FormInput = ({ type, name, value, onChange, placeholder }) => (
  <div className="col-span-12">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="bg-transparent  border  text-slate-50 font-semibold text-sm px-4 mt-1 focus:ring-rose-300/90 focus:border-rose-300/90 block w-full h-12 md:h-10 shadow-sm border-gray-300 transition duration-300 rounded-full"
    />
  </div>
);

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const PasswordInput = ({
  name,
  value,
  onChange,
  showPassword,
  handleShowPassword,
}) => (
  <div className="col-span-12 relative">
    <input
      type={showPassword ? "text" : "password"}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder="Password"
      className="bg-transparent  border  text-slate-50 font-semibold text-sm px-4 mt-1 focus:ring-rose-300/90 focus:border-rose-300/90 block w-full h-12 md:h-10 shadow-sm border-gray-300 transition duration-300 rounded-full"
    />
    <span
      className="absolute top-1/2 outline-none right-2 transform -translate-y-1/2 text-gray-500"
      onClick={handleShowPassword}
    >
      {showPassword ? <BiShow color="#333" /> : <BiHide color="#333" />}
    </span>
  </div>
);

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  handleShowPassword: PropTypes.func.isRequired,
};

const Checkbox = ({ id, checked, onChange, label }) => (
  <div>
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 text-rose-500 bg-white border-gray-300 rounded focus:ring-rose-500 focus:ring-2"
    />
    <label
      htmlFor={id}
      className="ml-1 text-sm font-medium text-gray-200 tracking-tight"
    >
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,

  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

const SubmitButton = ({ isLoading, buttonClicked, text }) => (
  <div className="col-span-12">
    <button
      type="submit"
      className="flex justify-between items-center w-full text-black font-semibold py-3 px-8 bg-white text-sm transition-all my-2 rounded-full"
      disabled={buttonClicked}
    >
      {isLoading ? (
        <ClipLoader color="#000" loading={isLoading} size={20} />
      ) : (
        <>
          {text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </>
      )}
    </button>
  </div>
);

SubmitButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  buttonClicked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

SignInForm.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleShowPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  buttonClicked: PropTypes.bool.isRequired,
};

export default SignIn;
