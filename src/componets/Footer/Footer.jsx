import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.desarrollador}>
        <h3 className={style.artesan}>Desarrollador</h3>
        <div>
          <h6>Nadir Mansur</h6>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/nadir-mansur-a36372206/'>
            {" "}
            <h6>Linkedin</h6>
          </a>
        </div>
        <div>
          <a href='https://github.com/NadirMansur'>
            {" "}
            <h6>GitHub</h6>
          </a>
        </div>
        <div>
          <h6>Discord: Atahualpa_Estudio#0463</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
