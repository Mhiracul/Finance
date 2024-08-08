import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { IoIosArrowRoundDown } from "react-icons/io";
import { apiBaseUrl } from "../config";

const Navigation = ({ navOpen }) => {
  const handleLogout = async () => {
    try {
      // Perform logout API request
      const response = await fetch(`${apiBaseUrl}/logout`, {
        method: "GET",
        credentials: "same-origin", // Ensure credentials include cookies if any
      });

      if (response.ok) {
        // Successful logout
        toast.success("Logged out successfully"); // Show success toast
        setTimeout(() => {
          window.location.href = "/"; // Redirect after a delay (optional)
        }, 2000); // Redirect after 2 seconds (2000 milliseconds)
      } else {
        // Handle logout error
        console.error("Logout failed:", response.statusText);
        toast.error("Logout failed. Please try again."); // Show error toast
      }
    } catch (error) {
      console.error("Logout failed:", error.message);
      toast.error("Logout failed. Please try again."); // Show error toast
    }
  };

  return (
    <nav
      id="nav"
      className={`nav flex-col h-screen text-xs py-12 px-6 absolute top-0 right-0 bg-white p-5 shadow-lg ${
        navOpen ? "block" : "hidden"
      }`}
    >
      <div className="mt-10 space-y-3 font-grotesque flex flex-col items-end justify-between text-gray-600 text-xs md:text-xs font-semibold">
        <a
          href="/account/dashboard"
          className="bg-gray-900 text-white  border border-amber-50/90 transition-all flex items-center py-2 px-4 rounded-xl ml-2"
        >
          Dashboard
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
            />
          </svg>
        </a>
        <a
          href="/account/fund-account"
          className="bg-black text-white border cursor-pointer text-xs border-amber-50/90 transition-all flex items-center py-2 px-4 rounded-xl ml-2"
        >
          {" "}
          Fund Wallet
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12.75V12a7.5 7.5 0 00-7.5-7.5A7.5 7.5 0 004.5 12v.75M6.75 15.75v1.5a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 001.5-1.5v-1.5m-4.5 0v1.5m0-1.5v-1.5a4.5 4.5 0 119 0v1.5m-4.5 0v1.5m4.5 0h-4.5m0 0v1.5m0-1.5h4.5m0 0v-1.5a4.5 4.5 0 00-4.5-4.5v1.5"
            />
          </svg>
        </a>

        <a
          href="/account/withdraw"
          className="bg-black text-white border text-xs border-amber-50/90 transition-all flex items-center py-2 px-4 rounded-xl ml-2"
        >
          {" "}
          Withdraw
          <IoIosArrowRoundDown size={20} />
        </a>
        <a
          href="/account/deposits"
          className="bg-black text-white border text-xs border-amber-50/90 transition-all flex items-center py-2 px-4 rounded-xl ml-2"
        >
          {" "}
          Deposits
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white/80 w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>{" "}
        </a>
        <a
          href="/account/withdrawal"
          className="bg-black text-white border text-xs border-amber-50/90 transition-all flex items-center py-2 px-4 rounded-xl ml-2"
        >
          {" "}
          Withdrawals
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white/80 w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>{" "}
        </a>
        <a
          href="/account/notifications"
          className="bg-gray-900 text-white border border-amber-50/90 transition-all flex items-center py-2 px-4 rounded-xl ml-2"
        >
          Notifications
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white/80 w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </a>
        <a
          href="/account/link-wallet/"
          className="text-white bg-gray-900 flex items-center text-xs border-2 border-black py-2 px-4 rounded-xl ml-2 transition-all hover:text-amber-300"
        >
          Link Wallet
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white/80 w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </a>
        <a
          href="https://uphold.com"
          className="bg-gray-900 text-white flex items-center text-xs border-2 border-black py-2 px-4 rounded-xl ml-2 transition-all hover:text-amber-300"
        >
          Buy ISO Assets
          <img
            className="w-5 h-5 bg-white rounded-full p-0.5  ml-2"
            src="/xlm.svg"
            alt=""
          />
        </a>
        <a
          href="/account/profile/"
          className="bg-gray-900 text-white flex items-center text-xs border-2 border-black py-2 px-4 rounded-xl ml-2 transition-all hover:text-amber-300"
        >
          Profile
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white/80 w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </a>
        <a
          href="#"
          onClick={handleLogout}
          className="text-white bg-red-500 transition-all flex items-center py-2 px-4 rounded-xl ml-2"
        >
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navigation;
