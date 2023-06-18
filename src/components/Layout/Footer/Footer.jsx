import { Link } from "react-router-dom";
import { SiTestin } from "react-icons/si";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.image}>
            <Link to="/">
              <SiTestin size={70} fill="#fff" />
            </Link>
          </div>
          <div className={s.nav}>
            <p>Социальные сети</p>
            <div>
              <a href="#">Telegram</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
          <div className={s.nav}>
            <p>Мы</p>
            <a href="#">О нас</a>
            <a href="#">Контакты</a>
          </div>
          <div className={s.nav}>
            <p>Офис</p>
            <a href="#">г.Бишкек, ул.Токтогула 125, бц/ Avangard</a>
          </div>
        </div>
        <p className={s.company}>© 2023 Testine. Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;
