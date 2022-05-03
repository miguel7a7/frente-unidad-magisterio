import React from 'react';
import { Header } from './Header';
import { Noticias } from './Noticias';
import { Sidebar } from './Sidebar';

import './styles/inicioscreen.css';
import { Videos } from './Videos';

export const InicioScreen = () => {
  return (
    <div>
      <Header />

      <div className="inicio__container">
        <h2 className="subtitulo__h2">
          <span>【</span>
          Cursos - Seminarios
          <span>】</span>
        </h2>
        <div className="inicio__content">
          <div className="inicio__content-noticias">
            <Noticias />
          </div>
          <div className="inicio__content-sidebar d-none">
            <Sidebar />
          </div>
        </div>
      </div>

      <div className="inicio__videos">
        <h2 className="subtitulo__h2">
          <span>【</span>
          Ultimos Videos
          <span>】</span>
        </h2>

        <Videos />
      </div>
    </div>
  );
};
