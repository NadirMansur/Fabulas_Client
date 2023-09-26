import style from "./tituloTexto.module.css";

const TituloTexto = (props) => {
  const { img, texto } = props;
  return (
    <div className={style.historia}>
      <div className={style.tituloConteiner}>
        <img src={img}></img>
      </div>
      <div className={style.parrafo}>
        <h4>{texto}</h4>
      </div>
    </div>
  );
};

export default TituloTexto;
