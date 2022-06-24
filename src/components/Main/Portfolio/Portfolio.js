import React from 'react';
import arrow from '../../../images/arrow.png';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className="wrapper">
        <h2 className='portfolio__title'>Портфолио</h2>

        <div className="portfolio__link-block">
          <p className='portfolio__link-title'>Проект интернет магазина</p>
          <a className='portfolio__link' href="https://qwelip.github.io/react-fake-api-store" target="blank">
            <img className='portfolio__link-icon' src={arrow} alt="Стрелка" />
          </a>
        </div>

        <div className="portfolio__link-block">
          <p className='portfolio__link-title'>Проект по сериалу Во все тяжкие</p>
          <a className='portfolio__link' href="https://qwelip.github.io/react-redux-Breaking-Bad/" target="blank">
            <img className='portfolio__link-icon' src={arrow} alt="Стрелка" />
          </a>
        </div>

        <div className="portfolio__link-block">
          <p className='portfolio__link-title'>Проект квиза</p>
          <a className='portfolio__link' href="https://qwelip.github.io/react-quiz/" target="blank">
            <img className='portfolio__link-icon' src={arrow} alt="Стрелка" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;