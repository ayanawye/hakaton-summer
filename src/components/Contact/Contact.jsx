import s from "./Contact.module.scss";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMailUnread } from "react-icons/io";
import { AiFillClockCircle } from "react-icons/ai";
import MyButton from "../UI/MyButton/MyButton";
import { ImLocation2 } from "react-icons/im";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input } from "antd";
import * as Yup from "yup";
import TextArea from "antd/es/input/TextArea";

const Contact = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Введите ваше имя"),
    phone: Yup.string().required("Введите ваш номер телефона"),
    message: Yup.string().required("Введите ваше сообщение"),
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
                <BsTelephoneFill size={20}  fill="#85233E" />
                <a href="tel:+708780274">+0708780274</a>
              </div>
              <div>
                <BsTelephoneFill size={20}  fill="#85233E"/>
                <a href="tel:+708780274">+0708780274</a>
              </div>
            </div>
            <div className={s.email}>
              <IoMdMailUnread  size={20}  fill="#85233E"/>
              <a href="mailto:info@gmail.com">info@gmail.com</a>
            </div>
            <div>
              <AiFillClockCircle  size={20}  fill="#85233E"/>
              <a>Пн - Пт: 10:00 - 18:00</a>
            </div>
            <div>
              <ImLocation2 size={20} fill="#85233E"/>
              <a>г.Бишкек, БЦ Авангард, Токтогула 125/2</a>
            </div>
            </div>
          </div>
          <div className={s.form}>
            <h2>Напишите нам</h2>
            <Formik
              initialValues={{
                name: "",
                phone: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div>
                  <label htmlFor="name">Имя:</label>
                  <Field type="text" id="name" name="name" as={Input} />
                  <ErrorMessage name="name" style={{color: 'red'}} component="div" />
                </div>

                <div>
                  <label htmlFor="phone">Номер телефона:</label>
                  <Field type="text" id="phone" name="phone" as={Input} />
                  <ErrorMessage name="phone" style={{color: 'red'}}  component="div" />
                </div>

                <div>
                  <label htmlFor="message">Сообщение:</label>
                  <Field as={TextArea} id="message" name="message" />
                  <ErrorMessage name="message" style={{color: 'red'}}  component="div" />
                </div>

                <div className={s.btn}>
                  <MyButton type="submit">Отправить сообщение</MyButton>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
