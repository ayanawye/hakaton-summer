import React from 'react';
import s from "./Header.module.scss"

function Header() {
  return (
    <header className='header'>
      <div className={s.container}>
        <div>
        <h1>Заголовок</h1>
        <nav className="nav">
          <ul>
            <li className='aboutus'><a href="#">О нас</a></li>
            <li className='test'><a href="#">Tect</a></li>
          </ul>
      </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;