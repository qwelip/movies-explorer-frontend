import React from 'react';
import logo from '../../images/logo.png'
import avatar from '../../images/ava.png'
import Navigation from '../Navigation/Navigation';
import './Header.css';

const regAndLoginBlock = () => {
  return (
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
  )
}

const accountBlock = () => {
  return (
    <div className="header__account">
      <p className='header__account-name'>Account</p>
      <img className='header__avatar' src={avatar} alt="Аватар" />
    </div>
  )
}

const Header = () => {
  return (
    <header className='header'>
      <div className="wrapper">
        <div className="header__block">
          <img className='header__logo' src={logo} alt="Логотип" />
          <Navigation/>
          {/* {regAndLoginBlock()} */}
          {accountBlock()}
        </div>
      </div>
    </header>
  );
};

export default Header;