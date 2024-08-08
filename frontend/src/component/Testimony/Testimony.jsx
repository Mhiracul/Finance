import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import Admin from "../../assets/admin1.jpg";
const Testimony = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="container mx-auto px-10 py-20">
        <div className="flex flex-col items-center gap-9">
          <RiDoubleQuotesR color="#ffb400" size={60} />
          <h1 className="text-center italic text-[#9b9b9b] text-2xl max-w-3xl leading-10 py-8">
            “Highly recommended & a great experience. The process was simple and
            easy to understand. Trading was straight forward, supports all major
            cryptocurrencies and the entire process was super smooth!”
          </h1>
          <div>
            <img src={Admin} alt="" className="rounded-full w-20 h-20" />
            <h3 className="font-semibold mt-2 text-sm italic font-exo1">
              Fouad Badway
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
