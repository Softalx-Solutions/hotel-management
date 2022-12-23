import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Datepicker from '../../components/Datepicker';


import Header from '../../partials/Header';
import OrderDropdown from '../../partials/orders/OrderDropDown';

import OrderItem from "../../partials/orders/OrderItem"
function NewBooking() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">

            {/* Page content */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">

              {/* Cart items */}
              <div className="mb-6 lg:mb-0">
                <div className="mb-3">
                  <div className="flex text-sm font-medium text-slate-400 space-x-2">
                    <span className="text-indigo-500"><Link to="/"> Dashboard</Link></span>
                    <span>-&gt;</span>
                    <span className="text-slate-500">Reservation</span>
                  </div>
                </div>
                <header className="mb-2">
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">New Booking ✨</h1>
                </header>

                {/* Cart items */}
                <OrderItem />

              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-white p-5 shadow-lg rounded-sm border border-slate-200 lg:w-72 xl:w-80">
                  <div className="text-slate-800 font-semibold mb-2">Order Summary</div>
                  {/* Order details */}
                  <ul className="mb-4">
                    <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200">
                      <div>Room <span>x 1</span></div>
                      <div className="font-medium text-slate-800">$205</div>
                    </li>
                    <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200">
                      <div>Cleaning Fee</div>
                      <div className="font-medium text-slate-800">-</div>
                    </li>
                    <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200">
                      <div>Taxes</div>
                      <div className="font-medium text-slate-800">$48</div>
                    </li>
                    <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200">
                      <div>Total due (including taxes)</div>
                      <div className="font-medium text-emerald-600">$253</div>
                    </li>
                  </ul>
                  {/* Promo box */}
                  {/* <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium mb-1" htmlFor="promo">Promo Code</label>
                      <div className="text-sm text-slate-400 italic">optional</div>
                    </div>
                    <input id="promo" className="form-input w-full mb-2" type="text" />
                    <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none" disabled>Apply Code</button>
                  </div> */}

                  {/* booking date */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium mb-1" htmlFor="promo">Booking Date/ Days (7)</label>
                    </div>
                    <Datepicker />
                  </div>

                  {/* Payment method*/}
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium mb-1" htmlFor="promo">Payment Method</label>
                    </div>
                    <OrderDropdown />
                  </div>


                  <div className="mb-4">
                    <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white"><Link to="order-success"> Proceed Now - $253.00</Link></button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default NewBooking;