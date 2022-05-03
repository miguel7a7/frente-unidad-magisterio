import { BtnToggle } from './BtnToggle';
import { useState } from 'react';

import logoo from '../../assets/img/logodark.png';
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [btnToggleMenu, setBtnToggleMenu] = useState(false);
  const navigate = useNavigate();

  // Cambia el estado de toggle
  const handleBtnMenu = () => {
    setBtnToggleMenu((btn) => !btn);
  };

  // Cambiar pagina a Login
  const handleLogin = () => {
    navigate('/login', { replace: false });
  };

  return (
    <nav className="nav__container">
      <div className="nav__content">
        <div className="nav__logo">
          <div className="nav__logo-img">
            <img src={logoo} alt="logo" />
          </div>
          <div className="nav__logo-detail">
            <h2 className="nav__logo-title">F.U.M</h2>
            <small>Frente de Unidad de Magisterio</small>
          </div>
        </div>

        <ul className={`nav__links ${btnToggleMenu && 'active'}`}>
          <li>
            <NavLink to={'/'} className="linkactive" onClick={handleBtnMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to={'/nosotros'} onClick={handleBtnMenu}>
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to={'/cursos'} onClick={handleBtnMenu}>
              Cursos
            </NavLink>
          </li>
          <li>
            <NavLink to={'/contactos'} onClick={handleBtnMenu}>
              Contactos
            </NavLink>
          </li>
          <li>
            <NavLink to={'/minEducacion'} onClick={handleBtnMenu}>
              Min. Educación
            </NavLink>
          </li>
          <button className="btn navbar__btn" onClick={handleLogin}>
            Login{' '}
            <svg
              fill="#1a202d"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z" />
            </svg>
          </button>
        </ul>

        <div className="nav__icon">
          <BtnToggle
            setBtnToggleMenu={setBtnToggleMenu}
            btnToggleMenu={btnToggleMenu}
            handleBtnMenu={handleBtnMenu}
          />
        </div>
      </div>
    </nav>
  );
};
