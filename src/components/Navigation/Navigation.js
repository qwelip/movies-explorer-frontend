import React from 'react';
import { NavLink } from 'react-router-dom';
import close from '../../images/close.png';
import './Navigation.css';

const Navigation = ({onClose}) => {
  return (
    <nav className='navigation'>
      <button className='navigation__btn' onClick={onClose}>
        <img className='navigation__close' src={close} alt="Закрыть" />
      </button>
      <NavLink className='navigation__link navigation__link_first' activeClassName='navigation__link_active' exact to='/' onClick={onClose}>
        Главная
      </NavLink>
      <NavLink className='navigation__link navigation__link_first' activeClassName='navigation__link_active' to='/movies' onClick={onClose}>
        Фильмы
      </NavLink>
      <NavLink className='navigation__link navigation__link_first' activeClassName='navigation__link_active' to='/saved-movies' onClick={onClose}>
        Сохранённые фильмы
      </NavLink>
    </nav>
  );
};

export default Navigation;