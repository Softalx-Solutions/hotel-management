import React from "react";
import {
  BellIcon,
  CommandLineIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import userLogo from "../assets/user.svg";
function Header() {
  return (
    <div className="bg-gray-100 w-full px-4 py-3 flex flex-col sm:flex-row sm:items-center space-y-3 items-start justify-start">
      {/* Brand */}
      <div className="flex items-center">
        <CommandLineIcon className="h-6 w-9 text-[#3A57E8]" />
        <div className="flex flex-row flex-1 text-[#3A57E8] text-2xl">
          Admin
        </div>
      </div>
      {/* Brand End */}

      {/* Navigation Menu Start */}
      <div className="flex flex-col flex-1 sm:flex-row justify-end">
        <ul className="flex-col sm:flex-row space-y-3 text-[#3A57E8]">
          <li className="flex space-x-2 group sm:flex-row">
            <GlobeAltIcon className="h-6 w-9" />
            <h3>Language</h3>
          </li>
          <li className="flex space-x-2 group sm:flex-row">
            <BellIcon className="h-6 w-9" />
            <h3>Notifications</h3>
          </li>
          <li className="flex space-x-2 group sm:flex-row">
            <img src={userLogo} className="w-9 h-7" />
            <h3>Profile</h3>
          </li>
        </ul>
        {/* <div class="h-6 w-9 mx-4">
          <img src={userLogo} className="w-full h-full" />
        </div> */}
      </div>
    </div>
  );
}

export default Header;
