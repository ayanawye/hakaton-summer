import MyButton from "../UI/MyButton/MyButton";
import s from "./Tests.module.scss";
import { SiTestcafe } from "react-icons/si";
import { SiSpeedtest } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";

const Tests = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.left}>
            <h2>тест БИЗНЕС-ПРОФИЛЬ - это:</h2>
            <ul>
              <li>оценка профессионального потенционала</li>
              <li>прогнозы выраженности компетенции</li>
              <li>оценка стилей менеджмента</li>
              <li>оюратная связь с рекомендациями по развитию</li>
            </ul>
            <div className={s.btn}>
              <MyButton>Подробнее</MyButton>
            </div>
          </div>
          <div className={s.right}>
            <div>
              <div className={s.icon}>
                <SiTestcafe fill="#fff" size={30}/>
              </div>
              <div className={s.icon}>
                <SiSpeedtest fill="#fff" size={30}/>
              </div>
              <div className={s.icon}>
                <BsPersonWorkspace fill="#fff" size={30}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tests;
