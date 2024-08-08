import React from "react";
import hero from "../../assets/parallax7.jpg";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TfiWallet } from "react-icons/tfi";
import { TfiBarChart } from "react-icons/tfi";
import { IoIosPlay } from "react-icons/io";

const Details = () => {
  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="true"
      data-vc-parallax="1.5"
      data-vc-parallax-image="https://7oroof.com/tfdemos/wp-cryptech/wp-content/uploads/2018/03/parallax7.jpg"
      className="vc_row wpb_row vc_row-fluid vc_custom_1521529804249 vc_row-has-fill vc_general vc_parallax vc_parallax-content-moving row-overlay"
      style={{
        background: `
        linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)),
        url(${hero})
      `,
        backgroundColor: "rgba(0, 0, 0, 0.85) !important",
        backgroundSize: "cover",
        position: "relative",
        left: "0",
        boxSizing: "border-box",
        width: "100%",
        paddingLeft: "33px",
        paddingRight: "33px",
      }}
    >
      <div
        id="cms-row-overlay"
        className="cms-row-overlay position-bottom color-gradient"
        style={{
          height: "32%",
        }}
      >
        <style type="text/css">
          {`
          #cms-row-overlay.color-gradient {
            background-image: -webkit-gradient(linear, left bottom, left top, from(#ffffff), to(rgba(255,255,255,0.01)));
            background-image: -webkit-linear-gradient(center bottom, #ffffff, rgba(255,255,255,0.01));
            background-image:    -moz-linear-gradient(center bottom, #ffffff, rgba(255,255,255,0.01));
            background-image:     -ms-linear-gradient(center bottom, #ffffff, rgba(255,255,255,0.01));
            background-image:      -o-linear-gradient(center bottom, #ffffff, rgba(255,255,255,0.01));
            background-image:         linear-gradient(center bottom, #ffffff, rgba(255,255,255,0.01));
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='rgba(255,255,255,0.01)', GradientType=1 );
          }
        `}
        </style>
      </div>
      <div className="container mx-auto px-10 ">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="vc_row wpb_row vc_inner vc_row-fluid">
                <div
                  className="wpb_column vc_column_container vc_col-sm-4 wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated"
                  style={{ animationDelay: "100ms" }}
                >
                  <div className="vc_column-inner vc_custom_1531553463701">
                    <div className="wpb_wrapper">
                      <div
                        id="cms-fancybox-66b091719ff9d"
                        className="cms-fancybox-layout2 icon-middle"
                      >
                        <div className="cms-fancybox-inner clearfix grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 py-20 md:grid-cols-2 grid-cols-1 gap-10">
            <div className="flex md:flex-row flex-col md:text-left text-center gap-10 items-center">
              <IoBriefcaseOutline color="#f9f9f9" size={70} />
              <div className="flex flex-col gap-3">
                <h1 className="text-white italic font-medium text-lg">
                  Get Started
                </h1>
                <p className="text-[#9b9b9b] text-sm">
                  Join our platform and begin your journey in copy trading.
                  Learn from the best traders and mirror their trades
                  effortlessly.
                </p>
                <span className="text-[#ffb400] font-bold text-sm">
                  + Read More
                </span>
              </div>
            </div>

            <div className="flex md:flex-row flex-col md:text-left text-center gap-10 items-center">
              <TfiWallet color="#f9f9f9" size={70} />
              <div className="flex flex-col gap-3">
                <h1 className="text-white italic font-medium text-lg">
                  Sign Up For Free
                </h1>
                <p className="text-[#9b9b9b] text-sm">
                  Register for free and get access to our comprehensive tools
                  and resources designed to help you succeed in copy trading.
                </p>
                <span className="text-[#ffb400] font-bold text-sm">
                  + Read More
                </span>
              </div>
            </div>

            <div className="flex md:flex-row flex-col md:text-left text-center gap-10 items-center">
              <TfiBarChart color="#f9f9f9" size={70} />
              <div className="flex flex-col gap-3">
                <h1 className="text-white italic font-medium text-lg">
                  Select An Investment Option
                </h1>
                <p className="text-[#9b9b9b] text-sm">
                  Choose from a variety of investment options and strategies
                  that match your goals and risk tolerance. Start copying
                  successful traders today.
                </p>
                <span className="text-[#ffb400] font-bold text-sm">
                  + Read More
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid py-10 grid-cols-12 gap-10 w-full">
          <div className="xl:col-span-8 w-full col-span-12 relative">
            <div
              className="md:h-full h-60 w-full"
              style={{
                background:
                  "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),url(https://7oroof.com/tfdemos/wp-cryptech/wp-content/uploads/2018/03/bg-video2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="cms-video-inner absolute inset-0 flex justify-center items-center">
              <a
                className="cms-video-button bg-[#ffb400] animate-breathe flex justify-center items-center rounded-full w-16 h-16"
                href="https://www.youtube.com/watch?v=SF4aHwxHtZ0"
              >
                <span className="video-icon  text-white text-6xl">
                  <IoIosPlay size={20} />
                </span>
                <span className="video-text hidden">Watch Our Video!</span>
              </a>
            </div>
          </div>
          <div className="xl:col-span-4 col-span-12 h-full  w-full">
            <div className=" bg-[#ffb400] px-10  py-10">
              <h3 className="text-white font-bold font-exo1 italic">
                Bitcoin donation:
              </h3>
              <div className="text-xs text-white font-normal italic font-exo1">
                bc1qgq3lka67lacchvugqgawl5rjya54vj36clcl3t
              </div>
              <div className="flex justify-center mt-4">
                <img
                  src="https://7oroof.com/tfdemos/wp-cryptech/wp-content/uploads/2018/07/qr.jpg"
                  alt="Bitcoin donation:"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="vc_parallax-inner skrollable skrollable-between"
          data-bottom-top="top: -50%;"
          data-top-bottom="top: 0%;"
          style={{
            backgroundImage:
              'url("https://7oroof.com/tfdemos/wp-cryptech/wp-content/uploads/2018/03/parallax7.jpg")',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Details;
