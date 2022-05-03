import React from 'react';
import { CursoGratisProvider } from './context/cursos_gratis/CursoGratisContext';
import { AppRoutes } from './routers/AppRoutes';

export const AppFum = () => {
  return (
    <CursoGratisProvider>
      <AppRoutes />
    </CursoGratisProvider>
  );
};
