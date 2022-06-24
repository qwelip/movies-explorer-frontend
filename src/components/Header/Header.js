import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="wrapper">
        <div className="header__block">
          <img className='header__logo' src={logo} alt="Логотип" />
          <nav className='header__nav'>
            <a className='header__reg' href="">
              <p className='header__reg-btn'>Регистрация</p>
            </a>
            <a className='header__login' href="">
              <button className='header__login-btn'>
                Войти
              </button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;