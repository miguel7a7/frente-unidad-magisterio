import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Registro } from "../components/login/Registro";
import { DashbordRoutes } from "./DashbordRoutes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />

          <Route path="/*" element={<DashbordRoutes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
