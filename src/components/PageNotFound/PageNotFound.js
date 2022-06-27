import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <section className='page-not-found'>
      <h1 className='page-not-found__title'>404</h1>
      <p className='page-not-found__text'>Страница не найдена</p>
      <a className='page-not-found__link' href="">Назад</a>
    </section>
  );
};

export default PageNotFound;