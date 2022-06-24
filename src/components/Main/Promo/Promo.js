import React from 'react';
import logo from '../../../images/promo_logo.svg';
import './Promo.css';

const Promo = () => {
  return (
    <section className='promo'> 
      <div className="wrapper">
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <div className="promo__wrapper">
          <img className='promo__logo' src={logo} alt="Лого" />
        </div>
      </div>
    </section>
  );
};

export default Promo;