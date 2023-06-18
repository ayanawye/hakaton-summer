import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategories } from "../../store/reducer/categories";
import { getSubCategories } from "../../store/reducer/subCategories";
import { getCourse } from "../../store/reducer/course";

const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCourse({ id }));
    dispatch(getSubCategories({ id }))
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/regist" || pathname === "/login") {
      setShow(false);
    } else {
      return setShow(true);
    }
  }, [pathname]);

  return (
    <>
      <>
        {show && <Header />}
        {children}
        <Outlet />
        {show && <Footer />}
      </>
    </>
  );
};

export default Layout;
