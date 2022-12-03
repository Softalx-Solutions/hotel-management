import React from "react";
import logo from "../assets/logo.svg";
import overviewLogo from "../assets/overview.svg";
function NavBar() {
  return (
    <nav className="col-span-1 bg-dark">
      <div className="my-6 mx-4 flex items-center">
        <img src={logo} alt="logo" />
        <h1 className="text-secondary font-bold ml-4 width">
          <a href="/">Dashboard</a>
        </h1>
      </div>
      <ul className="mt-8">
        <li className="flex p-3 bg-[#84868f] border-[#DDE2FF] border-l-4">
            <img src={overviewLogo} alt="overview"/>
            <h3 className="text-[#DDE2FF] ml-4">Overview</h3>
        </li>
        <li className="flex p-3 border-[#DDE2FF]">
            <img src={overviewLogo} alt="overview"/>
            <h3 className="text-[#DDE2FF] ml-4">Overview</h3>
        </li>
        <li className="flex p-3 border-[#DDE2FF]">
            <img src={overviewLogo} alt="overview"/>
            <h3 className="text-[#DDE2FF] ml-4">Overview</h3>
        </li>
        <li className="flex p-3 border-[#DDE2FF]">
            <img src={overviewLogo} alt="overview"/>
            <h3 className="text-[#DDE2FF] ml-4">Overview</h3>
        </li>
        <li className="flex p-3 border-[#DDE2FF]">
            <img src={overviewLogo} alt="overview"/>
            <h3 className="text-[#DDE2FF] ml-4">Overview</h3>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
