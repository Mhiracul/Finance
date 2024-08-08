import { useState } from "react";
import Header from "../dashboard-component/Header";
import Navigation from "../dashboard-component/Navigation";
import { toast } from "react-hot-toast";
import { apiBaseUrl } from "../config";

const FundWallet = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const [selectedWallet, setSelectedWallet] = useState("");
  const [proofFile, setProofFile] = useState(null);

  const handleWalletChange = (e) => {
    setSelectedWallet(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProofFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("amount", e.target.amount.value);
      formData.append("wallet", selectedWallet);
      formData.append("proof", proofFile);

      const response = await fetch(`${apiBaseUrl}/fund-account`, {
        method: "POST",
        body: formData,
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      });

      if (response.ok) {
        toast.success("Submitted! Your transaction is being reviewed.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Error! Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error! Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <Header toggleNav={toggleNav} navOpen={navOpen} />
      <Navigation navOpen={navOpen} />
      <div className="flex flex-col flex-wrap justify-center md:flex-row my-10">
        <form
          className="p-2 overflow-hidden sm:rounded-md basis-2/4"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center space-x-2 mx-4">
            <p className="text-gray-900 text-3xl md:text-2xl font-semibold">
              Fund Wallet
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
          <div>
            <div className="px-4 py-5">
              <div className="grid grid-cols-6 gap-3">
                {/* Form elements */}
                <div className="col-span-12">
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    required
                    step="0.000000000000001"
                    min="0.01"
                    placeholder="Enter amount"
                    className="text-black placeholder:text-sm placeholder-zinc-500 w-full bg-transparent font-semibold text-lg mt-1 focus:ring-black focus:border-black block px-3 py-2 border border-gray-800 rounded-md transition duration-300 placeholder:text-gray-500"
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="wallet"
                    className="flex justify-between text-sm my-2 font-medium text-gray-700"
                  >
                    Wallet
                  </label>
                  <select
                    name="wallet"
                    id="wallet"
                    required
                    value={selectedWallet}
                    onChange={handleWalletChange}
                    className="text-black placeholder:text-sm placeholder-zinc-500 w-full bg-transparent font-semibold text-sm mt-1 focus:ring-black focus:border-black block px-3 py-2 border border-gray-800 rounded-md transition duration-300 placeholder:text-gray-500"
                  >
                    <option value="">Select Wallet</option>
                    <option value="eth">Eth - (Min 0.01 Eth)</option>
                    <option value="btc">Bitcoin - (Min 0.01 Bitcoin)</option>
                    <option value="xrp">XRP - (Min 0.01 XRP)</option>
                    <option value="xlm">XLM - (Min 1 XLM)</option>
                    <option value="xdc">XDC - (Min 1 XDC)</option>
                    <option value="algo">ALGO</option>
                    <option value="miota">MIOTA</option>
                    <option value="ada">ADA</option>
                    <option value="hbar">HBAR</option>
                    <option value="qtum">QTUM</option>
                  </select>
                </div>

                {/* Payment method container */}
                {selectedWallet && (
                  <div className="col-span-12 text-sm">
                    <div id="payment-method-container">
                      <p className="flex justify-between text-sm my-2 font-medium text-gray-700">
                        Click To Copy Wallet Address
                        <span
                          id="copied-text"
                          className="opacity-0 transition-opacity duration-300"
                        ></span>
                      </p>
                      {/* Conditional rendering based on selected wallet */}
                      <div className="grid grid-cols-12 gap-4 items-end">
                        {/* Bitcoin (BTC) */}
                        {selectedWallet === "btc" && (
                          <div className="payment-method btc col-span-12 border border-gray-800 rounded-md text-black p-4 hover:text-green-600 font-semibold cursor-pointer transition duration-200">
                            BTC
                            <p className="break-all">
                              bc1qu9ag9d3wze7avnwkt2l3kyrkqu3p6rsg0h63yj
                            </p>
                            <p className="wallet">btc</p>
                          </div>
                        )}
                        {/* Ethereum (ETH) */}
                        {selectedWallet === "eth" && (
                          <div className="payment-method eth col-span-12 border border-gray-800 rounded-md text-black p-4 hover:text-green-600 font-semibold cursor-pointer transition duration-200">
                            ETH (ERC20)
                            <p className="break-all">
                              0xB5bB5269c778565e17E0A28D450a1bf809af7A08
                            </p>
                            <p className="wallet">eth (ERC20)</p>
                          </div>
                        )}
                        {/* XRP */}
                        {selectedWallet === "xrp" && (
                          <div className="payment-method xrp col-span-12 border border-gray-800 rounded-md text-black p-4 hover:text-green-600 font-semibold cursor-pointer transition duration-200">
                            XRP
                            <p className="break-all">
                              rsBg2pXDkmaXfLqPbCc3f1E4dHaqkifihN
                            </p>
                            <p className="wallet">xrp</p>
                          </div>
                        )}
                        {/* XLM */}
                        {selectedWallet === "xlm" && (
                          <div className="payment-method xlm col-span-12 border border-gray-800 rounded-md text-black p-4 hover:text-green-600 font-semibold cursor-pointer transition duration-200">
                            XLM
                            <p className="break-all">
                              GAYB73S7L333A775W5OG4LZV6B5ZRD4L2VOUERSUMSPTSMV23XIHS4O7
                            </p>
                            <p className="wallet">xlm</p>
                          </div>
                        )}
                        {/* XDC */}
                        {selectedWallet === "xdc" && (
                          <div className="payment-method xdc col-span-12 border border-gray-800 rounded-md text-black p-4 hover:text-green-600 font-semibold cursor-pointer transition duration-200">
                            XDC
                            <p className="break-all">
                              xdc23f886cc7be1321809e36615267A79aa754759c8
                            </p>
                            <p className="wallet">xdc</p>
                          </div>
                        )}
                        {/* ALGO */}
                        {selectedWallet === "algo" && (
                          <div className="payment-method algo col-span-12 border border-gray-800 rounded-md text-black p-4 hover:text-green-600 font-semibold cursor-pointer transition duration-200">
                            ALGO
                            <p className="break-all">
                              WBQTDZGGLPPDRBKKOOUUGQIAXXJQY3V44CH6QCYRM5524UPWQ7E2J5W5GY
                            </p>
                            <p className="wallet">algo</p>
                          </div>
                        )}
                        {/* MIOTA */}
                        {selectedWallet === "miota" && (
                          <div className="payment-method miota col-span-12 border border-gray-800 rounded-md text-black p-4 hover:text-green-600 font-semibold cursor-pointer transition duration-200">
                            MIOTA
                            <p className="break-all">
                              0xB5bB5269c778565e17E0A28D450a1bf809af7A08
                            </p>
                            <p className="wallet">miota</p>
                          </div>
                        )}
                        {/* ADA */}
                        {selectedWallet === "ada" && (
                          <div className="payment-method ada col-span-12 border border-gray-800 rounded-md text-black p-4 hover:text-green-600 font-semibold cursor-pointer transition duration-200">
                            ADA
                            <p className="break-all">
                              addr1qy08pyr7tqzgmk4vf8f37junezckjq2j0jx7lmla2rf769c7wzg8ukqy3hd2cjwnra9e8j93dyq4ylydalhl65xna5ts3q3m9x
                            </p>
                            <p className="wallet">ada</p>
                          </div>
                        )}
                        {/* HBAR */}
                        {selectedWallet === "hbar" && (
                          <div className="payment-method hbar col-span-12 border border-gray-800 rounded-md text-black p-4 hover:text-green-600 font-semibold cursor-pointer transition duration-200">
                            HBAR
                            <p className="break-all">0.0.5352239</p>
                            <p className="wallet">hbar</p>
                          </div>
                        )}
                        {/* QTUM */}
                        {selectedWallet === "qtum" && (
                          <div className="payment-method qtum col-span-12 border border-gray-800 rounded-md text-black p-4 hover:text-green-600 font-semibold cursor-pointer transition duration-200">
                            <p className="break-all">
                              Qfq1b85b7MP6CiU6Z6ykGbmF2sgZigRLK5
                            </p>
                            <p className="wallet">qtum</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-span-12">
                  <label
                    htmlFor="proof"
                    className="flex justify-between text-sm my-2 font-medium text-gray-700"
                  >
                    Proof Of Payment
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="proof"
                    id="proof"
                    onChange={handleFileChange}
                    className="text-black px-2 py-2 placeholder:text-sm text-sm placeholder-zinc-500 w-full bg-transparent font-semibold  mt-1 focus:ring-black focus:border-black block border border-gray-800 rounded-md transition duration-300 placeholder:text-gray-500"
                  />
                </div>

                <div className="col-span-12 px-4">
                  <button
                    id="submit-btn"
                    type="submit"
                    className="flex justify-between items-center w-full text-white font-semibold py-3 px-8 bg-black text-base transition-all my-2 rounded-full"
                  >
                    Deposit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 ml-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FundWallet;
