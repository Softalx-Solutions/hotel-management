import React, { useState } from "react";
import logo from "../assets/logo.svg";
import overviewLogo from "../assets/overview.svg";
import { links } from "../data";


function NavBar({isOpen}) {

  
  return (
    <nav className={`${isOpen ? 'translate-y-[-100%] z-[9999] absolute top-0 left-0 right-0 left-0':'sm:translate-y-0  bg-dark h-full items-start sm:items-center md:items-start duration-500 static flex flex-col sm:flex'}`}>
      {/* Brand start */}
      <div className="my-6 mx-4 flex w-full items-center justify-between sm:justify-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <h1 className="text-secondary font-bold mx-4 flex sm:hidden md:block uppercase">
            <a href="/">SoftAlx Admin</a>
          </h1>
        </div>
        
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
            <li
              key={link.id}
              className="flex justify-evenly items-center ml-4 sm:ml-0 mb-4 md:mx-4"
            >
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
