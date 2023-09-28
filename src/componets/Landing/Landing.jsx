import style from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
//import LogoYNombre from "../LogoYNombre/LogoYNombre";

const Landing = () => {
  return (
    <div>
      <div className={style.layout}>
        <div className={style.body}>
          <div className={style.leyenda}>
            <div className={style.texto}>
              <h2>Dedicada a una guía, una madre, una amiga.</h2>
            </div>
            <div className={style.texto}>
              <h3>
                Aqui encontraras narraciones orientadas a niños, generadas
                automáticamente por AI. Se publicara cada dia una narración
                nueva a las 16:00 hs ARG{" "}
              </h3>
            </div>
            <Link to='/home'>
              <button className={style.button}> Entrar!</button>
            </Link>
          </div>
        </div>
        <div>
          <Footer className={style.footer}></Footer>
        </div>
      </div>
    </div>
  );
};
export default Landing;
