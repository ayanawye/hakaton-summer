import MyButton from '../UI/MyButton/MyButton';
import s from './Main.module.scss';

const Main = () => {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.text}>
            <h1>Центр повышения квалификации</h1>
            <p>Основной задачей Центра является организация повышения квалификации работников</p>
            <div>
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