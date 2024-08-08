import React from "react";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
const News = () => {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto px-10 py-20">
        <div className="flex flex-col items-center gap-3">
          <h4 className="text-sm text-[#ffb400] font-semibold  font-exo1">
            Dont Miss Latest
          </h4>
          <h1 className="text-xl font-medium font-exo1 italic text-black">
            News &amp; Headlines
          </h1>
          <p className="text-[#9b9b9b] max-w-xl text-center text-base font-normal ">
            Follow our latest news and thoughts which focuses exclusively on
            investment strategy guide, blockchain tech, crypto-trading, mining,
            and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 pt-10 md:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col gap-3">
            <img src={Blog1} alt="" />
            <p className="text-xs mt-3 text-[#ffb400]">Apps, Crypto News</p>
            <h1 className="font-exo1 text-xl italic font-medium">
              New Research Suggests Satoshi Nakamoto Lived in London Creating
              Bitcoin
            </h1>

            <p className="text-sm text-[#9b9b9b]">
              he hunt for the mysterious Bitcoin inventor, Satoshi Nakamoto
              continues to this day, as new data-driven research has been
              recently deployed in order to figure out the creator’s location
              while he/she or they worked on the network.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <img src={Blog2} alt="" />
            <p className="text-xs mt-3 text-[#ffb400]">Cryptocurrency, Tech</p>
            <h1 className="font-exo1 text-xl italic font-medium">
              Coinbase Launches Voter Registration Tool Ahead of November
              Elections
            </h1>
            <p className="text-sm text-[#9b9b9b]">
              BThe initiative will be rolling out resources to help users
              educate themselves on crypto issues, their [elected] member’s
              positions, and how to get involved in the conversations,” the
              company told Decrypt.Coinbase’s chief policy officer Faryar
              Shirzad said in a blog post that this year’s elections will be
              “the most important in crypto’s history.”
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <img src={Blog3} alt="" />
            <p className="text-xs mt-3 text-[#ffb400]">Bitcoin, Tech</p>
            <h1 className="font-exo1 text-xl italic font-medium">
              Bitcoin (BTC) Was Invented By A Pseudonymous Individual Or Group
              Named Satoshi Nakamoto In 2008
            </h1>

            <p className="text-sm text-[#9b9b9b]">
              Bitcoin’s monetary policy is enforced through a unique blend of
              software, cryptography and financial incentives rather than the
              whim of trusted third parties. The Bitcoin network is powered by a
              cryptographically secure, verifiable database called the
              blockchain — itself a technological phenomenon.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
