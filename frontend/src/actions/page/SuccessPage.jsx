import { useState } from "react";
import Header from "../dashboard-component/Header";
import Navigation from "../dashboard-component/Navigation";

const SuccessPage = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div>
      <Header toggleNav={toggleNav} navOpen={navOpen} />
      <Navigation navOpen={navOpen} />{" "}
      <div className="relative flex flex-col flex-wrap justify-center my-10 mx-8">
        <div className="w-full md:w-2/4 md:mx-auto">
          <h1 className="font-extrabold text-green-500 text-2xl leading-tight tracking-wide md:text-3xl">
            Successfully submitted connection request 🎉
          </h1>
          <p className="font-medium">
            We received your request & we will be in touch shortly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
