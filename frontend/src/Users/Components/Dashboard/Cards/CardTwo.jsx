import React, { useEffect, useState } from "react";
import axios from "axios";
import { SiWebmoney } from "react-icons/si";

const CardTwo = () => {
  const [accountBalance, setAccountBalance] = useState(0);

  useEffect(() => {
    const fetchAccountBalance = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/wallet", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });

        // Log the response data for debugging
        console.log("API Response:", response.data);

        // Ensure the balance is a number
        const balance = parseFloat(response.data);
        console.log("Parsed Balance:", balance); // Log the parsed balance

        setAccountBalance(isNaN(balance) ? 0 : balance); // Default to 0 if balance is not a number
      } catch (error) {
        console.error("Error fetching account balance:", error);
      }
    };

    fetchAccountBalance();
  }, []);

  return (
    <div>
      <div className="relative flex flex-col min-w-0 break-words bg-[#01071C] text-slate-200 shadow-md shadow-[#272f4f] rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                  Wallet Balance
                </p>
                <h5 className="mb-0 font-bold inline-flex items-end gap-0">
                  ${accountBalance.toFixed(2)}
                  <span className="leading-normal text-[10px] font-weight-bolder text-[#ffb400]">
                    +0%
                  </span>
                </h5>
              </div>
            </div>
            <div className="px-3 flex justify-center items-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tl from-[#ffb400] to-[#926704] flex justify-center items-center">
                <i className="text-white">
                  <SiWebmoney size={20} />{" "}
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
