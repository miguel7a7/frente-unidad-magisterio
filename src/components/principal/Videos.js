import React from 'react';
import { Video } from './Video';

import './styles/videos.css';

const listadoVideos = [
  {
    id: 1,
    ruta:
      'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FFUM.LP%2Fvideos%2F1612163695819969%2F&show_text=false&width=560&t=0',
    title: 'Estrategias Interactivas Orientadas al proceso de evaluación',
    sesion: 'Sesíon 1',
    fecha: '27/04/2022',
  },
  {
    id: 2,
    ruta:
      'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FFUM.LP%2Fvideos%2F1612163695819969%2F&show_text=false&width=560&t=0',
    title: 'Estrategias Interactivas Orientadas al proceso de evaluación',
    sesion: 'Sesíon 1',
    fecha: '27/04/2022',
  },
  {
    id: 3,
    ruta:
      'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FFUM.LP%2Fvideos%2F1612163695819969%2F&show_text=false&width=560&t=0',
    title: 'Estrategias Interactivas Orientadas al proceso de evaluación',
    sesion: 'Sesíon 1',
    fecha: '27/04/2022',
  },
];

export const Videos = () => {
  return (
    <div className="video__container">
      <div className="video__content">
        {listadoVideos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};
