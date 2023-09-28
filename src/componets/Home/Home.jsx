import Footer from "../Footer/Footer";
//import style from "./About.module.css";
import style from "./Home.module.css";
import TituloTexto from "../tituloTexto/tituloTexto";
import fabulasStore from "../../store/fabulas";
import { useEffect, useState } from "react";

const Home = () => {
  const fabulas = fabulasStore((state) => state.fabulas);
  const reqFabulas = fabulasStore((state) => state.setFabulas);

  useEffect(() => {
    reqFabulas("https://openaifabulas-production.up.railway.app/");
    //console.log(fabulas);
  }, []);

  return (
    <div>
      <div className={style.tablaFila}>
        <div className={style.tabla}>
          <div className={style.filaAbout}>
            <div className={style.contenedor}>
              <div className={style.text}>Fabulas</div>
            </div>
          </div>
          <div className={style.fabulas}>
            {fabulas.map((fabula) => (
              <div className={style.fabula}>
                {/*console.log("fabulas.map", fabula)*/}
                {fabula.image ? (
                  <TituloTexto
                    img={fabula.image}
                    texto={fabula.texto}
                  ></TituloTexto>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
