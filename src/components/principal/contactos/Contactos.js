import React from 'react';

import logored from '../../../assets/img/logoRed.jpeg';
import fondoimg from '../../../assets/img/fondo1.jpg';
import './contactos.css';

export const Contactos = () => {
  return (
    <div className="contactos__container">
      <div className="contactos__content">
        <div className="contactos__detalle card__shadow">
          <img src={logored} alt="logo" loading="lazy" />
          <h3 className="contactos__title">CONTACTO</h3>

          <p className="contactos__subtitle">FRENTE DE UNIDAD DEL MAGISTERIO</p>
          <p>Direccion: Av. el Prado Nro. 55 frente al edificio Hansa.</p>

          <h3 className="contactos__title">HORARIOS</h3>
          <p className="contactos__horarios">
            Lunes a Viernes 09:00am a 12:00pm - 14:00pm a 19:00pm
          </p>
          <p className="contactos__horarios">
            Sabados 09:30am a 12:00pm (Previa peticion de encuentro)
          </p>
          <p className="contactos__horarios">
            DOMINGOS
            <span>
              <b> CERRADO</b>
            </span>
          </p>
        </div>
        <div className="contactos__img">
          <img
            className="contactos__img-fondo"
            src={fondoimg}
            alt="fondo"
            loading="lazy"
          />
        </div>
      </div>

      <div className="contactos__ubicacion">
        <h2 className="subtitulo__h2">
          <span>【</span>
          Ubicacion
          <span>】</span>
        </h2>

        <div className="contactos__maps">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-68.14436316490175%2C-16.50035873136838%2C-68.13238978385927%2C-16.49449505212024&amp;layer=mapnik"
            style={{ border: '1px solid black' }}
          ></iframe>
          <br />
          <small>
            <a href="https://www.openstreetmap.org/#map=17/-16.49743/-68.13838">
              Ver mapa más grande
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};
