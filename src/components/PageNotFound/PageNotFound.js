import React from 'react';
import { useHistory } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {

  const history = useHistory()

  const handleClick = () => {
    history.goBack();
  }

  return (
    <section className='page-not-found'>
      <h1 className='page-not-found__title'>404</h1>
      <p className='page-not-found__text'>Страница не найдена</p>
      <button className='page-not-found__link' onClick={handleClick}>
        Назад
      </button>
    </section>
  );
};

export default PageNotFound;