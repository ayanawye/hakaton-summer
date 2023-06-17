import s from './MyButton.module.scss';

const MyButton = ({children, ...props}) => {
  return (
    <button className={s.btn} {...props}>{children}</button>
  );
};

export default MyButton;