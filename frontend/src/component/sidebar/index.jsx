// src/component/sidebar/index.jsx
import React from "react";
import image from "../../assets/parallax6.jpg";
function Sidebar({ logo, imageSrc, heading, sizeClass }) {
  return (
    <div
      className="w-[100%] h-[100vh] flex flex-col relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-[#fff] font-exo1 mt-20 italic text-[1.7rem] mx-auto font-extrabold">
        {heading}
      </h1>
    </div>
  );
}

export default Sidebar;
