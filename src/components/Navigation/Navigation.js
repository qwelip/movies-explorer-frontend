import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <a className='navigation__link' href="">Фильмы</a>
      <a className='navigation__link' href="">Сохранённые фильмы</a>
    </nav>
  );
};

export default Navigation;