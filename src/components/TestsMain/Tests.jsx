import MyButton from "../UI/MyButton/MyButton";
import s from "./Tests.module.scss";

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
        </div>
      </div>
    </section>
  );
};

export default Tests;
