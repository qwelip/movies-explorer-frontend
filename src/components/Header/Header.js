import React, { useState } from 'react';
import logo from '../../images/logo.png'
import menu from '../../images/menu.png';
import avatar from '../../images/ava.png'
import Navigation from '../Navigation/Navigation';
import './Header.css';

const RegAndLoginBlock = () => {
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

const AccountBlock = () => {
  return (
    <div className="header__account-block">
      <p className='header__account-block-name'>Account</p>
      <img className='header__avatar' src={avatar} alt="Аватар" />
    </div>
  )
}

const PopupMenu = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='header__popup-menu'>
      <button onClick={handleClick} className='header__popup-menu-btn'>
        <img src={menu} alt="Меню" />
      </button>

      <nav className={isOpen ? "header__popup-menu-block" : "header__popup-menu-block header__popup-menu-block_closed"}>
        {children.map(item => item)}
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <header className='header'>
      <div className="wrapper">
        <div className="header__block">
          <img className='header__logo' src={logo} alt="Логотип" />
          <div className="header__navigation-hider">
            <Navigation/>
          </div>
          <div className="header__account-block-hider">
            <AccountBlock/>
          </div>
          {/* <RegAndLoginBlock/> */}
          <PopupMenu>
            <Navigation/>
            <AccountBlock/>
          </PopupMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;