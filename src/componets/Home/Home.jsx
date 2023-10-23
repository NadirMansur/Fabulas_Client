import Footer from "../Footer/Footer";
//import style from "./About.module.css";
import style from "./Home.module.css";
import TituloTexto from "../tituloTexto/tituloTexto";
import ComponentePrueba from "../tituloTexto/componentePrueba/componentePrueba"
import fabulasStore from "../../store/fabulas";
import { useEffect } from "react";

const Home = () => {
  const fabulas = fabulasStore((state) => state.fabulas);
  const reqFabulas = fabulasStore((state) => state.setFabulas);

  useEffect(() => {
    reqFabulas("https://openaifabulas-production.up.railway.app/");
    //console.log(fabulas);
  },[]);

  return (
    <div className={style.home}>
      <div className={style.tablaFila}>
        <div className={style.tabla}>
          <div className={style.filaAbout}>
            <div className={style.contenedor}>
              <div className={style.text}>Fabulas</div>
            </div>
          </div>
          <div className={style.fabulas}>
            {fabulas.map((fabula, index) => (
              <div className={style.fabula} key={index}>
                {fabula.image ? (
                <ComponentePrueba img={fabula.image} texto={fabula.texto}></ComponentePrueba>
                  // <TituloTexto img={fabula.image} texto={fabula.texto}></TituloTexto>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
