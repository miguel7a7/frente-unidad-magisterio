import React, { useContext, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import {
  getItemDetalleID,
  scrollArriba,
} from '../../helpers/cursosgratis/funcionesCursos';

import logo from '../../assets/img/logodark.png';
import './styles/noticiascreen.css';
import { CursoGratisContext } from '../../context/cursos_gratis/CursoGratisContext';

export const NoticiaScreen = () => {
  // const [respuestas, setRespuestas] = useState({});
  let { id } = useParams();
  id = Number(id);

  const { listadoCursos } = useContext(CursoGratisContext);
  const itemCurso = useMemo(() => getItemDetalleID(id, listadoCursos), [id]);

  if (!itemCurso) {
    return <Navigate to={'/'} />;
  }
  console.log(itemCurso);
  const { titulo, subtitle, cuestionario } = itemCurso;
  // Scroll top cuando se ingresa
  scrollArriba();

  const handleCheck = (e) => {
    // console.log(e.target.value);
    console.log(e.target);
  };

  return (
    <div className="noticiascreen__container">
      <h2 className="itemNoti__title">FRENTE DE UNIDAD DEL MAGISTERIO</h2>
      <small className="itemNoti__subtitle">
        Honestidad, responsabilidad, Consecuencia y Lealtad
      </small>

      <div className="itemNoti__container">
        <div className="itemNoti__titulo card__sombra">
          <img src={logo} alt="logo-fum" />
          <div className="itemNoti__namecurso">
            <h2>{titulo}</h2>
            <h5>{subtitle}</h5>
          </div>
        </div>
      </div>

      <div className="itemNoti__time">
        <h3>Faltan: 00 d 10 h 57 m 25 s</h3>
        <small>
          Para imprimir su <span>CERTFICADO</span>
        </small>
      </div>

      <div className="itemNoti__form">
        <div className="itemNoti__form-formulario">
          <h2 className="subtitulo__h2">
            <span>【 </span>
            Ingrese sus datos
            <span> 】</span>
          </h2>
          <form>
            <div className="itemNoti__form-register card__shadow">
              <h4 className="itemNoti__form-title">Formulario de Registro</h4>
              <div className="form-control">
                <label htmlFor="nombres" className="">
                  Nombre de Completo
                </label>
                <input
                  type="text"
                  id="nombres"
                  className="form-control"
                  name="nombre"
                  placeholder="Ingresa tu Nombre"
                  required
                />
              </div>

              <div className="form-control">
                <label className="" htmlFor="cedulas">
                  Ingresa tu C.I.
                </label>
                <input
                  id="cedulas"
                  type="text"
                  className="form-control"
                  name="cedula"
                  placeholder="Numero de ci"
                  required
                />
              </div>

              <div className="itemNoti__form-btns">
                <button
                  type="submit"
                  className="btn btn__primary itemNoti__form-btn"
                >
                  Enviar y Obtener Certificado
                </button>
              </div>

              <div className="text-danger itemNoti__form-nota">
                Nota:
                <small className="itemNoti__form-obsv">
                  El llenado del formulario es completa responsabilidad del
                  participante, complete el cuestionario.
                </small>
              </div>
            </div>
          </form>
        </div>

        <div className="itemNoti__form-preguntas">
          <h2 className="subtitulo__h2">
            <span>【 </span>
            Completa las preguntas
            <span> 】</span>
          </h2>

          <div className="itemNoti__preguntas-container">
            {cuestionario.map((item) => (
              <div
                key={item.id}
                className="card__shadow itemNoti__preg-content"
              >
                <h6 className="itemNoti__pregunta">{item.pregunta}</h6>
                <div className="itemNoti__respuestas">
                  <div className="itemNoti__respuesta">
                    <input
                      className="itemNoti__respuesta-item"
                      type="radio"
                      name={item.id}
                      id={`resp1-${item.id}`}
                      value={item.opcion_1}
                      onChange={handleCheck}
                      dataresp={item.respuesta}
                    />
                    <label htmlFor={`resp1-${item.id}`}>{item.opcion_1}</label>
                  </div>
                  <div className="itemNoti__respuesta">
                    <input
                      className="itemNoti__respuesta-item"
                      type="radio"
                      name={item.id}
                      id={`resp2-${item.id}`}
                      value={item.opcion_2}
                      onChange={handleCheck}
                      dataresp={item.respuesta}
                    />
                    <label htmlFor={`resp2-${item.id}`}>{item.opcion_2}</label>
                  </div>
                  <div className="itemNoti__respuesta">
                    <input
                      className="itemNoti__respuesta-item"
                      type="radio"
                      name={item.id}
                      id={`resp3-${item.id}`}
                      value={item.opcion_3}
                      onChange={handleCheck}
                      dataresp={item.respuesta}
                    />
                    <label htmlFor={`resp3-${item.id}`}>{item.opcion_3}</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
