import React from "react";
import { Ejecutivo } from "./Ejecutivo";

import "./notosotros.css";

export const NosotrosScreen = () => {
  const ejecutivos = [
    {
      id: 1,
      nombre: "Sonia Tellez Chambi",
      cargo: "Secretario Ejecutivo",
      telefono: "68166974",
      email: "sonia.tellez@gmail.com",
      namefoto: "usuario-3",
    },
    {
      id: 2,
      nombre: "Roman Quispe Mamani",
      cargo: "Secretario Ejecutivo",
      telefono: "69775258",
      email: "roman.quispe@gmail.com",
      namefoto: "usuario-1",
    },
    {
      id: 3,
      nombre: "Maribel Castro Copa",
      cargo: "Secretario Ejecutivo",
      telefono: "68166974",
      email: "sonia.tellez@gmail.com",
      namefoto: "usuario-3",
    },
    {
      id: 4,
      nombre: "Mario Callizara Paco",
      cargo: "Secretario Ejecutivo",
      telefono: "68166974",
      email: "sonia.tellez@gmail.com",
      namefoto: "usuario-3",
    },
  ];

  return (
    <div className="nosotros__container">
      <h2 className="subtitulo__h2">
        <span>【</span>
        Nuestros Ejecutivos
        <span>】</span>
      </h2>

      <div className="nosotros__content">
        {ejecutivos.map((ejecutivo) => (
          <Ejecutivo key={ejecutivo.id} ejecutivo={ejecutivo} />
        ))}
      </div>
    </div>
  );
};
