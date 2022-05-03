import React from 'react';

import correo from '../../../assets/svg/email.svg';
import phone from '../../../assets/svg/phone.svg';
// import profesor1 from '../../../assets/img/usuarios/usuario-1.jpg';

const imagenes = require.context('../../../assets/img/usuarios', true);

export const Ejecutivo = ({ ejecutivo }) => {
  const { nombre, cargo, telefono, email, namefoto } = ejecutivo;

  return (
    <article className="card__shadow nosotros__item">
      <h5>Frente de Unidad del Magisterio</h5>
      <header className="nosotros__header">
        <div className="nosotros__header-content">
          <h4>Prof. {nombre}</h4>
          <span>{cargo}</span>
          <p>
            <img src={phone} alt="telefono" />
            +591 {telefono}
          </p>
          <p>
            <img src={correo} alt="email" />
            {email}
          </p>
        </div>
        <div className="nosotros__header-img">
          <img src={imagenes(`./${namefoto}.jpg`)} alt="profesor" />
        </div>
      </header>

      <footer className="noticias__footer">
        <a
          className="btn btn__primary"
          href={`https://api.whatsapp.com/send?phone=${telefono}&text=hola,%20qué%20tal?`}
          target="_blank"
          rel="noreferrer"
        >
          Contactame
        </a>
      </footer>
    </article>
  );
};
