import style from "./componentePrueba.module.css";
import paginarTexto from "../paginarTexto.js";
import React, { useState } from "react";
import BotonPagina from "../botonPagina.js";
import ImagenConteiner from "../ImagenConteiner.js";

const ComponentePrueba = (props) => {
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
    <div className={style.container}>
      <div className={style.ImagenConteiner}>
        <ImagenConteiner img={img}></ImagenConteiner>
      </div>
      <hr></hr>
      <div className={style.botones}>
        <BotonPagina
          text='Página Anterior'
          onClick={anteriorPagina}
        ></BotonPagina>
        <BotonPagina
          text='Siguiente Página '
          onClick={siguientePagina}
        ></BotonPagina>
      </div>
      {/* <hr></hr> */}
      <div className={style.textContainer}>
        {/* <div className={style.button}>Tags</div> */}
        <hr></hr>
        <p>{paginas[paginaActual]}</p>
        <br></br>
      </div>
    </div>
  );
};

export default ComponentePrueba;
