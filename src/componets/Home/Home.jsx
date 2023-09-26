import Footer from "../Footer/Footer";
import style from "./About.module.css";
import TituloTexto from "../tituloTexto/tituloTexto";
import fabulasStore from "../../store/fabulas";
import { useEffect, useState } from "react";

const Home = () => {
  const fabulas = fabulasStore((state) => state.fabulas);
  const reqFabulas = fabulasStore((state) => state.setFabulas);

  useEffect(() => {
    reqFabulas();
  }, []);

  return (
    <div className={style.about}>
      <div className={style.columna}>
        <div className={style.tablaFila}>
          <div className={style.tabla}>
            <div className={style.filaAbout}>
              <div className={style.contenedor}>
                <div className={style.text}>Fabulas</div>
              </div>
            </div>
            {
              /* aqui iria el Map de las fabulas*/
              fabulas.map((fabula) => {
                <TituloTexto
                  img={fabula.img}
                  texto={fabula.texto}
                ></TituloTexto>;
              })
            }
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
