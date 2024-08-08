import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/userSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [scrolling, setScrolling] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored user from localStorage:", storedUser); // Debugging line
    if (storedUser) {
      dispatch(updateUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);
  const handleLogout = () => {
    useDispatch(logoutRedux());
    toast("Logout successfully");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`px-6 w-full sticky top-0 z-[99999] ${
        scrolling ? "" : "bg-[#01071C]  backdrop-blur-lg"
      }`}
    >
      <i className="mr-1 fa fa-clock"></i>

      <main
        className={`ease-soft-in-out   h-full  rounded-xl transition-all duration-200  sticky top-[1%]  bg-[#01071C]  
         backdrop-blur-lg  shadow-md shadow-[#191e31] z-[110] `}
      >
        <nav
          className={`relative flex  flex-wrap items-center justify-between px-0 py-1  mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start`}
        >
          {" "}
          <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
            <nav>
              <h1 className="font-medium capitalize text-slate-200">
                {" "}
                Welcome, {user?.fullName || ""}
              </h1>
              <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <li className="leading-normal text-sm">
                  <a className="opacity-50 text-slate-200" href="">
                    Pages
                  </a>
                </li>
                <li
                  className="text-sm pl-2 capitalize leading-normal text-slate-200 before:float-left before:pr-2 before:text-gray-200 before:content-['/']"
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>

              <h6 className="mb-0 font-bold text-[#ffb400] capitalize">
                Dashboard
              </h6>
            </nav>

            <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
              <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                <li className="flex items-center ">
                  {/*  <a
                    className="inline-block px-8 py-2 mb-0 mr-4 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro border-fuchsia-500 ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs text-fuchsia-500 hover:border-fuchsia-500 active:bg-fuchsia-500 active:hover:text-fuchsia-500 hover:text-fuchsia-500 tracking-tight-soft hover:bg-transparent hover:opacity-75 hover:shadow-none active:text-white active:hover:bg-transparent"
                    target="_blank"
                    href="/signin"
                  >
                    {userData.firstName ? (
                      <span
                        className="cursor-pointer  text-black  "
                        onClick={handleLogout}
                      >
                        <Link to={"/"} className="text-black  cursor-pointer ">
                          Logout
                        </Link>
                      </span>
                    ) : (
                      <Link
                        to={"/signin"}
                        className="text-black  cursor-pointer "
                      >
                        Login
                      </Link>
                    )}
                    </a> */}
                </li>

                <li
                  aria-controls="sidebar"
                  onClick={(e) => {
                    e.stopPropagation();
                    props.setSidebarOpen(!props.sidebarOpen);
                  }}
                  className="flex items-center pl-4 lg:hidden  "
                >
                  <a
                    href="javascript:;"
                    className="block p-0 transition-all ease-nav-brand text-sm text-slate-300"
                  >
                    <div className="w-4.5 overflow-hidden">
                      <i
                        className={`ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-300 transition-all ${
                          !props.sidebarOpen && "!w-full delay-300"
                        }`}
                      ></i>
                      <i
                        className={`ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-300 transition-all ${
                          !props.sidebarOpen && "!w-full delay-300"
                        }`}
                      ></i>
                      <i
                        className={`ease-soft relative block h-0.5 rounded-sm bg-slate-300 transition-all ${
                          !props.sidebarOpen && "!w-full delay-300"
                        }`}
                      ></i>
                    </div>
                  </a>
                </li>
                <li className="flex items-center px-4">
                  <a
                    href="javascript:;"
                    className="p-0 transition-all text-sm ease-nav-brand text-slate-300"
                  >
                    <i className="cursor-pointer fa fa-cog"></i>
                  </a>
                </li>

                <li className="relative flex items-center pr-2">
                  <p className="hidden transform-dropdown-show"></p>
                  <a
                    href="javascript:;"
                    className="block p-0 transition-all text-sm ease-nav-brand text-slate-300"
                    aria-expanded="false"
                  >
                    <i className="cursor-pointer fa fa-bell"></i>
                  </a>

                  <ul className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">
                    <li className="relative mb-2">
                      <a
                        className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors"
                        href="javascript:;"
                      >
                        <div className="flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/team-2.jpg"
                              className="inline-flex items-center justify-center mr-4 text-white text-sm h-9 w-9 max-w-none rounded-xl"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-1 font-normal leading-normal text-sm">
                              <span className="font-semibold">New message</span>{" "}
                              from Laur
                            </h6>
                            <p className="mb-0 leading-tight text-xs text-slate-400">
                              <i className="mr-1 fa fa-clock"></i>
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="relative mb-2">
                      <a
                        className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                        href="javascript:;"
                      >
                        <div className="flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/small-logos/logo-spotify.svg"
                              className="inline-flex items-center justify-center mr-4 text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 h-9 w-9 max-w-none rounded-xl"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-1 font-normal leading-normal text-sm">
                              <span className="font-semibold">New album</span>{" "}
                              by Travis Scott
                            </h6>
                            <p className="mb-0 leading-tight text-xs text-slate-400">
                              <i className="mr-1 fa fa-clock"></i>1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="relative">
                      <a
                        className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                        href="javascript:;"
                      >
                        <div className="flex py-1">
                          <div className="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-sm bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>credit-card</title>
                              <g stroke="none" fill="none">
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      ></path>
                                      <path
                                        className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-1 font-normal leading-normal text-sm">
                              Payment successfully completed
                            </h6>
                            <p className="mb-0 leading-tight text-xs text-slate-400">
                              2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
};

Header.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Header;
