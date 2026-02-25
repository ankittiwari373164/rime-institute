import React from "react";

const brandGold = "#b08d4b";

const Header = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#2d2d2d] flex flex-wrap justify-center items-center gap-x-3">
        Student Placements <span className="font-light text-gray-400">@RIME</span>
      </h1>
      <div
        className="h-1 w-24 mx-auto mt-4 rounded-full"
        style={{ backgroundColor: brandGold }}
      ></div>
    </div>
  );
};

export default Header;
