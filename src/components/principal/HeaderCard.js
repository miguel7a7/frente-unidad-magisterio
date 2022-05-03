import React from 'react'

import './headercard.css'

export const HeaderCard = ({ rutaImage, titulo = '' }) => {
  return (
    <div className="card__sombra headercard__content-item">
      <div className="headercard__content">
        <div className="header__descripcion-img">
          <img src={rutaImage} alt="descripcion" loading="lazy" />
        </div>
        <div className="header__descripcion-desc">
          <p>{titulo}</p>
        </div>
      </div>
    </div>
  )
}
