import React, { useState, useEffect } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import StaffTable from "./StaffTable";
import { staffList } from "../../data";
import ModalBasic from "../../components/ModalBasic";
import { Link } from "react-router-dom";

function Staff() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [staff, setStaff] = useState([]);
  useEffect(() => {
    setStaff(staffList);
  }, [staff]);

  const handleNew = (e) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Staff ✨
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Add board button */}
                <button
                  onClick={handleNew}
                  className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                >
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="ml-2">New Staff</span>
                </button>
              </div>
            </div>

            <div className="border-t border-slate-200">
              {/* {Page content} */}
              {staff.length < 1 ? (
                <div className="max-w-2xl m-auto mt-16">
                  <div className="text-center px-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 mb-4">
                      <svg className="w-5 h-6 fill-current" viewBox="0 0 20 24">
                        <path
                          className="text-slate-500"
                          d="M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z"
                        />
                        <path
                          className="text-slate-300"
                          d="M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z"
                        />
                        <path
                          className="text-slate-400"
                          d="M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl text-slate-800 font-bold mb-2">
                      You currently have no staff!
                    </h2>
                    <div className="mb-6">
                      Please register all your staff or employ if you have none
                      to see the list here.
                    </div>
                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                      <svg
                        className="w-4 h-4 fill-current opacity-50 shrink-0"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                      </svg>
                      <span className="ml-2">New Staff</span>
                    </button>
                  </div>
                </div>
              ) : (
                <StaffTable staff={staff} />
              )}

              {/* Page Content end */}
            </div>
          </div>
        </main>
      </div>
      <ModalBasic
        id="basic-modal"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        title="Add new staff"
      >
        {/* Modal content */}
        <div className="px-5 pt-4 pb-1">
          <div className="relative md:flex">
            {/* Content */}
            <div className="md:w-full">
              <div className="min-h-screen h-full flex flex-col after:flex-1">
                {/* Header */}
                <div className="flex-1">
                  <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link className="block" to="/">
                      <svg width="32" height="32" viewBox="0 0 32 32">
                        <defs>
                          <linearGradient
                            x1="28.538%"
                            y1="20.229%"
                            x2="100%"
                            y2="108.156%"
                            id="logo-a"
                          >
                            <stop
                              stopColor="#A5B4FC"
                              stopOpacity="0"
                              offset="0%"
                            />
                            <stop stopColor="#A5B4FC" offset="100%" />
                          </linearGradient>
                          <linearGradient
                            x1="88.638%"
                            y1="29.267%"
                            x2="22.42%"
                            y2="100%"
                            id="logo-b"
                          >
                            <stop
                              stopColor="#38BDF8"
                              stopOpacity="0"
                              offset="0%"
                            />
                            <stop stopColor="#38BDF8" offset="100%" />
                          </linearGradient>
                        </defs>
                        <rect fill="#6366F1" width="32" height="32" rx="16" />
                        <path
                          d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                          fill="#4F46E5"
                        />
                        <path
                          d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                          fill="url(#logo-a)"
                        />
                        <path
                          d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                          fill="url(#logo-b)"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="max-w-sm mx-auto px-4 py-8">
                  <h1 className="text-3xl text-slate-800 font-bold mb-6">
                    Add new staff ✨
                  </h1>
                  {/* Form */}
                  <form>
                    <div className="space-y-4">
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="email"
                        >
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="email"
                          className="form-input w-full"
                          type="email"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="name"
                        >
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="name"
                          className="form-input w-full"
                          type="text"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="role"
                        >
                          Your Role <span className="text-rose-500">*</span>
                        </label>
                        <select id="role" className="form-select w-full">
                          <option>Designer</option>
                          <option>Developer</option>
                          <option>Accountant</option>
                        </select>
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          id="password"
                          className="form-input w-full"
                          type="password"
                          autoComplete="on"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="mr-1">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-sm ml-2">
                            Email me about product news.
                          </span>
                        </label>
                      </div>
                      <Link
                        className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap"
                        to="/"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </form>
                  {/* Footer */}
                  <div className="pt-5 mt-6 border-t border-slate-200">
                    <div className="text-sm">
                      Have an account?{" "}
                      <Link
                        className="font-medium text-indigo-500 hover:text-indigo-600"
                        to="/signin"
                      >
                        Sign In
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Modal footer */}
        <div className="px-5 py-4">
          <div className="flex flex-wrap justify-end space-x-2">
            <button
              className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600"
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(false);
              }}
            >
              Cancel
            </button>
            <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
              Create
            </button>
          </div>
        </div>
      </ModalBasic>
    </div>
  );
}

export default Staff;
