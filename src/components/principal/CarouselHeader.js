/* eslint-disable indent */
import React, { useEffect, useState } from 'react'

import './carouselslider.css'

export const CarouselHeader = ({ imagenes, autoPlay = false, showButton }) => {
  const [selectIndex, setSelectIndex] = useState(1)
  const [selectImagen, setSelectImagen] = useState(imagenes[0])
  const [imgLoading, setImgLoading] = useState(false)

  useEffect(() => {
    if (autoPlay || !showButton) {
      const intervalo = setInterval(() => {
        selectNewImages(selectIndex, imagenes)
      }, 10000)
      return () => {
        clearInterval(intervalo)
      }
    }
  })

  const selectNewImages = (index, imagenes, next = true) => {
    setImgLoading(false)
    setTimeout(() => {
      const condicion = next
        ? selectIndex < imagenes.length - 1
        : selectIndex > 0

      const nextIndex = next
        ? condicion
          ? selectIndex + 1
          : 0
        : condicion
        ? selectIndex - 1
        : imagenes.length - 1
      setSelectImagen(imagenes[selectIndex])
      setSelectIndex(nextIndex)
    }, 700)
  }

  const previousImage = () => {
    selectNewImages(selectIndex, imagenes, false)
  }

  const nextImage = () => {
    selectNewImages(selectIndex, imagenes)
  }

  return (
    <div className="slider__container">
      <div className="slider__content">
        <img
          // src={`./src/assets/img/${selectImagen}`}
          src={`../../assets/img/${selectImagen.slider}`}
          className={`slider__img ${imgLoading ? 'loading' : ''}`}
          alt="images"
          loading="lazy"
          onLoad={() => setImgLoading(true)}
        />

        <div className={`slider__descripcion ${imgLoading ? 'loading' : ''}`}>
          <h2>{selectImagen.descripcion}</h2>
        </div>

        {/* <img src={`../../assets/img/foto1.jpg`} alt="" /> */}
        {showButton && (
          <div className="slider__btns">
            <button className="slider__btns-boton" onClick={previousImage}>
              {'<'}
            </button>
            <button className="slider__btns-boton" onClick={nextImage}>
              {'>'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
