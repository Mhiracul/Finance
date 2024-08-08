import { useState } from "react";
import Header from "../dashboard-component/Header";
import Navigation from "../dashboard-component/Navigation";
import Balances from "../dashboard-component/Balances";
import RecentActivitySection from "../dashboard-component/RecentActivitySection";

const Dashboard = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="">
      <Header toggleNav={toggleNav} navOpen={navOpen} />
      <Navigation navOpen={navOpen} />
      <div className="mt-14 px-4">
        <Balances />
        <RecentActivitySection />
      </div>
    </div>
  );
};

export default Dashboard;
