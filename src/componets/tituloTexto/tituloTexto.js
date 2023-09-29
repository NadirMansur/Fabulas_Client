import style from "./tituloTexto.module.css";
import paginarTexto from "./paginarTexto.js";
import React, { useState } from "react";
import BotonPagina from "./botonPagina.js";
import ImagenConteiner from "./ImagenConteiner.js";

const TituloTexto = (props) => {
  const { img, texto } = props;

  const paginas = paginarTexto(texto, 600);
  const [paginaActual, setPaginaActual] = useState(0);

  const siguientePagina = () => {
    //console.log("Siguiente");
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
      <ImagenConteiner img={img}></ImagenConteiner>
      <div className={style.botones}>
        <BotonPagina
          text='Anterior pagina'
          onClick={anteriorPagina}
        ></BotonPagina>
        <BotonPagina
          text='Siguiente pagina'
          onClick={siguientePagina}
        ></BotonPagina>
      </div>
      <div className={style.parrafo}>
        <h4>{paginas[paginaActual]}</h4>
      </div>
    </div>
  );
};

export default TituloTexto;
