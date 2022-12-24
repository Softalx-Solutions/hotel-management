import React from 'react';
import EndDate from '../../components/EndDate';
import StartDate from '../../components/StartDate ';

import HotelCard from '../../pages/component/HotelCard';
import RoomNo from './RoomNo';
import RoomType from './RoomType';

function OrderItem() {
  return (
    <>
      <ul>
        {/* Cart item */}
        <li className="sm:flex items-center py-6 border-b border-slate-200">
          <div className="w-full p-3 rounded-sm text bg-white border border-slate-200 py-6">
            <div className="grow">
              <div>
                <div className="space-y-4">
                   {/* Client names*/}
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-rose-500">*</span></label>
                      <input id="first-name" className="form-input w-full" type="text" placeholder="John" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-rose-500">*</span></label>
                      <input id="last-name" className="form-input w-full" type="text" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="other-names">Other Name <span className="italic text-xs text-gray-400">Optional</span></label>
                    <input id="other-names" className="form-input w-full" type="text" placeholder="amebor" />
                  </div>
                 
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="client-email">Email Address <span className="text-rose-500">*</span></label>
                    <input id="client-email" className="form-input w-full" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="start-date">Start Date <span className="text-rose-500">*</span></label>
                      < StartDate  minDate={new Date()} />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="end-date">End Date <span className="text-rose-500">*</span></label>
                      < EndDate />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="first-name">Room Type <span className="text-rose-500">*</span></label>
                      < RoomType />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="last-name">Room No. <span className="text-rose-500">*</span></label>
                      < RoomNo />
                    </div>
                  </div>

                </div>
               
              </div>
            </div>
          </div>
            
        </li>
        {/* Cart item */}
        <li className="sm:flex items-center py-6 border-b border-slate-200">
          <HotelCard />
        </li>
      </ul>

    </>
  );
}

export default OrderItem;