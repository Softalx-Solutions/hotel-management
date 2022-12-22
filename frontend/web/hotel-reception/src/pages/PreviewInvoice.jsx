import React, { useState } from 'react';

import Header from '../partials/Header';
import InvioceCard from '../partials/orders/InvioceCard';
function OrderSuccess() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <InvioceCard />
        </main>

      </div>

    </div>
  );
}

export default OrderSuccess;