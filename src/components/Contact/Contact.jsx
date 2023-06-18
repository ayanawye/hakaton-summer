import s from "./Contact.module.scss";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMailUnread } from "react-icons/io";
import { AiFillClockCircle } from "react-icons/ai";
import MyButton from "../UI/MyButton/MyButton";
import { ImLocation2 } from "react-icons/im";
import { Form, Input, Select, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { postApp } from "../../store/reducer/application";

const { Option } = Select;

const validationSchema = Yup.object().shape({
  full_name: Yup.string().required("Обязательное поле"),
  phone: Yup.string().required("Обязательное поле"),
  address: Yup.string().required("Обязательное поле"),
});

const Contact = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone: "",
      address: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(postApp(values))
      console.log(values);
    },
  });
  return (
    <main className={s.contact}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.left}>
            <div className={s.info}>
              <h2>Контакты</h2>
              <div className={s.phone}>
                <div>
                  <BsTelephoneFill size={20} fill="#85233E" />
                  <a href="tel:+708780274">+0708780274</a>
                </div>
                <div>
                  <BsTelephoneFill size={20} fill="#85233E" />
                  <a href="tel:+708780274">+0708780274</a>
                </div>
              </div>
              <div className={s.email}>
                <IoMdMailUnread size={20} fill="#85233E" />
                <a href="mailto:info@gmail.com">info@gmail.com</a>
              </div>
              <div>
                <AiFillClockCircle size={20} fill="#85233E" />
                <a>Пн - Пт: 10:00 - 18:00</a>
              </div>
              <div>
                <ImLocation2 size={20} fill="#85233E" />
                <a>г.Бишкек, БЦ Авангард, Токтогула 125/2</a>
              </div>
            </div>
          </div>
          <div className={s.form}>
            <h2>Пройти офлайн тестирование</h2>
            <Form layout="vertical" onFinish={formik.handleSubmit}>
              <Form.Item
                label="Имя"
                required
                validateStatus={formik.errors.full_name ? "error" : ""}
                help={formik.errors.full_name}
              >
                <Input
                  name="full_name"
                  value={formik.values.full_name}
                  onChange={formik.handleChange}
                />
              </Form.Item>

              <Form.Item
                label="Номер телефона"
                required
                validateStatus={formik.errors.phone ? "error" : ""}
                help={formik.errors.phone}
              >
                <Input
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
              </Form.Item>

              <Form.Item
                label="Адрес"
                required
                validateStatus={formik.errors.address ? "error" : ""}
                help={formik.errors.address}
              >
                <Select
                  name="address"
                  value={formik.values.address}
                  onChange={(value) => formik.setFieldValue("address", value)}
                >
                  <Option value="">Выберите адрес</Option>
                  <Option value="address1">Адрес 1</Option>
                  <Option value="address2">Адрес 2</Option>
                  <Option value="address3">Адрес 3</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                {/* <Button type="primary" htmlType="submit">
                  Отправить заявку
                </Button> */}
                <MyButton htmlType="submit">Отправить заявку</MyButton>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
