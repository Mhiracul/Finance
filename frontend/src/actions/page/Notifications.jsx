import { useState } from "react";
import Header from "../dashboard-component/Header";
import Navigation from "../dashboard-component/Navigation";
const Notifications = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  return (
    <div>
      <Header toggleNav={toggleNav} navOpen={navOpen} />
      <Navigation navOpen={navOpen} />{" "}
      <div className="flex flex-col justify-center items-center my-10">
        <p className="text-gray-900 text-3xl md:text-2xl font-semibold">
          No Notifications Here
        </p>
      </div>
      <div
        id="investments"
        className="flex flex-col justify-center items-center my-10"
      >
        <section className="flex flex-col items-center w-full md:w-4/6 whitespace-nowrap"></section>
      </div>
    </div>
  );
};

export default Notifications;
