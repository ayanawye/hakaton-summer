import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Header.module.scss";
import {SiTestin} from 'react-icons/si';
import MyButton from '../../UI/MyButton/MyButton'

function Header() {
  const nav = [
    {id: 1, path: "/", title: "Главная"},
    {id: 2, path: "/tests", title: "Тесты"},
    {id: 3, path: "/contacts", title: "Контакты"},
    {id: 4, path: "/login", title: "Войти"},
  ]
  const {pathname} = useLocation()
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <header className={scroll ? s.headerActive : s.header}>
      <div className={s.container}>
        <nav className={s.nav}>
          <div className={s.logo}>
            <SiTestin size={70} fill="#85233E"/>
          </div>
          <div className={s.link}>
            {
              nav.map(link => (
                <NavLink key={link.id} className={pathname === link.path ? `${s.active}` : null} to={link.path}>
                  {link.title}
                </NavLink>
              ))
            }
            <div className={s.btn}>
              <MyButton><NavLink to="/regist">Sing Up</NavLink></MyButton>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
