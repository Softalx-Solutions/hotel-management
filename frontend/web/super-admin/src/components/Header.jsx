import React from "react";
import {
  BellIcon,
  CommandLineIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import userLogo from "../assets/user.svg";
function Header({ title }) {
  return (
    <div className=" w-full capitalize  py-4 px-4 flex items-center justify-between">
      {/* Title */}
      <h1 className="text-[#4a4d5c] text-xl font-bold">{title}</h1>
      {/* <div className="flex items-center text-[#5d6175]">
        <div className="flex items-center">
          <BellIcon  className="w-6 mx-2" />
          <GlobeAltIcon  className="w-6 mx-2" />
        </div>
        <div className="flex items-center">
          <h3 className="hidden md:flex font-medium mr-2 text-sm">Oke Edafe Great</h3>
          <div>
            <img src={userLogo} alt="Oke Edafe Great" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
