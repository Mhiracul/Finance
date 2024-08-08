import React, { useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FundWallet = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("BTC"); // Default value
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/fund-wallet",
        {
          amount,
          paymentMethod,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
      setMessage("");
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="w-full font-roboto bg-[#01071C] h-screen">
      <DefaultLayout>
        <div className="grid grid-cols-12 gap-4 shadow-md shadow-[#272f4f] px-10 py-10 mt-10 rounded-md bg-[#01071C]">
          <div className="col-span-12 xl:col-span-4">
            <h1 className="text-[#ffb400] text-xl font-bold font-exo1">
              Fund Wallet
            </h1>
            <h1 className="text-white text-sm outline-none font-normal font-exo1">
              Add funds to your wallet
            </h1>
          </div>

          <div className="xl:col-span-8 border px-10 rounded-md border-[#101c47] col-span-12">
            <h1 className="font-semibold text-xl font-exo1 mt-4 text-slate-300">
              Funding Form
            </h1>
            <hr className="border-t-1 border-[#302f2f]" />
            <div className="py-10">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="amount"
                    className="text-slate-300 font-medium font-exo1"
                  >
                    Amount to Fund
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    className="form-control p-3 text-white mt-3 bg-[#0f172a] transition-border-shadow duration-150 ease-in-out border border-gray-300 shadow-md hover:border-blue-500 hover:shadow-lg font-light text-base w-full block pointer form-sm"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="paymentMethod"
                    className="text-slate-300 font-medium font-exo1"
                  >
                    Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    className="form-control p-3 text-white mt-3 bg-[#0f172a] transition-border-shadow duration-150 ease-in-out border border-gray-300 shadow-md hover:border-blue-500 hover:shadow-lg font-light text-base w-full block pointer form-sm"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="BTC">Bitcoin - BTC</option>
                    <option value="ETH">Ethereum - ETH</option>
                    <option value="USDT_TRC20">USDT - TRC20</option>
                    <option value="USDT_ERC20">USDT - ERC20</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-[#ffb400] text-white p-2 mt-6 rounded-md w-full"
                >
                  Fund Wallet
                </button>
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-[#ffb400] text-white p-2 mt-6 rounded-md w-full "
                >
                  Back
                </button>
              </form>
              {message && (
                <div className="bg-green-500 text-white p-2 mt-4 rounded-md">
                  {message}
                </div>
              )}
              {error && (
                <div className="bg-red-500 text-white p-2 mt-4 rounded-md">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default FundWallet;
