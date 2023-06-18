import { Link } from "react-router-dom";
import s from "./TestCards.module.scss";
import { useSelector } from "react-redux";

const TestCards = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <section className={s.section}>
      <div className={s.title}>
      <h2>Категории</h2>
      </div>
      <div className={s.container}>
        <div className={s.cards}>
          {categories.map((course) => (
            <Link
              to={`/tests/subcategories/${course.id}`}
              key={course.id}
              className={s.card}
            >
              <div className={s.image}>
                <img src={course.photo} alt="images" className={s.img} />
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
