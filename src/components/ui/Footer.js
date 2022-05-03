import React from 'react';

import './footer.css';
import logodark from '../../assets/img/logodark.png';

export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__descripcion">
          <div className="footer__fum">
            <h3 className="footer__title">F.U.M.</h3>
            <small>Honestidad, Responsabilidad, Consecuencia y Lealtad</small>
            <img src={logodark} alt="logo" />
            <p>
              La CONFEDERACIÓN DE TRABAJADORES DE EDUCACIÓN URBANA DE BOLIVIA
              (CTEUB), es la máxima y única organización sindical de los
              trabajadores de educación urbana del País, que se constituye en la
              entidad suprema para la defensa de los intereses profesionales,
              laborales, sociales, culturales, económicos, políticos y
              democráticos de todos los trabajadores de educación urbana.
            </p>
          </div>
          <div className="footer__contactenos">
            <h3 className="footer__title">Contáctanos</h3>
            <h5>Email:</h5>
            <span>prueba.prueba@gmail.com</span>
            <span>prueba.fum@gmail.com</span>

            <h5>Teléfonos:</h5>
            <span>+591 69775214</span>
            <span>+591 22232730</span>

            <h5>Dirección:</h5>
            <span>Calle av.el prado Nro. 77 entre c/Potosi y c/mercado</span>
          </div>
        </div>

        <div className="footer__formulario">
          <h3 className="footer__title">Escribenos</h3>
          <form>
            <div className="form-control">
              <label htmlFor="nombre">Ingrese su Nombre</label>
              <input
                placeholder="Nombre completo"
                type="text"
                name="name"
                id="nombre"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Ingrese su Email</label>
              <input placeholder="Email" type="email" name="mail" id="email" />
            </div>
            <div className="form-control">
              <label htmlFor="mensajee">Ingrese su Mensaje</label>
              <textarea
                placeholder="Ingrese su texto"
                name="mensaje"
                id="mensajee"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="footer__btn-content">
              <button className="btn btn__primary btn__footer" type="submit">
                Enviar Formulario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
