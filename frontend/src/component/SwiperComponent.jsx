// SwiperComponent.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css"; // Import Swiper styles
import { Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

// Install modules
SwiperCore.use([Autoplay]);
// Install modules

const SwiperComponent = () => {
  return (
    <div className="w-full relative">
      <Swiper
        className="progress-slide-carousel relative"
        loop={true}
        autoplay={{ delay: 1900, disableOnInteraction: false }}
        pagination={{ clickable: true, type: "progressbar" }}
      >
        <SwiperSlide>
          <div
            className="w-full h-96"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {" "}
            <span className="text-3xl font-semibold text-indigo-600"></span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-96"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {" "}
            <span className="text-3xl font-semibold text-indigo-600"></span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-96"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {" "}
            <span className="text-3xl font-semibold text-indigo-600"></span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
