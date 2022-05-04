import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

export const Registro = () => {
  return (
    <div className="login__container">
      <div className="login__content card__shadow">
        <form>
          <div className="form__content-descrip">
            <h2 className="form__title">
              <span>[</span> Registrate <span>]</span>
            </h2>
            <small>Frente de Unidad del Magisterio</small>
          </div>
          <div className="form-control">
            <label htmlFor="nombre">Ingrese su Nombre</label>
            <input
              autoComplete="off"
              type="text"
              name="name"
              id="nombre"
              placeholder="Nombres"
            />
          </div>
          <div className="form-control">
            <label htmlFor="apellidos">Ingrese su Apellido</label>
            <input
              autoComplete="off"
              type="text"
              name="apellido"
              id="apellidos"
              placeholder="Apellidos"
            />
          </div>
          <div className="form-control">
            <label htmlFor="mail">Ingrese su Email</label>
            <input
              autoComplete="off"
              type="email"
              name="email"
              id="mail"
              placeholder="correo electronico"
            />
          </div>
          <div className="form-control">
            <label htmlFor="pass">Crea tu Password</label>
            <input
              autoComplete="off"
              type="password"
              name="password"
              id="pass"
              placeholder="Ej. ******"
            />
          </div>

          <div className="form__btn-content">
            <button className="btn btn__primary btn__log">
              Registrarme
              <svg
                fill="#bcb4b4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z" />
              </svg>
            </button>
          </div>
        </form>

        <div className="form__cuenta">
          <Link to={"/login"}>Ya tienes una cuenta? Ingresa aqui</Link>
        </div>
      </div>
    </div>
  );
};
