import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import DefaultLayout from "../../layout/DefaultLayout";

const TraderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [trader, setTrader] = useState(null);
  const [accountBalance, setAccountBalance] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrader = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/traders/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          }
        );
        setTrader(response.data);
        checkBalance(response.data.minimumAmount); // Check balance when trader details are fetched
      } catch (error) {
        console.error("Error fetching trader details:", error);
      }
    };

    const fetchAccountBalance = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/wallet", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });

        // Log the response and balance for debugging
        //console.log("API Response:", response.data);
        const balance = parseFloat(response.data);
        //console.log("Parsed Balance:", balance);

        setAccountBalance(isNaN(balance) ? 0 : balance);
        if (trader) {
          checkBalance(trader.minimumAmount); // Check balance when account balance is fetched
        }
      } catch (error) {
        console.error("Error fetching wallet balance:", error);
      }
    };

    const checkBalance = (minimumAmount) => {
      if (accountBalance < minimumAmount) {
        setError(
          "Note: You cannot make any deposit now because you do not have sufficient balance in your wallet. "
        );
      } else {
        setError(""); // Clear error if balance is sufficient
      }
    };

    fetchTrader();
    fetchAccountBalance();
  }, [id, accountBalance, trader, navigate]);

  return (
    <div className="w-full font-roboto bg-[#01071C] h-screen">
      <DefaultLayout>
        <div className="container mx-auto mt-6 px-4 py-6 shadow-md shadow-[#272f4f] text-slate-300 rounded-md">
          <div className="bg-[#49260d] flex items-center py-2 px-2 text-sm border border-[#8b4d21] rounded-md mb-4">
            {error && (
              <p className=" text-[#9a751f] font-normal">
                {error}
                <Link
                  to="/fund-wallet"
                  className="text-[#ffb400] underline ml-1"
                >
                  Fund Wallet
                </Link>
              </p>
            )}
          </div>
          {trader ? (
            <>
              <div className="flex mt-10 items-center gap-3">
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
              <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-4">
                <div className="border rounded-md p-2">
                  <div className="flex gap-3 items-center">
                    <div className="rounded-full flex justify-center items-center w-12 h-12 text-sm font-bold bg-white text-purple-700">
                      {trader.returnPercentage}%
                    </div>
                    <div className="flex flex-col   gap-1">
                      <h2 className="text-xs font-medium">1M Return</h2>
                      <h4 className="text-xs font-normal">
                        {trader.returnPercentage}%
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-2">
                  <div className="flex gap-3 items-center">
                    <div className="rounded-full flex justify-center items-center w-12 h-12 text-sm font-bold bg-white text-purple-700">
                      {trader.fees}%
                    </div>
                    <div className="flex flex-col   gap-1">
                      <h2 className="text-xs font-medium">Fees</h2>
                      <h4 className="text-xs font-normal">{trader.fees}%</h4>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-2">
                  <div className="flex flex-col gap-3 ">
                    <h1 className="text-xs font-medium">Minimum Investment</h1>
                    <div className="flex flex-col   gap-1">
                      <h2 className="text-xs font-medium">USD</h2>
                      <h4 className="text-lg font-medium ">
                        ${trader.minimumAmount}.00
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-6 px-4 py-2 bg-[#ffb400] text-white rounded-md">
                Start Investment
              </button>
            </>
          ) : (
            <p className="text-slate-300">Loading trader details...</p>
          )}
        </div>
      </DefaultLayout>
    </div>
  );
};

export default TraderDetail;
