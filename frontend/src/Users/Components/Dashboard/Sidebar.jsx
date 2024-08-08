import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logoutRedux, updateUser } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { FaBox, FaCopy, FaPiggyBank } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineSettingsApplications } from "react-icons/md";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);
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

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`fixed left-0 top-0 z-[999999] flex flex-col h-screen w-72 overflow-y-hidden bg-[#01071C] text-slate-200 shadow-md shadow-[#272f4f] duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen
          ? "translate-x-0 ml-4 my-4 rounded-2xl shadow-lg shadow-[#ccc]"
          : "-translate-x-full overflow-y-auto"
      }`}
    >
      <div className="flex flex-col flex-grow">
        <div className="max-w-62.5 overflow-hidden ease-nav-brand z-[990] fixed inset-y-0 my-4 ml-4 block w-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
          <div className="h-14">
            <div className="lg:hidden">
              <i
                ref={trigger}
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-controls="sidebar"
                aria-expanded={sidebarOpen}
                className="absolute top-0 right-0 block p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 lg:hidden"
              ></i>
            </div>
            <a
              className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-300"
              href=""
              target="_blank"
            >
              <span className="ml-1 font-bold font-exo1 text-xl transition-all duration-200 ease-nav-brand">
                Finance Margin
              </span>
            </a>
          </div>

          <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

          <div className="items-center block w-auto flex-grow mt-10 max-h-screen overflow-auto h-sidenav  basis-full">
            <ul className="flex flex-col gap-6 pl-0 mb-0">
              <li className="mt-0.5 w-full">
                <Link
                  className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-end  whitespace-nowrap rounded-lg  px-4 font-semibold text-slate-200 transition-colors"
                  to="/dash"
                >
                  <div className="bg-gradient-to-tl from-[#ffb400] to-[#926704] shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                    <svg
                      width="12px"
                      height="12px"
                      viewBox="0 0 45 40"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>shop</title>
                      <g stroke="none" fill="none">
                        <g
                          transform="translate(-1716.000000, -439.000000)"
                          fill="#FFFFFF"
                        >
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(0.000000, 148.000000)">
                              <path
                                className="opacity-60"
                                d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"
                              ></path>
                              <path
                                className=""
                                d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                    Dashboard
                  </span>
                </Link>
              </li>

              <li className="mt-1.5 w-full">
                <Link
                  className="py-2.7 text-sm font-semibold ease-nav-brand my-0 mx-4 flex items-center text-slate-200  whitespace-nowrap px-4 transition-colors"
                  to="/fund-wallet"
                >
                  <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg  bg-center stroke-0 text-center xl:p-2.5">
                    <FaPiggyBank />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                    Fund Wallet
                  </span>
                </Link>
              </li>

              <li className="mt-1.5 w-full">
                <Link
                  className="py-2.7 text-sm font-semibold ease-nav-brand my-0 mx-4 flex items-center text-slate-200  whitespace-nowrap px-4 transition-colors"
                  to="/copy-trading"
                >
                  <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg  bg-center stroke-0 text-center xl:p-2.5">
                    <FaCopy />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                    Copy Trading
                  </span>
                </Link>
              </li>

              <li className="mt-1.5 w-full">
                <Link
                  className="py-2.7 text-sm font-semibold ease-nav-brand my-0 mx-4 flex items-center text-slate-200  whitespace-nowrap px-4 transition-colors"
                  to="/withdraw"
                >
                  <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg  bg-center stroke-0 text-center xl:p-2.5">
                    <FaBox />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                    Withdrawal
                  </span>
                </Link>
              </li>

              <li className="mt-1.5 w-full">
                <Link
                  className="py-2.7 text-sm font-semibold ease-nav-brand my-0 mx-4 flex items-center text-slate-200  whitespace-nowrap px-4 transition-colors"
                  to="/settings"
                >
                  <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg  bg-center stroke-0 text-center xl:p-2.5">
                    <IoIosSettings />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                    Settings
                  </span>
                </Link>
              </li>

              <li className="mt-1.5 w-full">
                <Link
                  className="py-2.7 text-sm font-semibold ease-nav-brand my-0 mx-4 flex items-center text-slate-200  whitespace-nowrap px-4 transition-colors"
                  to="/kyc"
                >
                  <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg  bg-center stroke-0 text-center xl:p-2.5">
                    <MdOutlineSettingsApplications />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                    KYC Application
                  </span>
                </Link>
              </li>

              <li className="mt-0.5 w-full">
                <Link
                  className="py-2.7 text-sm font-semibold  ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors"
                  to="/sign-in"
                >
                  <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg  bg-center stroke-0 text-center xl:p-2.5">
                    <IoLogIn />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                    {user ? (
                      <p
                        className="cursor-pointer text-slate-200  "
                        onClick={handleLogout}
                      >
                        <Link
                          to={"/"}
                          className="text-slate-200 font-semibold  cursor-pointer "
                        >
                          Logout
                        </Link>
                      </p>
                    ) : (
                      <Link
                        to={"/sign-in"}
                        className="text-slate-200 font-semibold  cursor-pointer "
                      >
                        Login
                      </Link>
                    )}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-auto px-3 mb-4 text-center lg:w-full lg:flex-none">
          <div className="h-full bg-gradient-to-tl from-[#ffb400] to-[#926704] shadow-lg shadow-[#272f4f] rounded-xl">
            <div className="relative flex items-center justify-center h-full">
              <img
                className="relative z-20 w-full pt-6"
                src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/illustrations/rocket-white.png"
                alt="rocket"
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;
