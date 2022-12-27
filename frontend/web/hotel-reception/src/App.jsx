import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';


// Import pages
import Home from './Home';
import Account from './pages/settings/Account';
import Feedback from './pages/settings/Feedback';
import PageNotFound from './pages/utility/PageNotFound';
import Signin from './pages/Signin';
import PreviewInvoice from './pages/PreviewInvoice';
import NewReservation from './pages/component/NewReservation';
import OrderSuccess from './partials/OrderSuccess';
import Reservations from './pages/component/Reservations';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-reservation" element={<NewReservation />} />
        <Route path="/settings" element={<Account />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/new-reservation/order-success" element={<OrderSuccess />} />
        <Route path="/settings/account" element={<Account />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/preview-invoice" element={<PreviewInvoice />} />
        <Route path="/reservations" element={< Reservations />} />
        
        <Route path="/settings/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
