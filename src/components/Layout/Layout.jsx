import React, { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategories } from "../../store/reducer/categories";

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  return (
    <>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
