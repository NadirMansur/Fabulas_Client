import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.desarrollador}>
        <div className={style.Conteiner}>
          <h3>Desarrollador</h3>
        </div>
        <div className={style.Conteiner}>
          <h6>Nadir Mansur</h6>
        </div>
        <div className={style.Conteiner}>
          <a className={style.link} href='https://github.com/NadirMansur'>
            <h6 className={style.boton}>GitHub</h6>
          </a>
        </div>
        <div className={style.Conteiner}>
          <a className={style.link}
            href='https://www.linkedin.com/in/nadir-mansur-a36372206/'
          >
            <h6 className={style.boton}>Linkedin</h6>
          </a>
        </div>
        <div className={style.Conteiner}>
          <h6>Discord: Atahualpa_Estudio#0463</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
