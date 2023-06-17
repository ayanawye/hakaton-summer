import s from './Map.module.scss';

const Map = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
      <iframe src="https://www.google.com/maps/d/embed?mid=10I1uQvdZIGlQY5F50HPdYTKEgmgRjZs&hl=ru&ehbc=2E312F" width="100%" height="100%"></iframe>
      </div>
    </section>
  );
};

export default Map;