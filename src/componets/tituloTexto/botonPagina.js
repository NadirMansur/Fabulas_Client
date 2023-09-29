import style from "./botonPagina.module.css";
import React from "react";

const BotonPagina = (props) => {
  const { text, onClick } = props;
  return (
    <button className={style.btn} onClick={() => { onClick() }}>
      {text}
    </button>
  );
};

export default BotonPagina;
