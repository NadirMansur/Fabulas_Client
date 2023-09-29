import style from "./ImagenConteiner.module.css";
import React from "react";

const ImagenConteiner = (props) => {
  const { img } = props;
  return (
    <div className={style.tituloConteiner}>
      <img src={img} alt='.'></img>
    </div>
  );
};

export default ImagenConteiner;
