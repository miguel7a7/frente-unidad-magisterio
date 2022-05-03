import React from 'react'
import { CarouselHeader } from './CarouselHeader'
import { HeaderCard } from './HeaderCard'

import './header.css'
import descripcion1 from '../../assets/svg/descripcion1.svg'
import descripcion2 from '../../assets/svg/descripcion2.svg'
import descripcion3 from '../../assets/svg/descripcion3.svg'
import qrFum from '../../assets/svg/qr-fum.svg'

export const Header = () => {
  const imagenes = [
    { slider: 'foto1.jpg', descripcion: 'Bienvenido Maestr@' },
    { slider: 'foto2.jpg', descripcion: 'Clases Virtuales' },
    { slider: 'foto3.jpg', descripcion: 'Nuestras Conferencias' },
    { slider: 'foto4.jpg', descripcion: 'Estamos a para ayudarte' },
  ]
  return (
    <div className="header">
      <header className="header__content" id="inicio">
        <h1 className="header__title">
          Honestidad, Responsabilidad, Consecuencia y Lealtad
        </h1>
        <CarouselHeader
          imagenes={imagenes}
          autoPlay={false}
          showButton={false}
        />

        <div className="header__subtitle header__left">
          <p>FUM</p>
        </div>

        <div className="haeder__descripcion">
          <h2 className="subtitulo__h2">
            <span>【</span>
            Te Brindaremos
            <span>】</span>
          </h2>
          <div className="header__descripcion-contain">
            <div className="header__descripcion-content">
              <HeaderCard
                rutaImage={descripcion1}
                titulo="Instruccion calificada con nuestros expositores en cada curso virtual, seminario o taller."
              />
              <HeaderCard
                rutaImage={descripcion3}
                titulo="En nuestros cursos virtuales, talleres y seminarios, te brindamos certificados con valor curricular."
              />
              <HeaderCard
                rutaImage={descripcion2}
                titulo="Todos nuestros archivos estaran disponibles a tu disposicion y en cualquier momentos."
              />
              <HeaderCard
                rutaImage={qrFum}
                titulo="Comparte nuestro codigo QR"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
