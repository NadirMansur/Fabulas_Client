import style from "./tituloTexto.module.css";
import paginarTexto from "./paginarTexto.js";
import React, { useState } from "react";

const TituloTexto = (props) => {
  const { img, texto } = props;

  const paginas = paginarTexto(texto, 600);
  const [paginaActual, setPaginaActual] = useState(0);

  const siguientePagina = () => {
    if (paginaActual < paginas.length - 1) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const anteriorPagina = () => {
    if (paginaActual > 0) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div className={style.historia}>
      <div className={style.tituloConteiner}>
        <img src={img} alt= "."></img>
      </div>
      <div className={style.parrafo}>

        <div className={style.botones}>
          <button className={style.btn}
            onClick={() => {
              anteriorPagina();
            }}
          >
            Anterior pagina
          </button>
          <button className={style.btn}
            onClick={() => {
              siguientePagina();
            }}
          >
            Siguiente pagina
          </button>
        </div>
        <h4>{paginas[paginaActual]}</h4>
      </div>
    </div>
  );
};

export default TituloTexto;
