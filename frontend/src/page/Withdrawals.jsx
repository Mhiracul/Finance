import { useState } from "react";
import Header from "../dashboard-component/Header";
import Navigation from "../dashboard-component/Navigation";

const Withdrawals = () => {
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
      <div className="flex flex-col justify-center items-center my-10">
        <p className="text-[#363636] text-3xl md:text-2xl font-semibold">
          No Withdrawals
        </p>
      </div>
      <div
        id="withdrawals"
        className="flex flex-col justify-center items-center my-10"
      >
        <section className="flex flex-col items-center w-full md:w-4/6 whitespace-nowrap">
          {/* Withdrawals content */}
        </section>
      </div>
    </div>
  );
};

export default Withdrawals;
