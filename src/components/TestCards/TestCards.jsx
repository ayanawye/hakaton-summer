import { Link } from "react-router-dom";
import s from "./TestCards.module.scss";
import { useSelector } from "react-redux";

const TestCards = () => {
  const {categories} = useSelector(state => state.categories)
  console.log(categories)
  const courses = [
    {
      id: 1,
      name: "JS",
    },
    {
      id: 2,
      name: "C#",
    },
    {
      id: 3,
      name: "Python",
    },
    {
      id: 4,
      name: "Java",
    },
    {
      id: 5,
      name: "Marketing",
    },
  ];
  return (
    <section className={s.section}>
      <div className={s.title}><h2>Специальность</h2></div>
      <div className={s.container}>
        <div className={s.cards}>
          {courses.map((course) => (
              <Link to="/tests/courses" key={course.id} className={s.card}>
              <div className={s.image}>
                {/* <img src={course.image} className={s.img} /> */}
              </div>
              <h4>{course.name}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestCards;
