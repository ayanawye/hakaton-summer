import MyButton from '../UI/MyButton/MyButton';
import Man from '../../assets/main.png';
import s from './Main.module.scss';

const Main = () => {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.text}>
            <h1>Создаем тесты для <span className={s.accent}>оценки персонала</span></h1>
            <p>независимая комплексная оценка потенциала
управленцев и ключевых сотрудников методами тестирования.
интеовью и наблюдения</p>
            <div className={s.btn}>
              <MyButton>Подробнее</MyButton>
            </div>
          </div>
          <div className={s.left}>
            <div className={s.image}>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;