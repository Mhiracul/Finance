import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { apiBaseUrl } from "../config";

const BalanceSection = ({ name, image, width, balance }) => (
  <section className="basis-1/3 font-grotesque border-2 border-black self-stretch md:self-start items-center rounded-xl m-4 py-10 px-6">
    <div className="flex justify-between items-center">
      <div className="flex flex-col self-start">
        <p className="text-black-100 text-3xl md:text-2xl font-bold">
          {balance}
        </p>
        <p className="text-gray-900 text-base md:text-base font-semibold">
          {name}
        </p>
      </div>
      <div>
        <img className={width} src={`/${image}`} alt={name} />
      </div>
    </div>
  </section>
);

BalanceSection.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};

const Balances = () => {
  const [walletBalances, setWalletBalances] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWalletBalances = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/wallet-balances`, {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch wallet balances");
        }
        const data = await response.json();
        setWalletBalances(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching wallet balances:", error);
        setIsLoading(false);
      }
    };

    fetchWalletBalances();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // Add a loading indicator
  }

  return (
    <div className="flex flex-col flex-wrap md:flex-row">
      {Object.entries(walletBalances).map(([key, value], index) => {
        let imageName = "";
        switch (key.toLowerCase()) {
          case "bitcoin":
            imageName = "bitcoin.svg";
            break;
          case "eth":
            imageName = "eth.svg";
            break;
          case "xrp":
            imageName = "xrp.svg";
            break;
          case "xlm":
            imageName = "xlm.svg";
            break;
          default:
            imageName = `${key.toLowerCase()}.jpeg`; // Default to JPEG for other keys
            break;
        }

        return (
          <BalanceSection
            key={index}
            name={`${key.toUpperCase()} balance`}
            image={imageName}
            width="w-6" // Adjust as per your image dimensions
            balance={value}
          />
        );
      })}
    </div>
  );
};

export default Balances;
``;
