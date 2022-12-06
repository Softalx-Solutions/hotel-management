import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
// import AdminNavbar from './AdminNavbar';
// import Icon from '@material-tailwind/react/Icon';
// import h1 from '@material-tailwind/react/Heading6';
import { links } from "../data";
import { NavBar } from "./";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-dark w-64 z-10  transition-all duration-300`}//py-4 px-6
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          {/* Brand Start */}
          <div className="mt-6 mx-4 flex w-full items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="logo" />
              <h1 className="text-secondary font-bold mx-4 uppercase">
                <a href="/">SoftAlx Admin</a>
              </h1>
            </div>
          </div>
          {/* Brand End */}
          <div className="flex flex-col w-full">
            {/* <hr className="my-4 min-w-full" /> */}

            <ul className="flex-col min-w-full flex list-none mt-8">
              {links.map((link) => (
                <li className="w-full rounded-lg mb-4">
                  <NavLink
                    to={`${
                      link.title.toLowerCase() === "dashboard"
                        ? "/"
                        : link.title.toLowerCase()
                    }`}
                    exact
                    onClick={() => setShowSidebar("-left-64")}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? " w-full flex items-center gap-4 text-md text-[#DDE2FF] p-4 bg-[#4a4c56] border-[#DDE2FF] border-l-2"
                        : isPending
                        ? "pending"
                        : "flex items-center gap-4 text-md text-[#DDE2FF] rounded-lg px-4 my-1 "
                    }
                    // className="flex items-center gap-4 text-md text-[#DDE2FF] rounded-lg"
                  >
                    {link.icon}
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
