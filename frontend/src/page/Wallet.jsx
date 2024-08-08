import { useState } from "react";
import Header from "../dashboard-component/Header";
import Navigation from "../dashboard-component/Navigation";
import WalletImportModal from "../dashboard-component/WalletImportModal";

function WalletComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false); // State for the new modal
  const [selectedWallet, setSelectedWallet] = useState({
    name: "",
    imgSrc: "",
  });
  const [navOpen, setNavOpen] = useState(false);

  const popupConnectTab = (target) => {
    const walletName = target.getAttribute("data-walletname");
    const imgSrc = target.getAttribute("data-imgsrc");
    setSelectedWallet({ name: walletName, imgSrc: imgSrc });
    setIsModalOpen(true);
  };

  const closeWalletConnectContainer = () => {
    setIsModalOpen(false);
  };

  const openWalletImportModal = () => {
    setIsModalOpen(false); // Close the first modal
    setIsImportModalOpen(true); // Open the import modal
  };

  const closeWalletImportModal = () => {
    setIsImportModalOpen(false);
  };
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div>
      <Header toggleNav={toggleNav} navOpen={navOpen} />
      <Navigation navOpen={navOpen} />{" "}
      <div className="relative flex flex-col flex-wrap justify-center my-10 mx-8">
        <div className="w-full md:w-2/4 md:mx-auto">
          <div className="flex justify-center items-center space-x-2 mx-auto">
            <p className="text-gray-900 text-3xl md:text-2xl font-semibold">
              Wallets
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
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>
          </div>
          <p className="font-medium">
            Multiple iOS and Android wallets support the protocol. Simply scan a
            QR code from your desktop computer screen to start securely using a
            dApp with your mobile wallet. Interaction between mobile apps and
            mobile browsers are supported via mobile deep linking.
          </p>
        </div>
      </div>
      <div
        id="wallet-container"
        className="w-full md:w-2/4 my-10 mx-auto grid grid-cols-12 gap-6 px-6"
      >
        {[
          { name: "Metamask", imgSrc: "/metamask.svg" },
          { name: "Trust", imgSrc: "/twt.svg" },
          { name: "Crypto", imgSrc: "/crypto.png" },
          { name: "Wallet Connect", imgSrc: "/walletconnect.jpeg" },
          { name: "Argent", imgSrc: "/argent.jpeg" },
          { name: "Rainbow", imgSrc: "/rainbow.png" },
          { name: "Gnosis", imgSrc: "/gnosis.jpeg" },
          { name: "Atomic", imgSrc: "/atomic.png" },
          { name: "Exodus", imgSrc: "/exodus.png" },
          { name: "Coinbase", imgSrc: "/coinbase.png" },
          { name: "Aktionariat", imgSrc: "/aktionariat.png" },
          { name: "Binance", imgSrc: "/binance.png" },
          { name: "Blockchain", imgSrc: "/blockchain.png" },
          { name: "Keyringpro", imgSrc: "/keyringpro.png" },
          { name: "Ellipal", imgSrc: "/ellipal.png" },
          { name: "Midaswallet", imgSrc: "/midaswallet.png" },
          { name: "Morixwallet", imgSrc: "/morixwallet.png" },
          { name: "Atwallet", imgSrc: "/atwallet.png" },
          { name: "Dokwallet", imgSrc: "/dokwallet.png" },
          { name: "Meetone", imgSrc: "/meetone.jpeg" },
          { name: "Unstoppable", imgSrc: "/unstoppable.png" },
          { name: "Xdc", imgSrc: "/xdc.png" },
          { name: "Fetch", imgSrc: "/fetch.jpeg" },
          { name: "Iconex", imgSrc: "/iconex.png" },
          { name: "Harmony", imgSrc: "/harmony.png" },
          { name: "Keplr", imgSrc: "/keplr.png" },
          { name: "Kardiachain", imgSrc: "/kardiachain.png" },
          { name: "Graph Protocol", imgSrc: "/graphprotocol.jpeg" },
          { name: "Cosmostation", imgSrc: "/cosmostation.png" },
          { name: "Peakdefi", imgSrc: "/peakdefi.png" },
          { name: "Swft", imgSrc: "/swft.png" },
          { name: "Vision", imgSrc: "/vision.png" },
          { name: "Bitkeep", imgSrc: "/bitkeep.png" },
          { name: "Viawallet", imgSrc: "/viawallet.png" },
          { name: "Sparkpoint", imgSrc: "/sparkpoint.png" },
          { name: "Easypocket", imgSrc: "/easypocket.jpeg" },
          { name: "Bridgewallet", imgSrc: "/bridgewallet.png" },
          { name: "Ownbit", imgSrc: "/ownbit.png" },
          { name: "Infinity", imgSrc: "/infinity.png" },
          { name: "Walletio", imgSrc: "/walletio.png" },
          { name: "Infinito", imgSrc: "/infinito.png" },
          { name: "Equal", imgSrc: "/equal.jpeg" },
          { name: "Safepal", imgSrc: "/safepal.png" },
          { name: "Spatium", imgSrc: "/spatium.jpeg" },
          { name: "Torus", imgSrc: "/torus.jpeg" },
          { name: "Wazirx", imgSrc: "/wazirx.png" },
          { name: "Tokenary", imgSrc: "/tokenary.png" },
          { name: "Cybavo", imgSrc: "/cybavo.png" },
          { name: "Grid Plus", imgSrc: "/gridplus.png" },
          { name: "Coinomi", imgSrc: "/coinomi.jpeg" },
          { name: "Nash", imgSrc: "/nash.jpeg" },
          { name: "Zelcore", imgSrc: "/zelcore.png" },
          { name: "Dcent", imgSrc: "/dcent.png" },
          { name: "Alpha Wallet", imgSrc: "/alphawallet.jpeg" },
          { name: "Alice", imgSrc: "/alice.png" },
          { name: "Cool Wallet", imgSrc: "/coolwallet.png" },
          { name: "Coin98", imgSrc: "/coin98.png" },
          { name: "Trust Vault", imgSrc: "/trustvault.png" },
          { name: "Loopring", imgSrc: "/loopring.jpeg" },
          { name: "Mykey", imgSrc: "/mykey.png" },
          { name: "Eidoo", imgSrc: "/eidoo.png" },
          { name: "Huobi", imgSrc: "/huobi.jpeg" },
          { name: "Authereum", imgSrc: "/authereum.png" },
          { name: "Walleth", imgSrc: "/walleth.png" },
          { name: "Ledger", imgSrc: "/ledger.png" },
          { name: "Maiar", imgSrc: "/maiar.png" },
          { name: "Bitpay", imgSrc: "/bitpay.jpeg" },
          { name: "Math", imgSrc: "/math.png" },
          { name: "Tokenpocket", imgSrc: "/tokenpocket.png" },
          { name: "Onto", imgSrc: "/onto.png" },
          { name: "Anchor", imgSrc: "/anchor.png" },
          { name: "Pillar", imgSrc: "/pillar.png" },
        ].map((wallet, index) => (
          <div
            key={index}
            onClick={(e) => popupConnectTab(e.currentTarget)}
            data-walletname={wallet.name}
            data-imgsrc={wallet.imgSrc}
            className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition hover:bg-gray-50"
          >
            <div className="flex flex-col items-center justify-center">
              <img className="w-1/2" src={wallet.imgSrc} alt={wallet.name} />
              <p className="font-medium mt-2 text-base">{wallet.name}</p>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div
          id="wallet-connect-container"
          className="backdrop-blur-sm bg-gray-100/60 w-full h-full absolute top-0 left-0 transition-all py-10 px-2"
        >
          <div
            id="wallet-connect-form"
            className="absolute rounded-xl bg-white p-4 space-y-4 w-full md:w-2/4 lg:w-2/5 shadow-md"
          >
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={closeWalletConnectContainer}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex items-center justify-start space-x-4 border border-gray-300 rounded-lg p-4">
              <p>Connecting...</p>
              <button
                onClick={openWalletImportModal}
                id="connect-wallet-button"
                className="rounded-full bg-gray-900 text-white hover:text-blue-300 font-semibold py-1 px-4 transition-all"
              >
                Connect manually
              </button>
            </div>
            <div
              id="wallet"
              className="flex items-center justify-between border border-blue-500 rounded-lg p-4 cursor-pointer"
            >
              <div className="basis-1/2">
                <p id="wallet-connect-name" className="text-lg font-semibold">
                  {selectedWallet.name}
                </p>
                <p>Easy to use browser extension</p>
              </div>
              <div className="basis-1/2 justify-self-end">
                <img
                  id="wallet-connect-image"
                  className="w-1/3 float-right"
                  src={selectedWallet.imgSrc}
                  alt={selectedWallet.name}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {isImportModalOpen && (
        <WalletImportModal
          selectedWallet={selectedWallet}
          closeModal={closeWalletImportModal}
        />
      )}
    </div>
  );
}

export default WalletComponent;
