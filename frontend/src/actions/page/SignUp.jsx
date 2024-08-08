import { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { apiBaseUrl } from "../config";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform client-side validation if needed

    // Make the registration request
    axios
      .post(`${apiBaseUrl}/signup`, {
        password,
        confirmPassword,
        firstName,
        lastName,
        email,
        country: selectedCountry,
      })
      .then(() => {
        console.log("Registration successful");
        Swal.fire("Success", "Registration successful", "success"); // Display success message
        navigate("/signin"); // Navigate to the login page
      })

      .catch((error) => {
        // Handle registration error
        console.error("Registration failed:", error.response.data.error);
        setError(error.response.data.error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex bg-black flex-col md:flex-row justify-center items-center py-10">
        <div className="md:basis-1/2 self-stretch order-2 md:order-1 md:mb-5">
          <form
            onSubmit={handleSubmit}
            className="form w-full md:w-full px-4 md:px-12 py-8"
            action="/u/signup"
            method="POST"
          >
            <div className="my-6 text-center">
              <h3 className="inline-block font-semibold text-3xl text-slate-50 my-1">
                Sign Up
              </h3>
            </div>

            <div className="grid grid-cols-12 gap-3 md:gap-4">
              <div className="col-span-12">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                  placeholder="First Name"
                  className="bg-transparent border text-slate-50 font-semibold text-sm px-4 mt-1 focus:ring-rose-300/90 focus:border-rose-300/90 block w-full h-12 md:h-10 shadow-sm border-gray-300 transition duration-300 rounded-full"
                />
              </div>
              <div className="col-span-12">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={handleLastNameChange}
                  name="lastName"
                  required
                  className="bg-transparent border text-slate-50 font-semibold text-sm px-4 mt-1 focus:ring-rose-300/90 focus:border-rose-300/90 block w-full h-12 md:h-10 shadow-sm border-gray-300 transition duration-300 rounded-full"
                />
              </div>
              <div className="col-span-12">
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleEmailChange}
                  name="email"
                  required
                  className="bg-transparent border text-slate-50 font-semibold text-sm px-4 mt-1 focus:ring-rose-300/90 focus:border-rose-300/90 block w-full h-12 md:h-10 shadow-sm border-gray-300 transition duration-300 rounded-full"
                />
              </div>

              <div className="col-span-12">
                <select
                  id="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  required
                  className="bg-transparent border text-slate-50 font-semibold text-sm px-4 mt-1 focus:ring-rose-300/90 focus:border-rose-300/90 block w-full h-12 md:h-10 shadow-sm border-gray-300 transition duration-300 rounded-full"
                >
                  <option value="">Select Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-12 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  name="password"
                  onChange={handlePasswordChange}
                  required
                  placeholder="Password"
                  className="bg-transparent border text-slate-50 font-semibold text-sm px-4 mt-1 focus:ring-rose-300/90 focus:border-rose-300/90 block w-full h-12 md:h-10 shadow-sm border-gray-300 transition duration-300 rounded-full"
                />
                <button
                  type="button"
                  className="absolute top-1/2 outline-none right-2 transform -translate-y-1/2 text-gray-500"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
              <div className="col-span-12 relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  name="confirmPassword"
                  required
                  placeholder="Confirm Password"
                  className="bg-transparent border text-slate-50 font-semibold text-sm px-4 mt-1 focus:ring-rose-300/90 focus:border-rose-300/90 block w-full h-12 md:h-10 shadow-sm border-gray-300 transition duration-300 rounded-full"
                />
                <button
                  type="button"
                  className="absolute top-1/2 outline-none right-2 transform -translate-y-1/2 text-gray-500"
                  onClick={toggleShowConfirmPassword}
                >
                  {showConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
              <div className="col-span-12">
                <button
                  id="submit-btn"
                  type="submit"
                  className="flex justify-between items-center w-full text-black font-semibold py-3 px-8 bg-white text-sm transition-all my-2 rounded-full"
                >
                  Sign Up
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
                </button>
              </div>
              <div className="col-span-12">
                <p className="text-sm font-medium text-gray-200">
                  Have An Account?{" "}
                  <a className="text-rose-500" href="/signin">
                    Sign In
                  </a>
                </p>
                {error && <p>{error}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
