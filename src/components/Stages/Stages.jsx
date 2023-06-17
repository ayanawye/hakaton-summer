import s from './Stages.module.scss'
import block1 from '../../assets/block1.png';

export default function Stages() {
  return (
    <div>
      <div className={s.container}>
      <div className={s.item_wrap2}>
            <div className={s.icon}>
                <div className={s.image}>
                  <img src={block1} alt="" 
                  className={s.img}
                  />
                </div>
                   <h4>ОПРЕДЕЛЕНИЕ КРИТЕРИЕВ ОЦЕНКИ </h4> 
                   <ul>
                    <li>"Анализ системы компетенций заказчика, при необходимости - подбор ключевых компетенций из библиотеки HT Lab"
                    </li>
                    <li>Подготовка альбома вопросов для интервью по компетенциям</li>
                    </ul> 
            </div>
           <div className={s.icon}>
           <div className={s.image}>
                  <img src={block1} alt="" 
                  className={s.img}
                  />
                </div>
                  <h4>ОЦЕНКА: ДИСТАНЦИОННО ИЛИ ОЧНО</h4>  
                  <ul>
                    <li>Психологическое тестирование</li>
                    <li>Решение управленческих кейсов</li>
                    <li>Интервью</li>
                    <li>Обратная связь по результату теста</li>
                  </ul>
           </div>
           <div className={s.icon}>
           <div className={s.image}>
                  <img src={block1} alt="" 
                  className={s.img}
                  />
                </div>
                <h4>ЗАКЛЮЧЕНИЕ ПО ИТОГАМ ОЦЕНКИ</h4>
                <ul>
                    <li>Наши специалисты формируют отчет, содержащий:   </li>
                    <li> – прогноз успешности кандидата</li>   
                     <li> – психологический портрет</li>
                     <li> – перечень сильных и слабых сторон</li>
                     <li> – выбранные дополнительные опции</li>
                </ul>
           </div>
        </div>
      </div>
    </div>
  )
}

