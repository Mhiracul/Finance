import { AiFillMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BiSolidCheckbox } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentURL = window.location.hostname;
  const domainExtension = currentURL.split(".")[1];
  const urlName = currentURL.split(".")[0];

  return (
    <div className="w-full h-full bg-[#222]">
      <div className="w-full py-10">
        <div className="container w-full mx-auto md:px-10 px-10">
          <div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
              <div className="flex flex-col w-full text-left gap-4 border-r md:border-[#2e2f2f] border-none">
                <div className="text-2xl font-bold text-white">
                  FinanceMargin
                </div>

                <p className="text-[#9b9b9b] text-xs max-w-xs ">
                  Exchange Cryptocurrency at the Best Rate by getting the best
                  offer from all the exchanges at one place.
                </p>
              </div>

              <div className="flex flex-col w-full text-left gap-4 border-r md:border-[#2e2f2f] border-none">
                <h1 className="font-medium text-white text-base">Company</h1>

                <ul>
                  <li className="text-[#9b9b9b] text-sm">About Us</li>
                  <li className="text-[#9b9b9b] text-sm">Contact Us</li>
                  <li className="text-[#9b9b9b] text-sm">FAQs</li>
                </ul>
              </div>
              <div className="flex flex-col w-full text-left gap-4 border-r md:border-[#2e2f2f] border-none">
                <h1 className="font-medium text-white text-base">How To</h1>

                <ul>
                  <li className="text-[#9b9b9b] text-sm">Buy Bitcoin</li>
                  <li className="text-[#9b9b9b] text-sm">Buy Bitcoin Cash</li>
                  <li className="text-[#9b9b9b] text-sm">Buy Ethereum</li>
                  <li className="text-[#9b9b9b] text-sm">Buy Litcoin</li>
                </ul>
              </div>
              <div className="flex flex-col w-full text-left gap-4">
                <h1 className="font-medium text-white text-base">
                  Stay Updated
                </h1>

                <div>
                  <h4 className="text-sm text-[#939393]">
                    Learn more about us and our mission.
                  </h4>
                  <p className="text-sm text-[#939393] mt-4">
                    Investing in a brighter future.
                  </p>
                </div>
                <Link to="/login">
                  <button className="bg-[#1d1d1d] w-1/2 text-white px-4 py-3 rounded-sm">
                    Join Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2e2f2f] w-full mt-8">
          <p className="text-sm text-center text-[#939393] mt-3">
            &copy; {new Date().getFullYear()} {urlName}.{domainExtension}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
