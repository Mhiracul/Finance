import React from "react";
import hero from "../../assets/blog3.jpg";

const Discover = () => {
  return (
    <div
      className="w-full h-full  joy  relative px-0"
      style={{
        background: `
        linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)),
        url(${hero})
      `,
        backgroundColor: "rgba(0, 0, 0, 0.9) !important",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxSizing: "border-box",
        left: "0",
      }}
    >
      <div className="container mx-auto px-10 py-20">
        <div>
          <h1 className="text-white max-w-2xl text-4xl font-exo1 font-normal italic">
            <span className="text-[#ffb400]">Discover</span> Thousands of
            Trading &amp; Investment Opportunities.
          </h1>

          <div className="grid md:grid-cols-2 grid-cols-1 py-10 gap-10">
            <p className="text-[#9b9b9b] font-light">
              Now you can start trading options, Cryptocurrencies, Stocks, and
              Forex quickly, easily, and safely from anywhere. With robust
              margin trading leverage, short sell options, and swift deposit and
              withdrawal capabilities, you can begin trading with us in seconds.
            </p>

            <p className="text-[#9b9b9b] font-light">
              These investment commodities have gained recognition among major
              financial institutions and have even been adopted by countries
              like Australia and Japan. However, like any investment, they come
              with risks associated with market movements!.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
