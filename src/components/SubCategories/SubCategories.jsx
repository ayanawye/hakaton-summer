import s from "./Sub.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SubCategories = () => {
  const { subCategories } = useSelector((state) => state.subCategories);
  return (
    <main className={s.section}>
      <div className={s.container}>
          <div className={s.cards}>
            {subCategories.map((el) => (
              <Link
                to={`/tests/direction/${el.id}`}
                key={el.id}
                className={s.card}
              >
                <div className={s.image}>
                  <img src={el.photo} alt="images" className={s.img} />
                </div>
                <p>{el.name}</p>
              </Link>
            ))}
          </div>
      </div>
    </main>
  );
};

export default SubCategories;
