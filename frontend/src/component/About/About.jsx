import React from "react";
import { IoLayersOutline, IoLockClosedOutline } from "react-icons/io5";
import { CgArrowsExchangeV } from "react-icons/cg";
import { RiFileSearchFill } from "react-icons/ri";
import { BsRecycle } from "react-icons/bs";

const About = () => {
  return (
    <div className="w-full h-full">
      <div className="mx-auto font-exo1 container px-10 py-10 grid grid-cols-12 gap-4  md:mt-6 md:gap-6 2xl:mt-[1.875rem]  2xl:gap-[1.875rem]">
        <div className="wpb_wrapper  xl:col-span-8 col-span-12  ">
          <h1 className="text-3xl capitalize font-medium lg:max-w-md lg:text-left text-center italic">
            We compare to the best brokers over the internet.{" "}
          </h1>
          <div
            id="cms-fancybox-66aa4960314fb"
            className="cms-fancybox-default mt-10 relative grid lg:grid-cols-2 md:grid-cols-1 gap-10 text-2xl mx-2 "
          >
            <div className="cms-fancybox-inner flex  flex-col lg:items-start items-center  lg:text-left text-center clearfix">
              <div className="bg-[#ffb400] bg-opacity-10   w-24 h-24 rounded-full ">
                <div className="flex  items-center  justify-center w-24 h-24 rounded-full  text-7xl  mb-4">
                  <IoLockClosedOutline color="#ffb400" />
                </div>
              </div>

              <div className="cms-fancybox-content mt-4 ">
                <h3 className="font-semibold text-base">
                  Protection &amp; Security{" "}
                </h3>
                <div className="cms-fancybox-description text-sm">
                  Stop loss and take profit orders will help secure your
                  investment. The system will automatically execute trades
                  gains.{" "}
                </div>
              </div>
            </div>

            <div className="cms-fancybox-inner flex  flex-col lg:items-start items-center  lg:text-left text-center clearfix">
              <div className="bg-[#ffb400] bg-opacity-10   w-24 h-24 rounded-full ">
                <div className="flex items-center  justify-center w-24 h-24 rounded-full  text-7xl  mb-4">
                  <RiFileSearchFill color="#ffb400" />
                </div>
              </div>

              <div className="cms-fancybox-content mt-4 ">
                <h3 className="font-semibold text-base">Licensed Exchange</h3>
                <div className="cms-fancybox-description text-sm">
                  Our customers perform transactions not only in cryptocurrency,
                  but major world currencies supported by the system.
                </div>
              </div>
            </div>

            <div className="cms-fancybox-inner  flex  flex-col lg:items-start items-center  lg:text-left text-center clearfix">
              <div className="bg-[#ffb400] bg-opacity-10   w-24 h-24 rounded-full ">
                <div className="flex items-center  justify-center w-24 h-24 rounded-full  text-7xl  mb-4">
                  <BsRecycle color="#ffb400" />
                </div>
              </div>

              <div className="cms-fancybox-content mt-4 ">
                <h3 className="font-semibold text-base">
                  Protection &amp; Security{" "}
                </h3>
                <div className="cms-fancybox-description text-sm">
                  Stop loss and take profit orders will help secure your
                  investment. The system will automatically execute trades
                  gains.{" "}
                </div>
              </div>
            </div>

            <div className="cms-fancybox-inner  flex  flex-col lg:items-start items-center  lg:text-left text-center clearfix">
              <div className="bg-[#ffb400] bg-opacity-10   w-24 h-24 rounded-full ">
                <div className="flex items-center  justify-center w-24 h-24 rounded-full  text-7xl  mb-4">
                  <IoLayersOutline color="#ffb400" />
                </div>
              </div>

              <div className="cms-fancybox-content mt-4 ">
                <h3 className="font-semibold text-base">
                  Multi Currency Accounts
                </h3>
                <div className="cms-fancybox-description text-sm">
                  Support major currencies: USD, EUR, GBP & various
                  Cryptocurrencies. Funds exchanged between currencies rate.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 rounded-sm  shadow-default  dark:bg-boxdark xl:col-span-4">
          <div className="bg-[#ffb400] mb-3">
            <div className="flex flex-col items-center py-4">
              <h1 className="text-white text-2xl">1</h1>
              <h3 className="text-white font-medium">Bitcoin (BTC)</h3>
              <CgArrowsExchangeV />

              <h1 className="text-white font-normal mt-2 text-4xl">51951.84</h1>
              <h3 className="text-white font-medium">
                United State Dollars (USD)
              </h3>
            </div>
          </div>
          <div className="cshcr-xchange-rate bg-[#f9f9f9] py-5 px-10">
            <div className="cshcr-xchange-item   overflow-hidden py-5 border-b border-[#ededed]">
              <div className="cshcr-xchange-fsym flex gap-1 items-center float-left">
                <img
                  src="https://7oroof.com/tfdemos/wp-cryptech/wp-content/uploads/csh-crypto/btc.png"
                  className="w-auto h-auto max-w-[20px] align-middle border-none"
                />
                <span className="text-[#282828] inline-block leading-4 font-bold text-xs">
                  1 BTC=
                </span>
              </div>
              <div className="cshcr-xchange-tsym float-right">
                <img src="" />
                <span className="text-[#a5a5a5] align-middle font-bold inline-block text-xs">
                  52589.22 USD
                </span>
              </div>
            </div>
            <div class="cshcr-xchange-item overflow-hidden py-5 border-b border-[#ededed]">
              <div className="cshcr-xchange-fsym flex gap-1 items-center float-left">
                <img
                  src="https://7oroof.com/tfdemos/wp-cryptech/wp-content/uploads/csh-crypto/btc.png"
                  className="w-auto h-auto max-w-[20px] align-middle border-none"
                />
                <span className="text-[#282828] font-bold inline-block text-xs">
                  1 BTC=
                </span>
              </div>
              <div className="cshcr-xchange-tsym float-right">
                <img src="" />
                <span className="text-[#a5a5a5] align-middle font-bold inline-block text-xs">
                  48057.64 EUR
                </span>
              </div>
            </div>
            <div className="cshcr-xchange-item overflow-hidden py-5 border-b border-[#ededed]">
              <div className="cshcr-xchange-fsym flex gap-1 items-center float-left">
                <img
                  src="https://7oroof.com/tfdemos/wp-cryptech/wp-content/uploads/csh-crypto/btc.png"
                  className="w-auto h-auto max-w-[20px] align-middle border-none"
                />
                <span className="text-[#282828] font-bold inline-block text-xs">
                  1 BTC=
                </span>
              </div>
              <div className="cshcr-xchange-tsym float-right">
                <img src="" />
                <span className="text-[#a5a5a5] align-middle font-bold inline-block text-xs">
                  22.79 ETH
                </span>
              </div>
            </div>
            <div className="cshcr-xchange-item overflow-hidden py-5 border-b border-[#ededed]">
              <div className="cshcr-xchange-fsym flex gap-1 items-center float-left">
                <img
                  src="https://7oroof.com/tfdemos/wp-cryptech/wp-content/uploads/csh-crypto/btc.png"
                  className="w-auto h-auto max-w-[20px] align-middle border-none"
                />
                <span className="text-[#282828] font-bold inline-block text-xs">
                  1 BTC=
                </span>
              </div>
              <div className="cshcr-xchange-tsym float-right">
                <img src="" />
                <span className="text-[#a5a5a5] align-middle font-bold inline-block text-xs">
                  7507515.51 JPY
                </span>
              </div>
            </div>
            <div className="cshcr-xchange-item overflow-hidden py-5 border-b border-[#ededed]">
              <div className="cshcr-xchange-fsym flex gap-1 items-center float-left">
                <img
                  src="https://7oroof.com/tfdemos/wp-cryptech/wp-content/uploads/csh-crypto/btc.png"
                  className="w-auto h-auto max-w-[20px] align-middle border-none"
                />
                <span className="text-[#282828] font-bold inline-block text-xs">
                  1 BTC=
                </span>
              </div>
              <div className="cshcr-xchange-tsym float-right">
                <img src="" />
                <span className="text-[#a5a5a5] align-middle font-bold inline-block text-xs">
                  44793.2 CHF
                </span>
              </div>
            </div>
            <div class="cshcr-xchange-item overflow-hidden py-5 border-b border-[#ededed]">
              <div className="cshcr-xchange-fsym flex gap-1 items-center float-left">
                <img
                  className="w-auto h-auto max-w-[20px] align-middle border-none"
                  src="https://7oroof.com/tfdemos/wp-cryptech/wp-content/uploads/csh-crypto/btc.png"
                />
                <span className="text-[#282828] font-bold inline-block text-xs">
                  1 BTC=
                </span>
              </div>
              <div className="cshcr-xchange-tsym float-right">
                <img src="" />
                <span className="text-[#a5a5a5] align-middle font-bold inline-block text-xs">
                  81897.12 AUD
                </span>
              </div>
            </div>
            <div className="cshcr-xchange-item overflow-hidden py-5">
              <div className="cshcr-xchange-fsym flex gap-1 items-center float-left">
                <img
                  src="https://7oroof.com/tfdemos/wp-cryptech/wp-content/uploads/csh-crypto/btc.png"
                  className="w-auto h-auto max-w-[20px] align-middle border-none"
                />
                <span className="text-[#282828] font-bold inline-block text-xs">
                  1 BTC=
                </span>
              </div>
              <div className="cshcr-xchange-tsym float-right">
                <img src="" />
                <span className="text-[#a5a5a5] align-middle font-bold inline-block text-xs">
                  984.51 LTC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
