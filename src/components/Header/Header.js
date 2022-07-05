import React, { useState } from 'react';
import logo from '../../images/logo.png'
import menu from '../../images/menu.png';
import avatar from '../../images/ava.png'
import Navigation from '../Navigation/Navigation';
import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';

const RegAndLoginBlock = () => {
  return (
    <nav className='header__nav'>
      <Link className='header__reg' to='/signup'>
        <p className='header__reg-btn'>Регистрация</p>
      </Link>
      <Link className='header__login' to='/signin'>
        <button className='header__login-btn'>
          Войти
        </button>
      </Link>
    </nav>
  )
}

const AccountBlock = ({onClose}) => {
  return (
    <NavLink className="header__account-block" activeClassName='header__account-block_active' to='/profile' onClick={onClose}>
      <p className='header__account-block-name'>Аккаунт</p>
      <img className='header__avatar' src={avatar} alt="Аватар" />
    </NavLink>
  )
}

const PopupMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='header__popup-menu'>
      <button onClick={handleClick} className='header__popup-menu-btn'>
        <img src={menu} alt="Меню" />
      </button>

      <div className={isOpen ? "header__popup-menu-block" : "header__popup-menu-block header__popup-menu-block_closed"}>
        <Navigation onClose={handleClick}/>
        <AccountBlock onClose={handleClick}/>
      </div>
    </div>
  );
};

const Header = () => {

  const { pathname } = useLocation();

  return (
    <header className='header'>
      <div className="wrapper">
        <div className="header__block">
          <Link to='/'>
            <img className='header__logo' src={logo} alt="Логотип" />
          </Link>
          {pathname !== '/' &&
          <>
            <div className="header__navigation-hider">
              <Navigation/>
            </div>
            <div className="header__account-block-hider">
              <AccountBlock/>
            </div>
          </>
          }
          {pathname === '/' && <RegAndLoginBlock/>}
          {pathname !== '/' && <PopupMenu/>}
        </div>
      </div>
    </header>
  );
};

export default Header;