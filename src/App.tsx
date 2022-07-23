import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';
import TrackRedirectLinks from './components/TrackRedirectLinks';

import AppRoutes from './Lib/Routes/AppRoutes';

function App() {

  return (
    <div className='App'>
      <ScrollToTop />
      <TrackRedirectLinks />
      <ToastContainer />
      <AppRoutes />
    </div>
  );
}

export default App;