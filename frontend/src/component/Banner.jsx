import React from "react";
import hero from "../assets/home1-slider1.jpg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Banner = () => {
  return (
    <div
      className="w-full bg-white h-full font-gilroy relative"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="py-24 ">
        <div className="flex md:flex-row justify-center items-center font-exo1 italic text-white flex-col ">
          <div className="container relative px-10  py-20 mx-auto ">
            <p className="md:text-base py-3 text-sm leading-7 font-semibold">
              Trading commodities with the most favorable margins
            </p>
            <h1 className="text-white max-w-5xl md:leading-[60px] leading-8 md:text-6xl text-xl font-semibold">
              Start Trading the World’s Most Popular Stocks, Options, Forex, and
              Cryptocurrencies!{" "}
            </h1>

            <div className="flex md:flex-row max-w-md flex-col gap-4 mt-8 py-10">
              <Link
                to="/"
                className="text-white rounded-full bg-[#ffb400] text-center text-sm md:w-full w-full px-8 py-2"
              >
                <button className="">Contact Us</button>
              </Link>{" "}
              <Link
                to="/"
                className="text-center border-white rounded-full border md:w-full w-full text-sm text-white px-8 py-2"
              >
                <button className="">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
