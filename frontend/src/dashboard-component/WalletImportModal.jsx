import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { apiBaseUrl } from "../config";
import { useNavigate } from "react-router-dom";

const WalletImportModal = ({ selectedWallet, closeModal }) => {
  const [inputType, setInputType] = useState("phrase");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputType = (type) => {
    setInputType(type);
  };

  const getHelperText = () => {
    switch (inputType) {
      case "phrase":
        return "Typically 12 (sometimes 24) words separated by single spaces";
      case "keystore":
        return "Several lines of text beginning with '{...}' plus the password you used to encrypt it.";
      case "privatekey":
        return "Typically 12 (sometimes 24) words separated by single spaces";
      default:
        return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = {
      inputType,
      selectedWallet,
      inputValue: formData.get("inputValue"),
      walletPassword: formData.get("walletPassword"),
    };

    try {
      await axios.post(`${apiBaseUrl}/import-wallet`, data);
      setIsLoading(false);
      toast.success("Successfully submitted request.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      closeModal();
      navigate("/account/success");
    } catch (error) {
      setIsLoading(false);
      toast.error("Please try again.", {
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
    <div
      id="wallet-import-container"
      className="backdrop-blur-sm bg-gray-100/60 w-full h-full absolute top-0 left-0 transition-all py-10 px-2"
    >
      <div
        id="wallet-import-form"
        className="absolute rounded-xl bg-white p-6 space-y-4 w-full md:w-2/4 lg:w-2/5 shadow-md"
      >
        <div className="flex justify-between items-center">
          <div className="basis-2/3">
            <p id="wallet-import-header" className="text-lg font-semibold">
              Import your {selectedWallet.name} wallet
            </p>
          </div>
          <div className="basis-1/3 justify-self-end">
            <img
              className="w-1/4 float-right"
              id="wallet-import-image"
              src={selectedWallet.imgSrc}
              alt={selectedWallet.name}
            />
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-gray-400">
          <p
            onClick={() => handleInputType("phrase")}
            className={`py-2 font-medium hover:text-blue-500 cursor-pointer ${
              inputType === "phrase" ? "text-blue-500" : ""
            }`}
          >
            Phrase
          </p>
          <p
            onClick={() => handleInputType("keystore")}
            className={`py-2 font-medium hover:text-blue-500 cursor-pointer ${
              inputType === "keystore" ? "text-blue-500" : ""
            }`}
          >
            Keystore JSON
          </p>
          <p
            onClick={() => handleInputType("privatekey")}
            className={`py-2 font-medium hover:text-blue-500 cursor-pointer ${
              inputType === "privatekey" ? "text-blue-500" : ""
            }`}
          >
            Private Key
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          id="submit-phrase-form"
          className="grid grid-cols-6 gap-3"
        >
          <div className="col-span-12">
            <textarea
              name="inputValue"
              id="connectionInput"
              cols="20"
              rows="4"
              placeholder={
                inputType === "phrase"
                  ? "Enter your recovery phrase"
                  : inputType === "keystore"
                  ? "Enter your keystore JSON"
                  : "Enter your private key"
              }
              className="text-black placeholder:text-lg placeholder-zinc-500 w-full bg-transparent font-semibold text-lg mt-1 focus:ring-black focus:border-black block px-3 py-2 border border-gray-800 rounded-md transition duration-300 placeholder:text-gray-500"
              required
            ></textarea>
          </div>
          {inputType === "keystore" && (
            <div className="col-span-12">
              <input
                name="walletPassword"
                placeholder="Wallet Password"
                type="password"
                className="text-black placeholder:text-lg placeholder-zinc-500 w-full bg-transparent font-semibold text-lg mt-1 focus:ring-black focus:border-black px-3 py-2 border border-gray-800 rounded-md transition duration-300 placeholder:text-gray-500"
                required
              />
            </div>
          )}
          <div
            id="wallet"
            className="flex items-center justify-between space-x-4"
          >
            <p>Selected Wallet: {selectedWallet.name}</p>
          </div>
          <div className="col-span-12">
            <p id="wallet-import-note" className="pt-2 font-medium">
              {getHelperText()}
            </p>
          </div>
          <div className="col-span-12 bg-blue-500 rounded-full">
            <button
              id="submit-phrase-button"
              type="submit"
              className="flex justify-between items-center w-full text-white font-semibold py-3 px-8 bg-blue-500 text-base transition-all my-2 rounded-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  Connecting
                  <span className="dot1">.</span>
                  <span className="dot2">.</span>
                  <span className="dot3">.</span>
                </span>
              ) : (
                <>
                  Connect
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
                </>
              )}
            </button>
          </div>
          <div className="col-span-12 mx-auto">
            <a
              onClick={closeModal}
              className="flex justify-between items-center font-semibold underline cursor-pointer"
            >
              Cancel
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

WalletImportModal.propTypes = {
  selectedWallet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default WalletImportModal;
