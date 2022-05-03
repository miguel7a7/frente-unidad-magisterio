import React from 'react';
import { Link } from 'react-router-dom';
import calendario from '../../assets/svg/calendario.svg';
import reloj from '../../assets/svg/reloj.svg';

// configuramos la ruta de imagenes
const imagenes = require.context('../../assets/img/cursos', true);

export const Noticia = ({ noticia }) => {
  const { id, titulo, subtitle, fecha, hora, image } = noticia;

  return (
    <article className="noticia__card-content card__shadow" id="padre">
      <div className="noticia__card-img">
        <img src={imagenes(`./${image}.png`)} alt="image" />
      </div>

      <div className="noticia__card-descrip">
        <header className="noticia__card-header">
          <Link to={`/noticias/${id}`}>
            <h3 className="noticia__card-titulo">{titulo}</h3>
          </Link>
          <h6 className="noticia__card-subtitulo">{subtitle}</h6>

          <div className="noticia__card-date">
            <img src={calendario} alt="calendario" />
            <small>{fecha}</small>
          </div>

          <div className="noticia__card-date">
            <img src={reloj} alt="reloj" />
            <small>{hora}</small>
          </div>
        </header>

        <footer className="noticia__card-footer">
          <Link
            to={`/noticias/${id}`}
            className="btn btn__primary btn__noticia"
          >
            Ingresar
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z" />
            </svg>
          </Link>
        </footer>
      </div>
    </article>
  );
};
