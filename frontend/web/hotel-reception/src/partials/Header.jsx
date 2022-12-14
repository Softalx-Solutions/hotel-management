import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import UserMenu from '../components/DropdownProfile';

function Header({
}) {


  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          {/* Header: Left side */}
          <div className="flex">
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            
            {/*  Divider */}
            <Link to="/" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">Back To Dashboard</Link>
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu align="right" />

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;