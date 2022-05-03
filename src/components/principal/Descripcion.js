import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Objetivos } from './Objetivos';
import { QuienesSomos } from './QuienesSomos';

import './styles/descripcion.css';

export const Descripcion = () => {
  return (
    <div className="descripcion__container">
      <div className="descripcion__links">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active__links card__sombra' : ''
          }
          to={'/quienesSomos'}
        >
          Quienes Somos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active__links card__sombra' : ''
          }
          to={'/objetivo'}
        >
          Objetivo
        </NavLink>
      </div>

      <Routes>
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/objetivo" element={<Objetivos />} />
      </Routes>
    </div>
  );
};
