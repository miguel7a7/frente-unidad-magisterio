import React from 'react';
import './styles/videos.css';

import logo from '../../assets/img/logodark.png';

export const Video = ({ video }) => {
  const { ruta, title, sesion, fecha } = video;
  return (
    <div className="videocad__container card__shadow">
      <div className="videocad__content-descr">
        <div className="videocad__content-logo">
          <img src={logo} alt="logo-fum" />
        </div>

        <div className="videocad__content-detail">
          <h3 className="videocad__content-title">
            {title} <span className=""> - {sesion}</span>
          </h3>

          <p>Frente de Unidad del Magisterio</p>
          <small>{fecha}</small>
        </div>
      </div>
      <div className="videocad__content-video">
        <iframe
          src={ruta}
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
};
