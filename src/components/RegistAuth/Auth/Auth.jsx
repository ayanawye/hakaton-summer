import { Form, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "../Regist/Regist.module.scss";
import MyButton from "../../UI/MyButton/MyButton";
import Loading from "../../UI/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/reducer/login";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Не валидная почта").required("Обязательное поле!"),
  password: Yup.string()
    .required("Обязательное поле")
});

const Auth = () => {
  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.login)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(loginUser(values))
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
              <h2 className={s.title}>Войти</h2>
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

              <Form.Item>
                {loading && <Loading />}
                <div className={s.btn}>
                  <MyButton type="submit">Войти</MyButton>
                </div>
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

export default Auth;