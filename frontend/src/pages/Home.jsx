import React, { useEffect, useState } from "react";
import Banner from "../component/Banner";
import About from "../component/About/About";
import Details from "../component/Details/Details";
import Testimony from "../component/Testimony/Testimony";
import Footer from "../component/Footer/Footer";
import News from "../component/News/News";
import Discover from "../component/Discover/Discover";
import { FaArrowUp } from "react-icons/fa";
const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    setShowScrollButton(isBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Banner />
      <About />
      <Details />
      <Testimony />
      <Discover />
      <News />
      <Footer />
      <button
        className="scroll-up-button outline-none"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ display: showScrollButton ? "block" : "none" }}
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default Home;
