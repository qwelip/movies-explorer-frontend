import React from 'react';
import arrow from '../../../images/arrow.png';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className="wrapper">
        <h2 className='portfolio__title'>Портфолио</h2>

          <a className='portfolio__link-block' href="https://qwelip.github.io/react-fake-api-store" target="blank">
            <p className='portfolio__link-title'>Проект интернет магазина</p>
            <img className='portfolio__link-icon' src={arrow} alt="Стрелка" />
          </a>

          <a className='portfolio__link-block' href="https://qwelip.github.io/react-redux-Breaking-Bad/" target="blank">
            <p className='portfolio__link-title'>Проект по сериалу Во все тяжкие</p>
            <img className='portfolio__link-icon' src={arrow} alt="Стрелка" />
          </a>

          <a className='portfolio__link-block' href="https://qwelip.github.io/react-quiz/" target="blank">
            <p className='portfolio__link-title'>Проект квиза</p>
            <img className='portfolio__link-icon' src={arrow} alt="Стрелка" />
          </a>

      </div>
    </section>
  );
};

export default Portfolio;