import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../components/login/Login';
import { Logout } from '../components/login/Logout';
import { DashbordRoutes } from './DashbordRoutes';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/*" element={<DashbordRoutes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
