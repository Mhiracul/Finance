import { useState } from "react";
import Header from "../dashboard-component/Header";
import Navigation from "../dashboard-component/Navigation";

const Withdraw = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  return (
    <div>
      <Header toggleNav={toggleNav} navOpen={navOpen} />
      <Navigation navOpen={navOpen} />{" "}
      <div
        id="alert-2"
        className="flex px-2 py-4 my-4 mb-4 bg-rose-100/30 border border-rose-500"
        role="alert"
      >
        <div className="ml-3 text-sm font-normal text-rose-300">
          This account is yet to be activated for withdrawal
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
