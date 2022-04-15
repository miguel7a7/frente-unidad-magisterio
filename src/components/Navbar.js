import "./navbar.css"
import logoo from "../assets/img/logodark.png"
import { BtnToggle } from "./BtnToggle"
import { useState } from "react"

export const Navbar = () => {
  const [btnToggleMenu, setBtnToggleMenu] = useState(false)

  return (
    <nav className="nav__container">
      <div className="nav__content">
        <div className="nav__logo">
          <div className="nav__logo-img">
            <img src={logoo} alt="logo" />
          </div>
          <div className="nav__logo-detail">
            <h2>F.U.M</h2>
            <small>Frente de Unidad de Magisterio</small>
          </div>
        </div>

        <ul className={`nav__links ${btnToggleMenu && "active"}`}>
          <li>
            <a href="#" className="linkactive">
              Home
            </a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Galeria</a>
          </li>
          <button className="btn">Ingresar</button>
        </ul>

        <div className="nav__icon">
          <BtnToggle
            setBtnToggleMenu={setBtnToggleMenu}
            btnToggleMenu={btnToggleMenu}
          />
        </div>
      </div>
    </nav>
  )
}
