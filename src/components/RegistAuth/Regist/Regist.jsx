import { Form, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./Regist.module.scss";
import MyButton from "../../UI/MyButton/MyButton";
import { NavLink } from "react-router-dom";
import Loading from "../../UI/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { registUser } from "../../../store/reducer/regist";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Не валидная почта").required("Обязательное поле!"),
  password: Yup.string()
    .required("Обязательное поле")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Пароль должен быть не короче 8, должны быть: заглавные латинские буквы , строчные буквы, цифры, уникальные знаки (@$!%*?&)!"
    ),
  password_confirmation: Yup.string()
    .required("Обязательное поле")
    .oneOf([Yup.ref("password"), null], "Пароли не совпадают"),
});

const Registration = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.regist);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      dispatch(registUser(values))
    },
  });

  return (
    <div className={s.regist}>
      <div className={s.reg_container}>
        <div className={s.content}>
          <div className={s.formik}>
            <Form
              layout="vertical"
              onFinish={formik.handleSubmit}
              className={s.form}
            >
              <h2 className={s.title}>Регистрация</h2>
              <Form.Item
                label="Email"
                hasFeedback
                validateStatus={formik.errors.email ? "error" : ""}
                help={formik.errors.email}
              >
                <Input
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </Form.Item>

              <Form.Item
                label="Пароль"
                hasFeedback
                validateStatus={formik.errors.password ? "error" : ""}
                help={formik.errors.password}
              >
                <Input.Password
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Form.Item>

              <Form.Item
                label="Подтверждение пароля"
                hasFeedback
                validateStatus={
                  formik.errors.password_confirmation ? "error" : ""
                }
                help={formik.errors.password_confirmation}
              >
                <Input.Password
                  name="password_confirmation"
                  value={formik.values.password_confirmation}
                  onChange={formik.handleChange}
                />
              </Form.Item>

              <Form.Item>
                {loading && <Loading />}
                <div className={s.btn}>
                  <MyButton type="submit">Зарегистрироваться</MyButton>
                </div>
                <p className={s.link}>
                  Уже есть аккаунт?
                  <NavLink className={s.login} to="/login">
                    Войти
                  </NavLink>
                </p>
              </Form.Item>
            </Form>
          </div>
          <div className={s.image}>
            <div className={s.img}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
