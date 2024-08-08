import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";
import axios from "axios";

const CopyTrading = () => {
  const [traders, setTraders] = useState([]);

  useEffect(() => {
    const fetchTraders = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/traders", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });
        setTraders(response.data);
      } catch (error) {
        console.error("Error fetching traders:", error);
      }
    };

    fetchTraders();
  }, []);

  return (
    <div className="w-full font-roboto bg-[#01071C] h-screen">
      <DefaultLayout>
        <div className="container mx-auto mt-6 px-4 py-6 shadow-md shadow-[#272f4f] text-slate-300 rounded-md">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {traders.map((trader) => (
              <Link
                key={trader._id}
                to={`/trader/${trader._id}`}
                className="bg-[#01071C] rounded-md shadow-md shadow-[#272f4f] p-5 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`data:image/png;base64,${trader.image}`}
                    alt={`${trader.name} Profile`}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm uppercase inline-flex gap-1 items-center font-medium">
                      {trader.company}{" "}
                      <h3 className="text-xs capitalize"> (@ {trader.name})</h3>
                    </h3>
                    <p className="text-xs">From ${trader.minimumAmount}.00</p>
                  </div>
                </div>

                <div className="relative w-full h-24">
                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 300 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0,100 C20,80 40,70 60,80 C80,90 100,70 120,80 C140,90 160,60 180,70 C200,80 220,50 240,60 C260,70 280,40 300,50"
                      fill="none"
                      stroke="#ffb400"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                  <div className="bg-[#0d1b4d] rounded-md shadow-sm px-2 py-2">
                    <div className="flex flex-col text-center items-center gap-1">
                      <h2 className="text-xs font-medium">1M Return</h2>
                      <h4 className="text-xs font-normal">
                        {trader.returnPercentage}%
                      </h4>
                    </div>
                  </div>

                  <div className="bg-[#0d1b4d] rounded-md shadow-sm px-2 py-2">
                    <div className="flex flex-col justify-center text-center items-center gap-1">
                      <h2 className="text-xs font-medium">Investors</h2>
                      <h4 className="text-xs font-normal">
                        {trader.investorsTotal}
                      </h4>
                    </div>
                  </div>

                  <div className="bg-[#0d1b4d] rounded-md shadow-sm px-2 py-2">
                    <div className="flex flex-col text-center items-center gap-1">
                      <h2 className="text-xs font-medium">Fees</h2>
                      <h4 className="text-xs font-normal">{trader.fees}%</h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default CopyTrading;
