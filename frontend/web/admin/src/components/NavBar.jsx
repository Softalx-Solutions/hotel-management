import React from "react";
import logo from "../assets/logo.svg";
import overviewLogo from "../assets/overview.svg";
import { links } from "../data";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function NavBar() {
  return (
    <nav className="bg-dark items-start duration-300 flex flex-col sm:block">
      {/* Brand start */}
      <div className="my-6 mx-4 flex items-center">
        <img src={logo} alt="logo" />
        <h1 className="text-secondary font-bold ml-4 flex sm:hidden md:block">
          <a href="/">Dashboard</a>
        </h1>
      </div>
      {/* Brand end */}

      {/* Toggle Button */}
      {/* <div className="flex justify-center rounded-full bg-secondary w-6 h-6 absolute right-[-12px] top-7">
        <ArrowLeftIcon className="w-3 text-dark" />
      </div> */}
      {/* Toggle Button end */}

      <ul className="mt-0 sm:mt-8 flex flex-col items-start sm:items-center md:items-start justify-start">
        {links.map((link) => {
          return (
            <li className="flex justify-evenly items-center ml-4 sm:ml-0 mb-4 md:mx-4">
              {link.icon}
              <h3 className="flex sm:hidden md:flex ml-4 text-[#DDE2FF]">
                {link.title}
              </h3>
            </li>
          );
        })}
        {/* Active */}
        {/* <li className="flex p-3 bg-[#84868f] border-[#DDE2FF] border-l-4">
            <img src={overviewLogo} alt="overview"/>
            <h3 className="hidden sm:flex text-[#DDE2FF] ml-4">Overview</h3>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
