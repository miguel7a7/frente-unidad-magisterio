/* eslint-disable indent */
import { typesCursosGratis } from '../../types/cursos_gratis';

export const cursoGratisReducer = (state = [], action) => {
  switch (action.type) {
    case typesCursosGratis.CARGA_DE_CURSOS:
      return state;
    default:
      return state;
  }
};
