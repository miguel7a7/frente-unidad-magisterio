import { createContext, useReducer } from 'react';
import { cursoGratisReducer } from './cursoGratisReducer';

export const CursoGratisContext = createContext();

export const CursoGratisProvider = ({ children }) => {
  const initialState = {
    listadoCursos: [
      {
        id: 2,
        titulo: 'Estrategias Interactivas',
        subtitle: 'ORIENTADAS AL PROCESO DE EVALUACION',
        fecha: 'Martes, 26 de abril, y Miercoles, 27 de abril.',
        hora: 'A partir de las 19:00 horas.',
        image: 'portada-2',
        publicado: '25/04/2020',
        cuestionario: [
          {
            id: 1,
            pregunta: '¿Que significa la sigla I.A.?',
            opcion_1: 'inteligencia aprendida',
            opcion_2: 'inmunologia artificial',
            opcion_3: 'inteligencia artificial',
            respuesta: 'inmunologia artificial',
          },
          {
            id: 2,
            pregunta: '¿Que color es el sol?',
            opcion_1: 'amarillo',
            opcion_2: 'rojo',
            opcion_3: 'verde',
            respuesta: 'amarillo',
          },
          {
            id: 3,
            pregunta: '¿Como se dice hola en ingles?',
            opcion_1: 'my sol',
            opcion_2: 'hi',
            opcion_3: 'hello',
            respuesta: 'hello',
          },
        ],
      },
      {
        id: 1,
        titulo: 'Inteligencia Artificial',
        subtitle: 'APLICADA A LA EDUCACIÓN',
        fecha: 'Viernes, 22 de abril, y sábado, 23 de abril.',
        hora: 'A partir de las 19:00 horas.',
        image: 'portada',
        publicado: '20/04/2020',
        cuestionario: [
          {
            id: 1,
            pregunta: '¿Que significa la sigla I.A.?',
            opcion_1: 'inteligencia aprendida',
            opcion_2: 'inmunologia artificial',
            opcion_3: 'inteligencia artificial',
            respuesta: 'inmunologia artificial',
          },
        ],
      },

      {
        id: 3,
        titulo: 'Inteligencia Artificial',
        subtitle: 'APLICADA A LA EDUCACIÓN',
        fecha: 'Viernes, 22 de abril, y sábado, 23 de abril.',
        hora: 'A partir de las 19:00 horas.',
        image: 'portada',
        publicado: '20/04/2020',
        cuestionario: [
          {
            id: 1,
            pregunta: '¿Que significa la sigla I.A.?',
            opcion_1: 'inteligencia aprendida',
            opcion_2: 'inmunologia artificial',
            opcion_3: 'inteligencia artificial',
            respuesta: 'inmunologia artificial',
          },
        ],
      },
    ],
  };

  const [state] = useReducer(cursoGratisReducer, initialState);

  return (
    <CursoGratisContext.Provider
      value={{
        listadoCursos: state.listadoCursos,
      }}
    >
      {children}
    </CursoGratisContext.Provider>
  );
};
