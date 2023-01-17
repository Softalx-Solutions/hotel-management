import React, { useState, useEffect } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import RoomsTable from "./RoomsTable";
import { roomsList } from "../../data";
import ModalBasic from "../../components/ModalBasic";
function Rooms() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    setRooms(roomsList);
  }, [rooms]);

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
                  Rooms ✨
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
                  <span className="ml-2">New Room</span>
                </button>
              </div>
            </div>

            <div className="border-t border-slate-200">
              {/* {Page content} */}
              {rooms.length < 1 ? (
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
                      You currently have no room!
                    </h2>
                    <div className="mb-6">
                      Please register all your room or employ if you have none
                      to see the list here.
                    </div>
                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                      <svg
                        className="w-4 h-4 fill-current opacity-50 shrink-0"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                      </svg>
                      <span className="ml-2">New room</span>
                    </button>
                  </div>
                </div>
              ) : (
                <RoomsTable data={rooms} />
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
        title="" //Place title if you like
      >
        {/* Modal content */}
        <div className="px-1 pt-4 pb-1">
          <div className="relative md:flex">
            {/* Content */}
            <div className="md:w-full">
              <div className="min-h-[screen/2] h-full flex flex-col after:flex-1">
                <div className="w-[80%] mx-auto px-2 py-4">
                  <h1 className="text-3xl text-slate-800 font-bold mb-6">
                    New rooms ✨
                  </h1>
                  {/* Form */}
                  <form>
                    <div className="space-y-4">
                      {/* Full Name */}
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
                          htmlFor="role"
                        >
                          Role <span className="text-rose-500">*</span>
                        </label>
                        <select id="role" className="form-select w-full">
                          <option>Cook</option>
                          <option>Receptionist</option>
                          <option>Accountant</option>
                        </select>
                      </div>
                      {/* Initial salary */}
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="salary"
                        >
                          Initial salary{" "}
                          <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="salary"
                          className="form-input w-full"
                          type="number"
                        />
                      </div>
                      {/* Initial Salary end */}
                      {/* Address start */}
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="address"
                        >
                          Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="address"
                          className="form-input w-full"
                          type="text"
                        />
                      </div>
                      {/* Address end */}
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
                  </form>
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

export default Rooms;
