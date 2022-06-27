import React from 'react';
import close from '../../images/close.png';
import './Navigation.css';

const Navigation = ({onClose}) => {
  return (
    <nav className='navigation'>
      <button className='navigation__btn' onClick={onClose}>
        <img className='navigation__close' src={close} alt="Закрыть" />
      </button>
      <p className='navigation__text'>Главная</p>
      <a className='navigation__link navigation__link_first' href="">Фильмы</a>
      <a className='navigation__link' href="">Сохранённые фильмы</a>
    </nav>
  );
};

export default Navigation;