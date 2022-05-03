import React from 'react';
import { InicioScreen } from '../components/principal/InicioScreen';
import { NoticiaScreen } from '../components/principal/NoticiaScreen';
import { Navbar } from '../components/ui/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Cursos } from '../components/principal/cursos/Cursos';
import { NosotrosScreen } from '../components/principal/nosotros/NosotrosScreen';
import { Contactos } from '../components/principal/contactos/Contactos';
import { MinEducacion } from '../components/principal/minEducacion/MinEducacion';
import { Footer } from '../components/ui/Footer';

export const DashbordRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<InicioScreen />} />
        <Route path="/noticias/:id" element={<NoticiaScreen />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/nosotros" element={<NosotrosScreen />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/minEducacion" element={<MinEducacion />} />

        <Route path="/*" element={<InicioScreen />} />
      </Routes>

      <Footer />
    </>
  );
};
