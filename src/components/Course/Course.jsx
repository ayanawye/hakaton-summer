import React from "react";
import { useSelector } from "react-redux";
import s from "./Courses.module.scss";
import MyButton from "../UI/MyButton/MyButton";
import { Link } from "react-router-dom";

const Course = () => {
  const { course } = useSelector((state) => state.course);
  const { title, subtitle, description, photo, topic, test_url } = course;

  return (
    <main className={s.section}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.top}>
            <div className={s.image}>
              <img src={photo?.image} alt="images" className={s.img} />
            </div>
            <div>
            <h2>{title}</h2>
            <p className={s.sub}>{subtitle}</p>
            </div>
          </div>
          <p className={s.desc}>{description}</p>
          <p className={s.topic}>{topic}</p>
          <div>
            <MyButton><a href={test_url} target="_blank" rel="noopener noreferrer">Пройти тест</a></MyButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Course;
