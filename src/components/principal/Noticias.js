import React, { useContext } from 'react';
import { CursoGratisContext } from '../../context/cursos_gratis/CursoGratisContext';
import { Noticia } from './Noticia';

import './styles/noticias.css';

export const Noticias = () => {
  const { listadoCursos } = useContext(CursoGratisContext);

  if (listadoCursos.length < 1) return null;

  return (
    <div className="noticias__container" id="noticias">
      <div className="noticias__content">
        {listadoCursos.map((noticia) => (
          <Noticia key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </div>
  );
};
