import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout as logoutAction } from "../../actions/authActions"; // Adjust the path as necessary
import toast from "react-hot-toast";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth || {});
  const dispatch = useDispatch();

  const handleClick = () => {
    setNav(!nav);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/logout", {
        method: "GET",
        credentials: "include", // Include cookies for session
      });

      if (response.ok) {
        dispatch(logoutAction()); // Assuming your logout action clears the user state
        toast.success("Logout successful");
      } else {
        toast.error("Logout failed");
      }
    } catch (error) {
      toast.error("An error occurred during logout");
    }
  };

  return (
    <div className="w-full">
      <div className="relative bg-transparent">
        <iframe
          scrolling="no"
          style={{
            boxSizing: "border-box",
            height: "37px",
            width: "100%",
            fontSize: "7px",
          }}
          src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22largeChartUrl%22%3A%22https%3A%2F%2FcCdl%23%22%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22cCdl%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D"
          frameBorder="0"
        ></iframe>
      </div>
      <nav className="bg-none text-sm bb">
        <div className="container mx-auto px-10 w-full flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">FinanceMargin</div>

          {/* Navigation Links */}
          <div className="hidden lg:flex md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-[#ffb400] px-3 py-2 border-b-2"
                  : "text-white hover:text-indigo-600 px-3 py-2 border-b-2 font-bold border-transparent"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white border-[#ffb400] px-3 py-2 border-b-2"
                  : "text-white hover:text-indigo-600 px-3 py-2 border-b-2 font-bold border-transparent"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white border-[#ffb400] px-3 py-2 border-b-2"
                  : "text-white hover:text-indigo-600 font-bold px-3 py-2 border-b-2 border-transparent"
              }
            >
              Contact
            </NavLink>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-white hover:text-indigo-600 font-bold px-3 py-2 border-b-2 border-transparent"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/sign-up"
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-[#ffb400] px-3 py-2 border-b-2"
                    : "text-white hover:text-indigo-600 font-bold px-3 py-2 border-b-2 border-transparent"
                }
              >
                Sign up
              </NavLink>
            )}
          </div>

          {/* Hamburger Icon */}
          <div className="flex md:hidden lg:hidden">
            <div onClick={handleClick}>
              {!nav ? <FaBars color="#FFF" /> : <FaTimes color="#FFF" />}
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white flex flex-col  items-center transition-transform duration-300 ease-in-out ${
          nav ? "translate-y-[70px]" : "-translate-y-full"
        }`}
      >
        <ul className="w-full text-left text-black font-bold flex flex-col gap-4 font-exo1 px-10 py-10">
          <div className="flex justify-between items-center">
            <Link to="/" className="block py-2 ">
              Home
            </Link>
            <p className="text-[#9b9b9b] font-normal">+</p>
          </div>
          <div className="flex justify-between items-center">
            <Link to="/about" className="block py-2 ">
              About
            </Link>
            <p className="text-[#9b9b9b] font-normal">+</p>
          </div>
          <div className="flex justify-between items-center">
            <Link to="/contact" className="block py-2  ">
              Contact
            </Link>
            <p className="text-[#9b9b9b] font-normal">+</p>
          </div>
          {isAuthenticated ? (
            <div className="flex justify-between items-center">
              <button onClick={handleLogout} className="block py-2">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <Link to="/sign-up" className="block py-2 ">
                Sign Up
              </Link>
              <p className="text-[#9b9b9b] font-normal">+</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
