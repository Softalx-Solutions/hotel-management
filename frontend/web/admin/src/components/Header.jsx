import React from "react";
import { BellIcon, CommandLineIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import userLogo from "../assets/user.svg";
function Header({ name }) {
  return (
    <div className="bg-gray-100 w-full px-4 py-3 flex flex-row items-center justify-between">
      <CommandLineIcon className="h-6 w-9 text-[#3A57E8]" />
      <div className="flex flex-row flex-1 text-[#3A57E8] text-2xl">Admin</div>
      <div className="flex flex-row items-center">
        <ul className="flex">
          <li className="mx-4">
            <GlobeAltIcon className="h-6 w-9 text-[#3A57E8]" />
            <p></p>
          </li>
          <li>
            <BellIcon className="h-6 w-9 text-[#3A57E8]" />
          </li>
        </ul>
        <div class="h-6 w-9 mx-4">
          <img src={userLogo} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Header;
