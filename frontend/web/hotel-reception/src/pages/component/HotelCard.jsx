import React from 'react';

function HotelCard() {
  return (
    <div className="w-full p-3 rounded-sm text bg-white border border-slate-200">
      <div className="text-slate-800 font-semibold mb-2">Available Room type</div>
      <div className="p-3">

        {/* Card content */}
        <div>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-rose-50" viewBox="0 0 36 36">
                  <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><span className="font-medium text-slate-800 hover:text-slate-900" href="#0">Standard Suites</span></div>
                  <div className="shrink-0 self-start ml-2">
                      <div className="text-xs inline-flex font-medium bg-rose-100 text-rose-600 rounded-full text-center px-2.5 py-1">Fully Booked</div>
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-slate-800">[00]</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-emerald-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><span className="font-medium text-slate-800 hover:text-slate-900" >Royal Suites</span></div>
                  <div className="shrink-0 self-start ml-2">
                      <div className="text-xs inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1">Available</div>
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-slate-8000">[14]</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-emerald-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><span className="font-medium text-slate-800 hover:text-slate-900">Luxury Suites</span></div>
                  <div className="shrink-0 self-start ml-2">
                      <div className="text-xs inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1">Available</div>
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-slate-8000">[31]</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-emerald-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><span className="font-medium text-slate-800 hover:text-slate-900" >Executive Suites</span></div>
                  <div className="shrink-0 self-start ml-2">
                      <div className="text-xs inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1">Available</div>
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-slate-800">[07]</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default HotelCard;
