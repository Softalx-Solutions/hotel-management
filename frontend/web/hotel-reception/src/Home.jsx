import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HotelCard from './pages/component/HotelCard'
import Header from './partials/Header';

function Home() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>

          {/* Search area */}
          <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16 bg-indigo-500 overflow-hidden">
            {/* Glow */}
            <div className="absolute pointer-events-none" aria-hidden="true">
              <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="ill-a">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#FFF" stopOpacity="0" offset="100%" />
                  </radialGradient>
                </defs>
                <circle
                  style={{ mixBlendMode: 'overlay' }}
                  cx="588"
                  cy="650"
                  r="256"
                  transform="translate(-332 -394)"
                  fill="url(#ill-a)"
                  fillRule="evenodd"
                  opacity=".48"
                />
              </svg>
            </div>
            {/* Illustration */}
            <div className="absolute pointer-events-none" aria-hidden="true">
              <svg width="1280" height="361" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ill2-b">
                    <stop stopColor="#A5B4FC" offset="0%" />
                    <stop stopColor="#818CF8" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="ill2-c">
                    <stop stopColor="#4338CA" offset="0%" />
                    <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
                  </linearGradient>
                  <path id="ill2-a" d="m64 0 64 128-64-20-64 20z" />
                  <path id="ill2-e" d="m40 0 40 80-40-12.5L0 80z" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g transform="rotate(51 -92.764 293.763)">
                    <mask id="ill2-d" fill="#fff">
                      <use xlinkHref="#ill2-a" />
                    </mask>
                    <use fill="url(#ill2-b)" xlinkHref="#ill2-a" />
                    <path fill="url(#ill2-c)" mask="url(#ill2-d)" d="M64-24h80v152H64z" />
                  </g>
                  <g transform="rotate(-51 618.151 -940.113)">
                    <mask id="ill2-f" fill="#fff">
                      <use xlinkHref="#ill2-e" />
                    </mask>
                    <use fill="url(#ill2-b)" xlinkHref="#ill2-e" />
                    <path fill="url(#ill2-c)" mask="url(#ill2-f)" d="M40.333-15.147h50v95h-50z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="relative w-full max-w-2xl mx-auto text-center">
              <div className="mb-5">
                <h1 className="text-2xl md:text-3xl text-white font-bold">👋 What Can We Help You Find?</h1>
              </div>
              <form className="relative">
                <label htmlFor="action-search" className="sr-only">
                  Search
                </label>
                <input id="action-search" className="form-input pl-9 py-3 focus:border-slate-300 w-full" type="search" placeholder='Enter Booking Code...' />
                <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                  <svg
                    className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Sections */}
            <div className="space-y-8">
                <h3 className="text-xl text-slate-800 font-bold">Quick Actions</h3>
              <div >
               
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:sidebar-expanded:grid-cols-2 xl:sidebar-expanded:grid-cols-3 gap-6">
                  
                  {/* Item  QR-Code*/}
                  <Link to="#/new-reservation">
                    <div className="bg-slate-100 rounded-sm text-center p-5">
                      <div className="flex flex-col h-full">
                        <div className="grow mb-2">
                          {/* Icon */}
                          <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                            <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon1-a">
                                  <stop stopColor="#FFF" offset="0%" />
                                  <stop stopColor="#A5B4FC" offset="100%" />
                                </linearGradient>
                              </defs>
                              <g fillRule="nonzero" fill="none">
                                <path
                                  d="M19.236 21.995h-3.333c-.46 0-.833.352-.833.786v9.428c0 .434.373.786.833.786h4.167V22.78c0-.434-.374-.786-.834-.786Z"
                                  fill="#4F46E5"
                                  opacity=".88"
                                />
                                <path
                                  d="M34.234 20.073a2.393 2.393 0 0 0-.735-.116h-5v-2.609c0-3.325-2.157-4.297-3.298-4.347a.828.828 0 0 0-.611.24.888.888 0 0 0-.257.63v4.032L21 22.077v10.924h10.19c1.1.005 2.073-.744 2.392-1.842l2.308-7.826a2.711 2.711 0 0 0-.181-1.988 2.528 2.528 0 0 0-1.475-1.272Z"
                                  fill="url(#icon1-a)"
                                  transform="translate(-.93 -.005)"
                                />
                              </g>
                            </svg>
                          </div>
                          {/* Content */}
                          <h3 className="text-lg font-semibold text-slate-800 mb-1">Scan QR Code</h3>
                          <div className="text-sm">Scan slip or phone to lodge customer.</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-indigo-500 hover:text-indigo-600">
                            Explore -&gt;
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  
                  {/* Item New-Booking*/}
                  <Link to="/new-reservation">
                    <div className="bg-slate-100 rounded-sm text-center p-5">
                      <div className="flex flex-col h-full">
                        <div className="grow mb-2">
                          {/* Icon */}
                          <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                            <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon2-a">
                                  <stop stopColor="#FFF" offset="0%" />
                                  <stop stopColor="#A5B4FC" offset="100%" />
                                </linearGradient>
                              </defs>
                              <g fillRule="nonzero" fill="none">
                                <path
                                  d="M26.5 19c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V35l-4.108-2.148a10 10 0 0 1-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C18 22.183 21.805 19 26.5 19Z"
                                  fill="#4F46E5"
                                  opacity=".88"
                                />
                                <path
                                  d="M23 13c-5.523 0-10 3.582-10 8 0 1.797.75 3.45 2 4.785V31l4.833-2.416c.996.266 2.059.416 3.167.416 5.523 0 10-3.582 10-8s-4.477-8-10-8Z"
                                  fill="url(#icon2-a)"
                                />
                              </g>
                            </svg>
                          </div>
                          {/* Content */}
                          <h3 className="text-lg font-semibold text-slate-800 mb-1">New Reservation</h3>
                          <div className="text-sm">Reserve room for client on site.</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-indigo-500 hover:text-indigo-600">
                            Explore -&gt;
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to="#/new-reservation">
                    <div className="bg-slate-100 rounded-sm text-center p-5">
                      <div className="flex flex-col h-full">
                        <div className="grow mb-2">
                          {/* Icon */}
                          <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                            <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon3-a">
                                  <stop stopColor="#FFF" offset="0%" />
                                  <stop stopColor="#A5B4FC" offset="100%" />
                                </linearGradient>
                              </defs>
                              <g fillRule="nonzero" fill="none">
                                <circle fill="url(#icon3-a)" cx="30.5" cy="17.5" r="4.5" />
                                <circle fill="#4F46E5" opacity=".88" cx="17.5" cy="17.5" r="4.5" />
                                <circle fill="#4F46E5" opacity=".88" cx="30.5" cy="30.5" r="4.5" />
                                <circle fill="url(#icon3-a)" cx="17.5" cy="30.5" r="4.5" />
                              </g>
                            </svg>
                          </div>
                          {/* Content */}
                          <h3 className="text-lg font-semibold text-slate-800 mb-1">View Reservations</h3>
                          <div className="text-sm">View all Reservation.</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-indigo-500 hover:text-indigo-600" >
                            Explore -&gt;
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                </div>
              </div>

              {/* Popular Guides */}
              <div>
                <div className="mb-5">
                  <h2 className="text-xl text-slate-800 font-bold">Available Rooms</h2>
                </div>
                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Item */}
                  {/* <div className="w-full p-3 rounded-sm text bg-white border border-slate-200"> */}
                    <div className="flex h-full">
                     
                      <HotelCard />
                   
                    </div>
                  {/* </div> */}
                  
                  {/* Item */}
                 
                  
                </div>
              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Home;