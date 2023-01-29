import React, { useState } from "react";
import logo from "../assets/logo.svg";
import overviewLogo from "../assets/overview.svg";
import { links } from "../data";
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
import { useLocation } from 'react-router-dom';

function NavBar({ showSidebar, setShowSidebar }) {

  const location = useLocation().pathname;

  return (
      <nav className="relative bg-blue-500 md:ml-64 py-6 px-3">
          <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
              <div className="flex items-center md:hidden">
                  <button
                      // buttonType="link"
                      // size="lg"
                      // iconOnly
                      // rounded
                      // ripple="light"
                      onClick={() => setShowSidebar('left-0')}
                  >
                      <GiHamburgerMenu size={20} color="white" />
                  </button>
                  <div
                      className={`absolute top-0 left-0 bottom-0 flex m-4 md:hidden ${
                          showSidebar === 'left-0' ? 'left-64' : '-left-64'
                      } z-50 transition-all duration-300`}
                  >
                      <button
                          color="transparent"
                          // buttonType="link"
                          // size="lg"
                          // iconOnly
                          // rounded
                          // ripple="light"
                          onClick={() => setShowSidebar('-left-64')}
                      >
                          <MdClose size={20} color="white" />
                      </button>
                  </div>
              </div>

              <div className="flex justify-between items-center w-full">
                  <h4 className="uppercase text-white text-sm tracking-wider mt-1 ml-4">
                      {location === '/'
                          ? 'DASHBOARD'
                          : location.toUpperCase().replace('/', '')}
                  </h4>

                  <div className="flex">
                      {/* <NavbarInput placeholder="Search" />

                      <div className="-mr-4 ml-6">
                          <Dropdown
                              color="transparent"
                              buttonText={
                                  <div className="w-12">
                                      <Image src={ProfilePicture} rounded />
                                  </div>
                              }
                              rounded
                              style={{
                                  padding: 0,
                                  color: 'transparent',
                              }}
                          >
                              <DropdownItem color="lightBlue">
                                  Action
                              </DropdownItem>
                              <DropdownItem color="lightBlue">
                                  Another Action
                              </DropdownItem>
                              <DropdownItem color="lightBlue">
                                  Something Else
                              </DropdownItem>
                          </Dropdown>
                      </div> */}
                  </div>
              </div>
          </div>
      </nav>
  );
}

export default NavBar;
