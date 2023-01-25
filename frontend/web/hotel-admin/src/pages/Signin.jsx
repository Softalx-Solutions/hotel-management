import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Reservations() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">


      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

              <div className="max-w-2xl m-auto mt-16">
               <div className="max-w-sm mx-auto px-4 py-8">
              <h1 className="text-3xl text-slate-800 font-bold mb-6">Welcome back! ✨</h1>
                  
                  {/* Form */}
              <form>
                <div className="space-y-4">
                  {/* <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="text">Hotel ID</label>
                    <input id="text" className="form-input w-full" type="text"  placeholder='2H3K4JHJ445KKJKH'/>
                  </div> */}
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
                    <input id="email" className="form-input w-full" type="email" placeholder='john@example.com' />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <input id="password" className="form-input w-full" type="password" autoComplete="on"  placeholder='ex: P@zZw5!d'/>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                  </div>
                  <Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3" to="/">Sign In</Link>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="mt-5">
                  <div className="bg-amber-100 text-amber-600 px-3 py-2 rounded">
                  <div className="text-slate-500 font-bold">Forgot your password?</div>
                    <svg className="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span className="text-sm">
                      Contact your supervisor or admin for password reset.
                    </span>
                  </div>
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

export default Reservations;