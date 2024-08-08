import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/userSlice";
import { apiBaseUrl } from "../config";

const Header = ({ toggleNav, navOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => setShowNotifications(!showNotifications);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await fetch(`${apiBaseUrl}/user`, {
            method: "GET",
            headers: {
              "auth-token": localStorage.getItem("token"),
            },
          });
          const data = await response.json();
          if (response.ok) {
            dispatch(updateUser(data));
          } else {
            console.error(data.message);
          }
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [dispatch]);

  return (
    <div className="relative  z-20 font-grotesque h-16 md:h-14 flex items-center justify-between px-4">
      <div className="basis-full text-base font-bold text-black">
        <div className="flex items-center space-x-2">
          <a className="flex items-center space-x-1" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 text-black hover:text-black cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black hover:text-amber-300 mr-1 cursor-pointer"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </a>
          <p>{userData.firstName}</p>
        </div>
      </div>

      <div className="z-10 flex items-center space-x-2">
        <div id="notifications-button" onClick={toggleNotifications}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-black cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>
        </div>

        <div>
          <svg
            id="open-button"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 md:h-8 md:w-8 md:mr-2 text-black-100 cursor-pointer p-2 md:p-1 text-black z-10"
            onClick={toggleNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            id="close-button"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-10 h-10 md:h-8 md:w-8 md:mr-2 text-black-100 cursor-pointer p-2 md:p-1 text-black/90 z-10 ${
              navOpen ? "" : "hidden"
            }`}
            onClick={toggleNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      {showNotifications && (
        <div
          id="notifications"
          className="absolute top-12 right-14 w-80 bg-white rounded-md border border-gray-400 p-3"
        >
          <div className="flex items-center justify-between">
            <p className="text-black font-semibold text-lg">Notifications</p>
            <a
              className="text-blue-400 hover:text-blue-500 transition-all font-semibold text-base"
              href="/account/notifications"
            >
              View all
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  navOpen: PropTypes.bool.isRequired,
};

export default Header;
