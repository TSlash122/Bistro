// pages/Routers/AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import Success from '../../components/Success';
import Cancel from '../../components/Cancel';
import About from '../About/About'; // Import additional components as needed

const AppRoutes = ({ isAdmin, userId, AdminRole, emails, userName }) => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<PlaceOrder />} />
      <Route path='/success' element={<Success />} />
      <Route path='/cancel' element={<Cancel />} />
      <Route path='/about' element={<About />} />
      {/* Add more admin routes if needed */}
    </Routes>
  );
};

export default AppRoutes;
